#!/usr/bin/env python3
"""Update dashboard JSON snapshots for SME, business, feeling, management, export, and startup tabs."""

from __future__ import annotations

import json
import ssl
import sys
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode
from urllib.request import urlopen


API_KEY = "ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI="
BASE_URL = "https://kosis.kr/openapi/Param/statisticsParameterData.do"
ROOT = Path(__file__).resolve().parent
DATA_DIR = ROOT / "data"
SSL_CONTEXT = ssl._create_unverified_context()
TODAY = date.today()
CURRENT_YEAR = TODAY.year
SME_PROFILE_PATH = DATA_DIR / "sme_profile.json"
GOOGLE_SHEET_DOC_ID = "1fNiuZjbvbH7hjomQqXjAAxt6GE_b_X-_zuQlzE5p8YY"
STATIC_BUNDLE_PATH = DATA_DIR / "dashboard-data.js"
SME_METRICS = (
    {
        "title": "기업수",
        "unit": "개",
        "color": "#2c7be5",
        "tblId": "DT_BR_A001",
    },
    {
        "title": "종사자수",
        "unit": "명",
        "color": "#4a9bff",
        "tblId": "DT_BR_B001",
    },
    {
        "title": "매출액",
        "unit": "백만원",
        "color": "#7fb8ff",
        "tblId": "DT_BR_C001",
    },
)


@dataclass(frozen=True)
class DatasetConfig:
    key: str
    params: dict[str, str]


@dataclass(frozen=True)
class FileConfig:
    filename: str
    datasets: tuple[DatasetConfig, ...]


FILE_CONFIGS: tuple[FileConfig, ...] = (
    FileConfig(
        filename="startup.json",
        datasets=(
            DatasetConfig(
                key="rows",
                params={
                    "itmId": "16142T1",
                    "objL1": "A1+A11+B1+C1+D1+F1+S11+S12+S13+S14+S15+S16+S17+S18+S19+S20+S21+S22+S23+Z1",
                    "objL2": "",
                    "objL3": "",
                    "prdSe": "Y",
                    "startPrdDe": "2016",
                    "endPrdDe": str(CURRENT_YEAR),
                    "outputFields": "ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT",
                    "orgId": "142",
                    "tblId": "DT_142N_F201",
                },
            ),
        ),
    ),
    FileConfig(
        filename="business.json",
        datasets=(
            DatasetConfig(
                key="businessCompositeRows",
                params={
                    "itmId": "T001",
                    "objL1": "00",
                    "prdSe": "M",
                    "startPrdDe": "201501",
                    "endPrdDe": f"{CURRENT_YEAR}12",
                    "outputFields": "C1_OBJ_NM+ITM_NM+UNIT_NM+PRD_DE+DT",
                    "orgId": "303",
                    "tblId": "DT_303005_CI001",
                },
            ),
            DatasetConfig(
                key="businessCycleRows",
                params={
                    "itmId": "T001",
                    "objL1": "01",
                    "prdSe": "M",
                    "startPrdDe": "201501",
                    "endPrdDe": f"{CURRENT_YEAR}12",
                    "outputFields": "C1_OBJ_NM+ITM_NM+UNIT_NM+PRD_DE+DT",
                    "orgId": "303",
                    "tblId": "DT_303005_CI001",
                },
            ),
            DatasetConfig(
                key="productionRows",
                params={
                    "itmId": "T33",
                    "objL1": "ALL",
                    "prdSe": "Q",
                    "startPrdDe": "201501",
                    "endPrdDe": f"{CURRENT_YEAR}04",
                    "outputFields": "ITM_NM+UNIT_NM+PRD_DE+DT+LST_CHN_DE",
                    "orgId": "101",
                    "tblId": "DT_1F02007",
                },
            ),
            DatasetConfig(
                key="serviceProductionRows",
                params={
                    "itmId": "T2",
                    "objL1": "ALL",
                    "prdSe": "Q",
                    "startPrdDe": "201501",
                    "endPrdDe": f"{CURRENT_YEAR}04",
                    "outputFields": "C1_NM+ITM_NM+UNIT_NM+PRD_DE+DT+LST_CHN_DE",
                    "orgId": "101",
                    "tblId": "DT_1KC2022",
                },
            ),
            DatasetConfig(
                key="operationRows",
                params={
                    "itmId": "1634013103124559T1",
                    "objL1": "ALL",
                    "prdSe": "M",
                    "startPrdDe": "202301",
                    "endPrdDe": f"{CURRENT_YEAR}12",
                    "outputFields": "C1_NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT",
                    "orgId": "340",
                    "tblId": "DT_D10125",
                },
            ),
        ),
    ),
    FileConfig(
        filename="feeling.json",
        datasets=(
            DatasetConfig(
                key="actualRows",
                params={
                    "itmId": "13103134673999",
                    "objL1": "13102134673BUSINESS_TYPE_CD.X6000",
                    "objL2": "ALL",
                    "prdSe": "M",
                    "startPrdDe": "201501",
                    "endPrdDe": f"{CURRENT_YEAR}12",
                    "outputFields": "ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT",
                    "orgId": "301",
                    "tblId": "DT_512Y013",
                },
            ),
            DatasetConfig(
                key="outlookRows",
                params={
                    "itmId": "13103134488999",
                    "objL1": "13102134488BUSINESS_TYPE_CD.X6000",
                    "objL2": "ALL",
                    "prdSe": "M",
                    "startPrdDe": "201501",
                    "endPrdDe": f"{CURRENT_YEAR}12",
                    "outputFields": "ORG_ID+TBL_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT",
                    "orgId": "301",
                    "tblId": "DT_512Y014",
                },
            ),
        ),
    ),
    FileConfig(
        filename="management.json",
        datasets=(
            DatasetConfig(
                key="growthRows",
                params={
                    "itmId": "13103134632999",
                    "objL1": "13102134632BZTYP_CD.ZZZ00",
                    "objL2": "13102134632ENTERPRISE_SCALE.A+13102134632ENTERPRISE_SCALE.L+13102134632ENTERPRISE_SCALE.M",
                    "objL3": "13102134632ACC_ITEM.506",
                    "prdSe": "Y",
                    "startPrdDe": "2009",
                    "endPrdDe": str(CURRENT_YEAR),
                    "outputFields": "ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT",
                    "orgId": "301",
                    "tblId": "DT_501Y005",
                },
            ),
            DatasetConfig(
                key="profitRows",
                params={
                    "itmId": "13103134573999",
                    "objL1": "13102134573BZTYP_CD.ZZZ00",
                    "objL2": "13102134573ENTERPRISE_SCALE.A+13102134573ENTERPRISE_SCALE.L+13102134573ENTERPRISE_SCALE.M",
                    "objL3": "13102134573ACC_ITEM.611",
                    "prdSe": "Y",
                    "startPrdDe": "2009",
                    "endPrdDe": str(CURRENT_YEAR),
                    "outputFields": "ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT",
                    "orgId": "301",
                    "tblId": "DT_501Y006",
                },
            ),
            DatasetConfig(
                key="stabilityRows",
                params={
                    "itmId": "13103134678999",
                    "objL1": "13102134678BZTYP_CD.ZZZ00",
                    "objL2": "13102134678ENTERPRISE_SCALE.A+13102134678ENTERPRISE_SCALE.L+13102134678ENTERPRISE_SCALE.M",
                    "objL3": "13102134678ACC_ITEM.707",
                    "prdSe": "Y",
                    "startPrdDe": "2009",
                    "endPrdDe": str(CURRENT_YEAR),
                    "outputFields": "ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT",
                    "orgId": "301",
                    "tblId": "DT_501Y007",
                },
            ),
        ),
    ),
    FileConfig(
        filename="export.json",
        datasets=(
            DatasetConfig(
                key="summaryRows",
                params={
                    "itmId": "T10+T20+",
                    "objL1": "01+",
                    "objL2": "00+10+20+30+40+50+",
                    "objL3": "",
                    "prdSe": "Y",
                    "startPrdDe": "2015",
                    "endPrdDe": str(CURRENT_YEAR),
                    "outputFields": "ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+",
                    "orgId": "101",
                    "tblId": "DT_1TEC_P116",
                },
            ),
            DatasetConfig(
                key="countryRows",
                params={
                    "itmId": "T20+",
                    "objL1": "01+",
                    "objL2": "10+11+12+13+14+15+1701+1702+1703+1704+1705+1706+1707+1708+1709+1710+1711+1712+1713+1714+1715+1716+1717+1718+1719+1720+1721+1722+1723+1724+1725+1726+1727+1728+1801+1802+1803+1804+1805+1806+1807+1901+1902+2001+2002+2003+2004+2005+2101+2301+2302+2303+2304+2305+2306+2307+",
                    "objL3": "30+",
                    "prdSe": "Y",
                    "startPrdDe": "2015",
                    "endPrdDe": str(CURRENT_YEAR),
                    "outputFields": "ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+",
                    "orgId": "101",
                    "tblId": "DT_1TEC_P227",
                },
            ),
        ),
    ),
)

GOOGLE_SHEET_FILE_CONFIGS = (
    {
        "filename": "loan.json",
        "sheets": (
            {"key": "loanRows", "sheet_name": ""},
            {"key": "delinquencyRows", "sheet_name": "연체율"},
        ),
    },
    {
        "filename": "investment.json",
        "sheets": (
            {"key": "investmentRows", "sheet_name": "투자"},
            {"key": "investmentStageRows", "sheet_name": "업력별투자"},
            {"key": "investmentSectorRows", "sheet_name": "업종별투자"},
            {"key": "investmentSourceRows", "sheet_name": "출자자별"},
        ),
    },
)


def build_params(custom: dict[str, str]) -> dict[str, str]:
    params = {
        "method": "getList",
        "apiKey": API_KEY,
        "format": "json",
        "jsonVD": "Y",
    }
    params.update(custom)
    return params


def fetch_rows(dataset: DatasetConfig) -> list[dict[str, Any]]:
    url = f"{BASE_URL}?{urlencode(build_params(dataset.params), safe='+')}"
    with urlopen(url, timeout=30, context=SSL_CONTEXT) as response:
        payload = json.load(response)

    if isinstance(payload, dict) and payload.get("err"):
        raise ValueError(payload.get("errMsg") or f"{dataset.key} API 오류")
    if not isinstance(payload, list):
        raise ValueError(f"{dataset.key} 응답 형식이 배열이 아닙니다.")
    return payload


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
        if end >= 0:
            json_like = json_like[:end + 1]
    elif json_like.startswith("["):
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
            key = col.get("label") or col.get("id") or f"col_{index}"
            cell = cells[index] if index < len(cells) else None
            record[key] = cell.get("v") if isinstance(cell, dict) else None
        mapped_rows.append(record)
    return mapped_rows


def fetch_google_sheet_via_gviz(sheet_name: str) -> list[dict[str, Any]]:
    tqx = quote("out:json")
    if sheet_name:
        url = f"https://docs.google.com/spreadsheets/d/{GOOGLE_SHEET_DOC_ID}/gviz/tq?tqx={tqx}&sheet={quote(sheet_name)}"
    else:
        url = f"https://docs.google.com/spreadsheets/d/{GOOGLE_SHEET_DOC_ID}/gviz/tq?tqx={tqx}"
    with urlopen(url, timeout=30, context=SSL_CONTEXT) as response:
        text = response.read().decode("utf-8", errors="replace")
    payload = extract_json_payload(text)
    if not isinstance(payload, dict):
        raise ValueError("GViz 응답 형식이 올바르지 않습니다.")
    return map_gviz_payload(payload)


def fetch_google_sheet_via_opensheet(sheet_name: str) -> list[dict[str, Any]]:
    if not sheet_name:
        raise ValueError("기본 시트는 OpenSheet로 읽을 수 없습니다.")
    url = f"https://opensheet.elk.sh/{GOOGLE_SHEET_DOC_ID}/{quote(sheet_name)}?raw=true"
    with urlopen(url, timeout=30, context=SSL_CONTEXT) as response:
        payload = json.load(response)
    if not isinstance(payload, list):
        raise ValueError("OpenSheet 응답 형식이 배열이 아닙니다.")
    return payload


def fetch_google_sheet_rows(sheet_name: str) -> list[dict[str, Any]]:
    try:
        return fetch_google_sheet_via_gviz(sheet_name)
    except Exception as gviz_error:
        try:
            return fetch_google_sheet_via_opensheet(sheet_name)
        except Exception as opensheet_error:
            raise ValueError(
                f"{sheet_name or '기본'} 시트 로드 실패 ({gviz_error}; 대체 경로 실패: {opensheet_error})"
            ) from opensheet_error


def get_latest_prd(rows: list[dict[str, Any]]) -> str:
    values = []
    for row in rows:
        value = str(row.get("PRD_DE", "")).strip()
        if value and value.replace("-", "").isdigit():
            values.append(value)
    return max(values) if values else ""


def get_last_changed(rows: list[dict[str, Any]]) -> str:
    values = [str(row.get("LST_CHN_DE", "")).strip() for row in rows if str(row.get("LST_CHN_DE", "")).strip()]
    return max(values) if values else ""


def get_latest_sheet_point(rows: list[dict[str, Any]]) -> str:
    values: list[str] = []
    for row in rows:
        value = row.get("시점")
        if value in (None, ""):
            value = row.get("")
        if value in (None, ""):
            value = row.get("A")
        text = str(value).strip()
        if text:
            values.append(text)
    return max(values) if values else ""


def parse_numeric(value: Any) -> float | int | None:
    if value is None:
        return None
    text = str(value).strip().replace(",", "")
    if not text or text == "*":
        return None
    try:
        number = float(text)
    except ValueError:
        return None
    return int(number) if number.is_integer() else number


def read_existing_payload(path: Path) -> dict[str, Any] | None:
    if not path.exists():
        return None
    with path.open("r", encoding="utf-8") as handle:
        payload = json.load(handle)
    return payload if isinstance(payload, dict) else None


def needs_update(existing: dict[str, Any] | None, latest_map: dict[str, str]) -> bool:
    if not existing:
        return True
    existing_map = existing.get("latestPeriods")
    if not isinstance(existing_map, dict):
        return True
    for key, latest_value in latest_map.items():
        if str(existing_map.get(key, "")).strip() < latest_value:
            return True
    return False


def format_latest_periods(latest_map: dict[str, str]) -> str:
    return ", ".join(f"{key}={value or '-'}" for key, value in latest_map.items())


def build_sme_metric_rows(tbl_id: str, start_year: int, end_year: int) -> list[dict[str, Any]]:
    dataset = DatasetConfig(
        key=tbl_id,
        params={
            "itmId": "T001",
            "objL1": "IM+IM_A+IM_B+IM_C+IM_D+IM_E+IM_F+IM_G+IM_H+IM_I+IM_J+IM_K+IM_L+IM_M+IM_N+IM_P+IM_Q+IM_R+IM_S",
            "objL2": "15142C501",
            "objL3": "16142T209+T002+T003",
            "objL4": "",
            "objL5": "",
            "objL6": "",
            "objL7": "",
            "objL8": "",
            "prdSe": "Y",
            "startPrdDe": str(start_year),
            "endPrdDe": str(end_year),
            "outputFields": "ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+",
            "orgId": "142",
            "tblId": tbl_id,
        },
    )
    return fetch_rows(dataset)


def build_sme_metric_dataset(rows: list[dict[str, Any]], metric: dict[str, str]) -> dict[str, Any]:
    years: dict[str, dict[str, dict[str, float | int | None]]] = {}

    for row in rows:
        year = str(row.get("PRD_DE", "")).strip()
        industry = str(row.get("C1_NM") or row.get("NM") or "전산업").strip() or "전산업"
        region = str(row.get("C2_NM") or "").strip()
        company_type = str(row.get("C3_NM") or "").strip()
        value = parse_numeric(row.get("DT"))

        if not year or value is None:
            continue
        if region and region != "전국":
            continue
        if company_type not in {"전체기업", "중소기업"}:
            continue

        year_bucket = years.setdefault(year, {})
        industry_bucket = year_bucket.setdefault(industry, {"total": None, "sme": None})
        if company_type == "전체기업":
            industry_bucket["total"] = value
        else:
            industry_bucket["sme"] = value

    return {
        "title": metric["title"],
        "unit": metric["unit"],
        "color": metric["color"],
        "years": dict(sorted(years.items())),
    }


def collect_sme_years(dataset: list[dict[str, Any]]) -> list[str]:
    year_set = set()
    for item in dataset:
        year_set.update(item.get("years", {}).keys())
    return sorted(year_set)


def latest_year(years: list[str]) -> int | None:
    valid = [int(year) for year in years if str(year).isdigit()]
    return max(valid) if valid else None


def update_sme_profile() -> str:
    existing = read_existing_payload(SME_PROFILE_PATH)
    existing_years = existing.get("nextYears", []) if existing else []
    valid_existing_years = [int(year) for year in existing_years if str(year).isdigit()]
    start_year = min(valid_existing_years) if valid_existing_years else 2019

    datasets = []
    last_updated_values = []
    for metric in SME_METRICS:
        rows = build_sme_metric_rows(metric["tblId"], start_year, CURRENT_YEAR)
        datasets.append(build_sme_metric_dataset(rows, metric))
        last_updated_values.extend(
            str(row.get("LST_CHN_DE", "")).strip()
            for row in rows
            if str(row.get("LST_CHN_DE", "")).strip()
        )

    next_years = collect_sme_years(datasets)
    existing_latest = latest_year(existing_years)
    api_latest = latest_year(next_years)

    if api_latest is None:
        raise ValueError("sme_profile.json: API에서 유효한 연도 데이터를 찾지 못했습니다.")

    if existing_latest is not None and api_latest <= existing_latest:
        return f"sme_profile.json: 최신 자료 없음 (latestYear={api_latest})"

    payload = {
        "source": "kosis_snapshot",
        "generatedAt": TODAY.isoformat(),
        "lastUpdated": max(last_updated_values, default=""),
        "nextYears": next_years,
        "nextData": datasets,
    }

    with SME_PROFILE_PATH.open("w", encoding="utf-8") as handle:
        json.dump(payload, handle, ensure_ascii=False, separators=(",", ":"))

    return f"sme_profile.json: 업데이트 완료 (latestYear={api_latest})"


def update_google_sheet_json(file_config: dict[str, Any]) -> str:
    path = DATA_DIR / file_config["filename"]
    existing = read_existing_payload(path)
    existing_latest = existing.get("latestPeriods", {}) if existing else {}

    payload: dict[str, Any] = {
        "source": "google_sheet_snapshot",
        "generatedAt": TODAY.isoformat(),
        "latestPeriods": {},
    }
    changed = not existing

    for sheet_config in file_config["sheets"]:
        rows = fetch_google_sheet_rows(sheet_config["sheet_name"])
        latest_point = get_latest_sheet_point(rows)
        payload[sheet_config["key"]] = rows
        payload["latestPeriods"][sheet_config["key"]] = latest_point
        if str(existing_latest.get(sheet_config["key"], "")).strip() < latest_point:
            changed = True

    if not changed:
        return f"{file_config['filename']}: 최신 자료 없음 ({format_latest_periods(payload['latestPeriods'])})"

    with path.open("w", encoding="utf-8") as handle:
        json.dump(payload, handle, ensure_ascii=False, separators=(",", ":"))

    return f"{file_config['filename']}: 업데이트 완료 ({format_latest_periods(payload['latestPeriods'])})"


def update_file(config: FileConfig) -> str:
    path = DATA_DIR / config.filename
    existing = read_existing_payload(path)

    fetched: dict[str, list[dict[str, Any]]] = {}
    latest_periods: dict[str, str] = {}
    last_updated: dict[str, str] = {}

    for dataset in config.datasets:
        rows = fetch_rows(dataset)
        fetched[dataset.key] = rows
        latest_periods[dataset.key] = get_latest_prd(rows)
        last_updated[dataset.key] = get_last_changed(rows)

    if not needs_update(existing, latest_periods):
        return f"{config.filename}: 최신 자료 없음 ({format_latest_periods(latest_periods)})"

    payload: dict[str, Any] = {
        "source": "kosis_snapshot",
        "generatedAt": TODAY.isoformat(),
        "latestPeriods": latest_periods,
        "lastUpdated": last_updated,
    }
    payload.update(fetched)

    with path.open("w", encoding="utf-8") as handle:
        json.dump(payload, handle, ensure_ascii=False, separators=(",", ":"))

    return f"{config.filename}: 업데이트 완료 ({format_latest_periods(latest_periods)})"


def write_static_bundle() -> None:
    bundle: dict[str, Any] = {}
    for path in sorted(DATA_DIR.glob("*.json")):
        with path.open("r", encoding="utf-8") as handle:
            payload = json.load(handle)
        bundle[path.name] = payload

    script = "window.__DASHBOARD_STATIC_JSON__=" + json.dumps(bundle, ensure_ascii=False, separators=(",", ":")) + ";"
    with STATIC_BUNDLE_PATH.open("w", encoding="utf-8") as handle:
        handle.write(script)


def main() -> int:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    try:
        print(update_sme_profile())
        for config in FILE_CONFIGS:
            print(update_file(config))
        for file_config in GOOGLE_SHEET_FILE_CONFIGS:
            print(update_google_sheet_json(file_config))
        write_static_bundle()
        print(f"{STATIC_BUNDLE_PATH.name}: 생성 완료")
        return 0
    except FileNotFoundError as error:
        print(f"파일 처리 실패: {error}", file=sys.stderr)
        return 1
    except (HTTPError, URLError) as error:
        print(f"API 호출 실패: {error}", file=sys.stderr)
        return 1
    except Exception as error:  # pragma: no cover
        print(f"실행 실패: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
