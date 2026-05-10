#!/usr/bin/env python3
"""Merge the latest OpenAPI rows into dashboard JSON files and refresh index.html."""

from __future__ import annotations

import json
import re
import ssl
import sys
from dataclasses import dataclass
from datetime import date, datetime
from pathlib import Path
from typing import Any, Callable
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qsl, quote, urlencode, urlparse, urlunparse
from urllib.request import urlopen


ROOT = Path(__file__).resolve().parent
DATA_DIR = ROOT / "data"
URLS_PATH = ROOT / "Data Update OpenAPI URLs.md"
INDEX_PATH = ROOT / "index.html"
STATIC_BUNDLE_PATH = DATA_DIR / "dashboard-data.js"
SSL_CONTEXT = ssl._create_unverified_context()
TODAY = date.today().isoformat()

SME_METRICS = {
    "DT_BR_A001": {"title": "기업수", "unit": "개", "color": "#2c7be5"},
    "DT_BR_B001": {"title": "종사자수", "unit": "명", "color": "#4a9bff"},
    "DT_BR_C001": {"title": "매출액", "unit": "백만원", "color": "#7fb8ff"},
}

EXPECTED_PERIODS = {
    "DT_BR_A001": "Y",
    "DT_BR_B001": "Y",
    "DT_BR_C001": "Y",
    "DT_303005_CI001": "M",
    "DT_1F02007": "Q",
    "DT_1KC2022": "Q",
    "DT_D10125": "M",
    "DT_512Y013": "M",
    "DT_512Y014": "M",
    "DT_501Y005": "Y",
    "DT_501Y006": "Y",
    "DT_501Y007": "Y",
    "DT_1TEC_P116": "Q",
    "DT_1TEC_P227": "Q",
    "DT_142N_F201": "Y",
}

PERIOD_LABELS = {
    "Y": "연간",
    "A": "연간",
    "Q": "분기",
    "M": "월간",
}

ANNUAL_CODES = {"Y", "A"}

GOOGLE_SHEET_DEFAULT_DOC_ID = "1fNiuZjbvbH7hjomQqXjAAxt6GE_b_X-_zuQlzE5p8YY"


@dataclass(frozen=True)
class UrlRecord:
    url: str
    params: dict[str, str]

    @property
    def tbl_id(self) -> str:
        return self.params.get("tblId", "")


@dataclass(frozen=True)
class Dataset:
    tab: str
    label: str
    filename: str
    key: str
    tbl_id: str
    match: Callable[[UrlRecord], bool] = lambda _record: True


@dataclass(frozen=True)
class SheetDataset:
    tab: str
    label: str
    filename: str
    key: str
    sheet_name: str


DATASETS = (
    Dataset("실물경기", "경기동행종합지수", "business.json", "businessIndexRows", "DT_303005_CI001"),
    Dataset("실물경기", "제조업 생산지수", "business.json", "productionRows", "DT_1F02007"),
    Dataset("실물경기", "서비스업 생산지수", "business.json", "serviceProductionRows", "DT_1KC2022"),
    Dataset("실물경기", "중소제조업 평균가동률", "business.json", "operationRows", "DT_D10125"),
    Dataset("체감경기", "BSI 실적", "feeling.json", "actualRows", "DT_512Y013"),
    Dataset("체감경기", "BSI 전망", "feeling.json", "outlookRows", "DT_512Y014"),
    Dataset("경영지표", "성장성", "management.json", "growthRows", "DT_501Y005"),
    Dataset("경영지표", "수익성", "management.json", "profitRows", "DT_501Y006"),
    Dataset("경영지표", "안정성", "management.json", "stabilityRows", "DT_501Y007"),
    Dataset("수출", "중소기업 수출", "export.json", "rows", "DT_1TEC_P116"),
    Dataset("수출", "국가별 수출", "export.json", "rows", "DT_1TEC_P227"),
    Dataset(
        "창업",
        "창업기업 수",
        "startup.json",
        "rows",
        "DT_142N_F201",
        lambda record: all(code in record.params.get("objL1", "").split() for code in ("A1", "A11")),
    ),
    Dataset(
        "창업",
        "업종별 창업",
        "startup.json",
        "rows",
        "DT_142N_F201",
        lambda record: all(code in record.params.get("objL1", "").split() for code in ("B1", "C1")),
    ),
)

SHEET_DATASETS = (
    SheetDataset("대출", "대출잔액 및 순증", "loan.json", "loanRows", ""),
    SheetDataset("대출", "연체율", "loan.json", "delinquencyRows", "연체율"),
    SheetDataset("투자", "투자 총괄", "investment.json", "investmentRows", "투자"),
    SheetDataset("투자", "업력별 투자", "investment.json", "investmentStageRows", "업력별투자"),
    SheetDataset("투자", "업종별 투자", "investment.json", "investmentSectorRows", "업종별투자"),
    SheetDataset("투자", "출자자별 투자", "investment.json", "investmentSourceRows", "출자자별"),
)


@dataclass
class Status:
    tab: str
    label: str
    latest: str
    changed: bool

    @property
    def message(self) -> str:
        state = "업데이트 완료" if self.changed else "최신 수치"
        return f"[{self.tab}] {self.label}: {state} (시점: {self.latest or '-'})"


def canonical_json(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def read_json(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {}
    with path.open("r", encoding="utf-8") as handle:
        payload = json.load(handle)
    return payload if isinstance(payload, dict) else {}


def write_json(path: Path, payload: dict[str, Any]) -> None:
    with path.open("w", encoding="utf-8") as handle:
        json.dump(payload, handle, ensure_ascii=False, separators=(",", ":"))


def parse_url_records() -> list[UrlRecord]:
    text = URLS_PATH.read_text(encoding="utf-8")
    urls = re.findall(r"https://[^\s)>\]]+", text)
    return [UrlRecord(url=url, params=dict(parse_qsl(urlparse(url).query, keep_blank_values=True))) for url in urls]


def parse_google_sheet_doc_id() -> str:
    text = URLS_PATH.read_text(encoding="utf-8")
    id_match = re.search(r"docs\.google\.com/spreadsheets/d/([^/\s]+)", text)
    if id_match:
        return id_match.group(1)
    explicit_match = re.search(r"문서 ID:\s*([A-Za-z0-9_-]+)", text)
    return explicit_match.group(1) if explicit_match else GOOGLE_SHEET_DEFAULT_DOC_ID


def ensure_output_fields(url: str, required: tuple[str, ...] = ("NM", "PRD_DE", "DT")) -> str:
    parsed = urlparse(url)
    params = dict(parse_qsl(parsed.query, keep_blank_values=True))
    fields = [field for field in re.split(r"[+\s]+", params.get("outputFields", "")) if field]
    for field in required:
        if field not in fields:
            fields.append(field)
    params["outputFields"] = "+".join(fields)
    return urlunparse(parsed._replace(query=urlencode(params, safe="+.")))


def fetch_rows(record: UrlRecord, label: str) -> list[dict[str, Any]]:
    url = ensure_output_fields(record.url)
    with urlopen(url, timeout=45, context=SSL_CONTEXT) as response:
        payload = json.load(response)
    if isinstance(payload, dict) and payload.get("err"):
        raise ValueError(payload.get("errMsg") or f"{label} API 오류")
    if not isinstance(payload, list):
        raise ValueError(f"{label} 응답 형식이 배열이 아닙니다.")
    rows = [
        row for row in payload
        if isinstance(row, dict)
        and str(row.get("PRD_DE", "")).strip()
        and str(row.get("DT", "")).strip()
    ]
    if not rows:
        raise ValueError(f"{label} 응답에 PRD_DE/DT 값이 없습니다.")
    return rows


def extract_json_payload(text: str) -> dict[str, Any] | list[Any]:
    trimmed = str(text or "").strip()
    array_start = trimmed.find("[")
    object_start = trimmed.find("{")
    candidates = [index for index in (array_start, object_start) if index >= 0]
    if not candidates:
        raise ValueError("JSON 응답을 찾지 못했습니다.")
    start = min(candidates)
    json_like = trimmed[start:]
    if json_like.startswith("{"):
        end = json_like.rfind("}")
    else:
        end = json_like.rfind("]")
    if end >= 0:
        json_like = json_like[:end + 1]
    return json.loads(json_like)


def map_gviz_payload(payload: dict[str, Any]) -> list[dict[str, Any]]:
    cols = payload.get("table", {}).get("cols", [])
    rows = payload.get("table", {}).get("rows", [])
    mapped_rows: list[dict[str, Any]] = []
    for row in rows:
        cells = row.get("c", []) if isinstance(row, dict) else []
        record: dict[str, Any] = {}
        for index, col in enumerate(cols):
            key = str(col.get("label") or col.get("id") or f"col_{index}").strip()
            cell = cells[index] if index < len(cells) else None
            value = cell.get("v") if isinstance(cell, dict) else None
            record[key] = value
        if any(value not in (None, "") for value in record.values()):
            mapped_rows.append(record)
    return mapped_rows


def fetch_google_sheet_via_gviz(doc_id: str, sheet_name: str) -> list[dict[str, Any]]:
    tqx = quote("out:json")
    if sheet_name:
        url = f"https://docs.google.com/spreadsheets/d/{doc_id}/gviz/tq?tqx={tqx}&sheet={quote(sheet_name)}"
    else:
        url = f"https://docs.google.com/spreadsheets/d/{doc_id}/gviz/tq?tqx={tqx}"
    with urlopen(url, timeout=45, context=SSL_CONTEXT) as response:
        text = response.read().decode("utf-8", errors="replace")
    payload = extract_json_payload(text)
    if not isinstance(payload, dict):
        raise ValueError("GViz 응답 형식이 올바르지 않습니다.")
    rows = map_gviz_payload(payload)
    if not rows:
        raise ValueError("GViz 응답에 데이터 행이 없습니다.")
    return rows


def fetch_google_sheet_via_opensheet(doc_id: str, sheet_name: str) -> list[dict[str, Any]]:
    if not sheet_name:
        raise ValueError("기본 시트는 OpenSheet로 읽을 수 없습니다.")
    url = f"https://opensheet.elk.sh/{doc_id}/{quote(sheet_name)}?raw=true"
    with urlopen(url, timeout=45, context=SSL_CONTEXT) as response:
        payload = json.load(response)
    if not isinstance(payload, list):
        raise ValueError("OpenSheet 응답 형식이 배열이 아닙니다.")
    rows = [row for row in payload if isinstance(row, dict) and any(value not in (None, "") for value in row.values())]
    if not rows:
        raise ValueError("OpenSheet 응답에 데이터 행이 없습니다.")
    return rows


def fetch_google_sheet_rows(doc_id: str, sheet_name: str) -> list[dict[str, Any]]:
    try:
        return fetch_google_sheet_via_gviz(doc_id, sheet_name)
    except Exception as gviz_error:
        try:
            return fetch_google_sheet_via_opensheet(doc_id, sheet_name)
        except Exception as opensheet_error:
            raise ValueError(
                f"{sheet_name or '기본'} 시트 로드 실패 ({gviz_error}; 대체 경로 실패: {opensheet_error})"
            ) from opensheet_error


def latest_period(rows: list[dict[str, Any]]) -> str:
    periods = [str(row.get("PRD_DE", "")).strip() for row in rows if str(row.get("PRD_DE", "")).strip()]
    return max(periods) if periods else ""


def last_changed(rows: list[dict[str, Any]]) -> str:
    values = [str(row.get("LST_CHN_DE", "")).strip() for row in rows if str(row.get("LST_CHN_DE", "")).strip()]
    return max(values) if values else ""


def sheet_period_value(row: dict[str, Any]) -> Any:
    for key in ("시점", "", "A"):
        value = row.get(key)
        if value not in (None, ""):
            return value
    return None


def parse_sheet_period(value: Any) -> tuple[str, str]:
    text = str(value or "").strip()
    if not text:
        return "", ""

    date_match = re.match(r"^Date\((\d+),(\d+),(\d+)\)$", text)
    if date_match:
        year = int(date_match.group(1))
        month = int(date_match.group(2)) + 1
        day = int(date_match.group(3))
        return f"{year:04d}{month:02d}{day:02d}", f"{year:04d}-{month:02d}"

    compact = re.sub(r"\D", "", text)
    if re.match(r"^\d{8}$", compact):
        return compact, f"{compact[:4]}-{compact[4:6]}-{compact[6:8]}"
    if re.match(r"^\d{6}$", compact):
        return f"{compact}01", f"{compact[:4]}-{compact[4:6]}"
    if re.match(r"^\d{4}$", compact):
        return f"{compact}0101", compact

    try:
        parsed = datetime.fromisoformat(text.replace("/", "-"))
        return parsed.strftime("%Y%m%d"), parsed.strftime("%Y-%m")
    except ValueError:
        return text, text


def latest_sheet_period(rows: list[dict[str, Any]]) -> tuple[str, str]:
    values: list[tuple[str, str]] = []
    for row in rows:
        key, label = parse_sheet_period(sheet_period_value(row))
        if key:
            values.append((key, label))
    return max(values, key=lambda item: item[0]) if values else ("", "")


def sheet_row_identity(row: dict[str, Any]) -> str:
    key, _label = parse_sheet_period(sheet_period_value(row))
    return key or canonical_json(row)


def row_identity(row: dict[str, Any]) -> tuple[str, ...]:
    return (
        str(row.get("TBL_ID") or row.get("TBL_NM") or "").strip(),
        str(row.get("ITM_ID") or row.get("ITM_NM") or "").strip(),
        str(row.get("C1") or row.get("C1_NM") or "").strip(),
        str(row.get("C2") or row.get("C2_NM") or "").strip(),
        str(row.get("C3") or row.get("C3_NM") or "").strip(),
        str(row.get("PRD_DE") or "").strip(),
    )


def merge_rows(existing_rows: list[dict[str, Any]], new_rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    merged: dict[tuple[str, ...], dict[str, Any]] = {}
    order: list[tuple[str, ...]] = []
    for row in existing_rows + new_rows:
        if not isinstance(row, dict):
            continue
        identity = row_identity(row)
        if identity not in merged:
            order.append(identity)
        merged[identity] = row
    return [merged[identity] for identity in order]


def split_business_index(rows: list[dict[str, Any]]) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    composite: list[dict[str, Any]] = []
    cycle: list[dict[str, Any]] = []
    for row in rows:
        label = " ".join(str(row.get(key, "")) for key in ("NM", "C1_NM", "OBJ_NM", "ITM_NM"))
        if "순환" in label:
            cycle.append(row)
        else:
            composite.append(row)
    return composite, cycle


def parse_number(value: Any) -> int | float | None:
    try:
        number = float(str(value).replace(",", "").strip())
    except (TypeError, ValueError):
        return None
    return int(number) if number.is_integer() else number


def build_sme_years(rows: list[dict[str, Any]]) -> dict[str, dict[str, dict[str, int | float | None]]]:
    years: dict[str, dict[str, dict[str, int | float | None]]] = {}
    for row in rows:
        year = str(row.get("PRD_DE", "")).strip()
        value = parse_number(row.get("DT"))
        industry = str(row.get("C1_NM") or row.get("NM") or "전산업").strip() or "전산업"
        region = str(row.get("C2_NM") or "").strip()
        company_type = str(row.get("C3_NM") or "").strip()
        if not year or value is None or (region and region != "전국") or company_type not in {"전체기업", "중소기업"}:
            continue
        bucket = years.setdefault(year, {}).setdefault(industry, {"total": None, "sme": None})
        bucket["total" if company_type == "전체기업" else "sme"] = value
    return years


def update_sme_profile(records: list[UrlRecord], period_warnings: list[str]) -> tuple[bool, list[Status]]:
    path = DATA_DIR / "sme_profile.json"
    existing = read_json(path)
    datasets = existing.get("nextData", []) if isinstance(existing.get("nextData"), list) else []
    by_title = {str(item.get("title", "")): dict(item) for item in datasets if isinstance(item, dict)}
    statuses: list[Status] = []
    last_updates: list[str] = []

    for tbl_id, metric in SME_METRICS.items():
        record = find_record(records, tbl_id)
        rows = fetch_rows(record, f"위상 {metric['title']}")
        validate_period(record, rows, period_warnings)
        fetched_years = build_sme_years(rows)
        old_item = by_title.get(metric["title"], {"title": metric["title"], "unit": metric["unit"], "color": metric["color"], "years": {}})
        old_years = old_item.get("years", {}) if isinstance(old_item.get("years"), dict) else {}
        merged_years = {**old_years, **fetched_years}
        old_item.update({"unit": metric["unit"], "color": metric["color"], "years": dict(sorted(merged_years.items()))})
        by_title[metric["title"]] = old_item
        last_updates.append(last_changed(rows))
        statuses.append(
            Status(
                tab="위상",
                label=metric["title"],
                latest=latest_period(rows),
                changed=canonical_json(old_years) != canonical_json(merged_years),
            )
        )

    next_data = [by_title[metric["title"]] for metric in SME_METRICS.values()]
    next_years = sorted({year for item in next_data for year in item.get("years", {})})
    payload = {
        "source": "kosis_snapshot",
        "generatedAt": TODAY,
        "lastUpdated": max([value for value in last_updates if value], default=existing.get("lastUpdated", "")),
        "nextYears": next_years,
        "nextData": next_data,
    }
    changed = canonical_json(existing) != canonical_json(payload)
    if changed:
        write_json(path, payload)
    return changed, statuses


def find_record(records: list[UrlRecord], tbl_id: str, match: Callable[[UrlRecord], bool] = lambda _record: True) -> UrlRecord:
    for record in records:
        if record.tbl_id == tbl_id and match(record):
            return record
    raise ValueError(f"OPENAPI URL을 찾지 못했습니다: {tbl_id}")


def validate_period(record: UrlRecord, rows: list[dict[str, Any]], warnings: list[str]) -> None:
    expected = EXPECTED_PERIODS.get(record.tbl_id)
    if not expected:
        return
    actual_values = {str(row.get("PRD_SE") or record.params.get("prdSe") or "").strip().upper() for row in rows}
    actual_values.discard("")
    normalized_actual = {"Y" if value in ANNUAL_CODES else value for value in actual_values}
    normalized_expected = "Y" if expected in ANNUAL_CODES else expected
    if normalized_actual and normalized_expected not in normalized_actual:
        actual_label = ", ".join(PERIOD_LABELS.get(value, value) for value in sorted(actual_values))
        expected_label = PERIOD_LABELS.get(expected, expected)
        warnings.append(f"{record.tbl_id}: 필요한 주기 {expected_label}, 응답 주기 {actual_label}")


def update_json_file(filename: str, payload_rows: dict[str, list[dict[str, Any]]]) -> tuple[bool, dict[str, bool]]:
    path = DATA_DIR / filename
    existing = read_json(path)
    payload = dict(existing) if existing else {"source": "kosis_snapshot"}
    latest_periods = dict(payload.get("latestPeriods", {})) if isinstance(payload.get("latestPeriods"), dict) else {}
    last_updated = dict(payload.get("lastUpdated", {})) if isinstance(payload.get("lastUpdated"), dict) else {}
    changed_by_key: dict[str, bool] = {}

    for key, rows in payload_rows.items():
        old_rows = payload.get(key, []) if isinstance(payload.get(key), list) else []
        if key in {"productionRows", "serviceProductionRows"}:
            old_rows = [row for row in old_rows if str(row.get("PRD_SE", "")).strip().upper() == "Q"]
        merged = merge_rows(old_rows, rows)
        changed_by_key[key] = canonical_json(old_rows) != canonical_json(merged)
        payload[key] = merged
        latest_periods[key] = latest_period(merged)
        last_updated[key] = max(last_updated.get(key, ""), last_changed(rows))

    payload["source"] = "kosis_snapshot"
    payload["generatedAt"] = TODAY
    payload["latestPeriods"] = latest_periods
    payload["lastUpdated"] = last_updated

    changed = canonical_json(existing) != canonical_json(payload)
    if changed:
        write_json(path, payload)
    return changed, changed_by_key


def update_regular_datasets(records: list[UrlRecord], period_warnings: list[str]) -> tuple[bool, list[Status]]:
    rows_by_file: dict[str, dict[str, list[dict[str, Any]]]] = {}
    status_specs: list[tuple[str, str, str, str]] = []

    for dataset in DATASETS:
        record = find_record(records, dataset.tbl_id, dataset.match)
        rows = fetch_rows(record, dataset.label)
        validate_period(record, rows, period_warnings)

        if dataset.key == "businessIndexRows":
            composite, cycle = split_business_index(rows)
            rows_by_file.setdefault(dataset.filename, {}).setdefault("businessCompositeRows", []).extend(composite)
            rows_by_file.setdefault(dataset.filename, {}).setdefault("businessCycleRows", []).extend(cycle)
            status_specs.append((dataset.filename, "businessCompositeRows", dataset.tab, "경기동행종합지수"))
            status_specs.append((dataset.filename, "businessCycleRows", dataset.tab, "경기동행지수 순환변동치"))
        else:
            rows_by_file.setdefault(dataset.filename, {}).setdefault(dataset.key, []).extend(rows)
            status_specs.append((dataset.filename, dataset.key, dataset.tab, dataset.label))

    any_changed = False
    changed_by_file_key: dict[tuple[str, str], bool] = {}
    for filename, payload_rows in rows_by_file.items():
        changed, changed_by_key = update_json_file(filename, payload_rows)
        any_changed = any_changed or changed
        changed_by_file_key.update({(filename, key): value for key, value in changed_by_key.items()})

    statuses = [
        Status(
            tab=tab,
            label=label,
            latest=latest_period(rows_by_file.get(filename, {}).get(key, [])),
            changed=changed_by_file_key.get((filename, key), False),
        )
        for filename, key, tab, label in status_specs
    ]
    return any_changed, statuses


def sort_sheet_rows(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    return sorted(rows, key=sheet_row_identity)


def update_google_sheet_datasets() -> tuple[bool, list[Status]]:
    doc_id = parse_google_sheet_doc_id()
    rows_by_file: dict[str, dict[str, list[dict[str, Any]]]] = {}
    latest_by_file_key: dict[tuple[str, str], str] = {}

    for dataset in SHEET_DATASETS:
        rows = fetch_google_sheet_rows(doc_id, dataset.sheet_name)
        rows_by_file.setdefault(dataset.filename, {})[dataset.key] = sort_sheet_rows(rows)
        _latest_key, latest_label = latest_sheet_period(rows)
        latest_by_file_key[(dataset.filename, dataset.key)] = latest_label

    any_changed = False
    changed_by_file_key: dict[tuple[str, str], bool] = {}

    for filename, payload_rows in rows_by_file.items():
        path = DATA_DIR / filename
        existing = read_json(path)
        payload = dict(existing) if existing else {}
        latest_periods = dict(payload.get("latestPeriods", {})) if isinstance(payload.get("latestPeriods"), dict) else {}

        for key, rows in payload_rows.items():
            old_rows = payload.get(key, []) if isinstance(payload.get(key), list) else []
            changed_by_file_key[(filename, key)] = canonical_json(old_rows) != canonical_json(rows)
            payload[key] = rows
            latest_periods[key] = latest_by_file_key.get((filename, key), "")

        payload["source"] = "google_sheet_snapshot"
        payload["generatedAt"] = TODAY
        payload["latestPeriods"] = latest_periods

        changed = canonical_json(existing) != canonical_json(payload)
        any_changed = any_changed or changed
        if changed:
            write_json(path, payload)

    statuses = [
        Status(
            tab=dataset.tab,
            label=dataset.label,
            latest=latest_by_file_key.get((dataset.filename, dataset.key), ""),
            changed=changed_by_file_key.get((dataset.filename, dataset.key), False),
        )
        for dataset in SHEET_DATASETS
    ]
    return any_changed, statuses


def write_static_bundle() -> None:
    bundle: dict[str, Any] = {}
    for path in sorted(DATA_DIR.glob("*.json")):
        bundle[path.name] = read_json(path)
    script = "window.__DASHBOARD_STATIC_JSON__=" + json.dumps(bundle, ensure_ascii=False, separators=(",", ":")) + ";"
    STATIC_BUNDLE_PATH.write_text(script, encoding="utf-8")


def bump_index_bundle_version() -> None:
    if not INDEX_PATH.exists():
        return
    stamp = datetime.now().strftime("%Y%m%d%H%M%S")
    text = INDEX_PATH.read_text(encoding="utf-8")
    updated = re.sub(r'(\./data/dashboard-data\.js\?v=)[^"]+', rf"\g<1>{stamp}", text, count=1)
    if updated != text:
        INDEX_PATH.write_text(updated, encoding="utf-8")


def print_warnings(warnings: list[str]) -> None:
    if not warnings:
        print("OPENAPI URL 주기 확인: 이상 없음")
        return
    print("OPENAPI URL 주기 확인:")
    for warning in warnings:
        print(f"- {warning}")


def print_statuses(statuses: list[Status]) -> None:
    print("탭별 데이터 확인 결과:")
    current_tab = ""
    for status in statuses:
        if status.tab != current_tab:
            current_tab = status.tab
            print(f"\n[{current_tab}]")
        state = "업데이트 완료" if status.changed else "최신 수치"
        print(f"- {status.label}: {state} (시점: {status.latest or '-'})")


def main() -> int:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    try:
        records = parse_url_records()
        period_warnings: list[str] = []
        sme_changed, sme_notes = update_sme_profile(records, period_warnings)
        regular_changed, regular_notes = update_regular_datasets(records, period_warnings)
        sheet_changed, sheet_notes = update_google_sheet_datasets()
        statuses = sme_notes + regular_notes + sheet_notes

        print_warnings(period_warnings)
        print_statuses(statuses)
        if sme_changed or regular_changed or sheet_changed:
            write_static_bundle()
            bump_index_bundle_version()
            print("\n반영 결과:")
            print("- data/dashboard-data.js 갱신")
            print("- index.html 반영 완료")
        else:
            print("\n반영 결과:")
            print("- 이미 최신 수치라 업데이트 필요 없음")
        return 0
    except (HTTPError, URLError) as error:
        print(f"API 호출 실패: {error}", file=sys.stderr)
        return 1
    except Exception as error:
        print(f"실행 실패: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
