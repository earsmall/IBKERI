# 대시보드 데이터 업데이트 순서

이 문서는 로컬 데이터 파일을 업데이트하고, 그 내용을 웹 대시보드에 반영하는 순서를 정리한 문서입니다.

## 1. 업데이트 스크립트 실행

아래 파일 중 하나를 실행합니다.

- macOS: [update_dashboard_json.command](/Users/jeonghunchoi/Dropbox/JH/Monitoring_Mobile/update_dashboard_json.command:1)
- Windows: [update_dashboard_json.bat](/Users/jeonghunchoi/Dropbox/JH/Monitoring_Mobile/update_dashboard_json.bat:1)
- 직접 실행: `python3 update_dashboard_json.py`

이 스크립트가 하는 일:

- Open API와 Google Sheet의 최신 데이터를 확인
- 새 데이터가 있으면 `data/*.json` 파일 업데이트
- 업데이트된 JSON 내용을 바탕으로 `data/dashboard-data.js` 생성

## 2. 생성되는 파일 확인

스크립트 실행 후 아래 파일들이 최신 상태인지 확인합니다.

- `data/sme_profile.json`
- `data/business.json`
- `data/feeling.json`
- `data/management.json`
- `data/export.json`
- `data/startup.json`
- `data/loan.json`
- `data/investment.json`
- `data/dashboard-data.js`

핵심은 `dashboard-data.js`도 함께 갱신되어야 한다는 점입니다.

## 3. 웹페이지가 데이터를 읽는 방식

현재 웹페이지는 아래 순서로 데이터를 사용합니다.

1. `index.html`이 `data/dashboard-data.js`를 먼저 읽음
2. `dashboard-data.js` 안에는 각 JSON 파일 내용이 들어 있음
3. `script.js`가 이 데이터를 사용해 탭별 화면을 그림

즉, 브라우저가 매번 `data/*.json`을 직접 `fetch`하지 않아도 대시보드가 데이터를 표시할 수 있습니다.

## 4. 대시보드 반영을 위해 꼭 해야 하는 일

데이터를 실제 화면에 반영하려면 아래 순서대로 진행합니다.

1. `update_dashboard_json.py` 실행
2. `data/*.json`과 `data/dashboard-data.js`가 갱신되었는지 확인
3. 변경된 파일들을 GitHub에 업로드
4. GitHub Pages 배포가 반영될 때까지 잠시 기다림
5. 브라우저에서 페이지를 강력 새로고침하여 최신 파일을 다시 읽게 함

## 5. GitHub에 올려야 하는 파일

데이터 업데이트 후에는 최소한 아래 파일들이 함께 올라가야 합니다.

- `data/*.json`
- `data/dashboard-data.js`

코드 변경이 있었을 경우에는 아래도 함께 반영합니다.

- `index.html`
- `script.js`

## 6. 가장 중요한 운영 원칙

- JSON만 바꾸고 끝내면 안 됩니다.
- 반드시 `update_dashboard_json.py`를 실행해서 `dashboard-data.js`도 다시 만들어야 합니다.
- 대시보드는 최종적으로 `dashboard-data.js`를 통해 데이터를 안정적으로 읽습니다.

## 7. 한 줄 요약

실행 순서는 `업데이트 스크립트 실행 -> JSON 갱신 -> dashboard-data.js 생성 -> GitHub 업로드 -> 배포 후 새로고침` 입니다.
