const NAVER_URLS = {
  kospi: "https://r.jina.ai/http://https://finance.naver.com/sise/sise_index.naver?code=KOSPI",
  kosdaq: "https://r.jina.ai/http://https://finance.naver.com/sise/sise_index.naver?code=KOSDAQ",
  market: "https://r.jina.ai/http://https://finance.naver.com/marketindex/",
};

const GOLD_API_BASE = "https://api.gold-api.com/price";
const SNAPSHOT_KEY = "market_board_alt_snapshot_v1";
const SHEET_DOCUMENT_ID = "1R2BB-k4L6a6QwiD5nmFz-idJoIUGnhQCDzHF0ijwH4c";
const LOAN_SHEET_DOCUMENT_ID = "1fNiuZjbvbH7hjomQqXjAAxt6GE_b_X-_zuQlzE5p8YY";
const EXPORT_SHEET_DOCUMENT_ID = "1poM2hIz5bfig7oTFekq97yAX5_aVYTbSSHXg8fW2TAk";
const SHEET_BASE_URL =
  `https://docs.google.com/spreadsheets/d/${SHEET_DOCUMENT_ID}/gviz/tq`;
const OPENSHEET_BASE_URL = `https://opensheet.elk.sh/${SHEET_DOCUMENT_ID}`;
const LOAN_SHEET_BASE_URL =
  `https://docs.google.com/spreadsheets/d/${LOAN_SHEET_DOCUMENT_ID}/gviz/tq`;
const LOAN_OPENSHEET_BASE_URL = `https://opensheet.elk.sh/${LOAN_SHEET_DOCUMENT_ID}`;
const EXPORT_SHEET_BASE_URL =
  `https://docs.google.com/spreadsheets/d/${EXPORT_SHEET_DOCUMENT_ID}/gviz/tq`;
const EXPORT_OPENSHEET_BASE_URL = `https://opensheet.elk.sh/${EXPORT_SHEET_DOCUMENT_ID}`;
const BUSINESS_COMPOSITE_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=T001&objL1=00&format=json&jsonVD=Y&prdSe=M&startPrdDe=201501&endPrdDe=202601&outputFields=C1_OBJ_NM+ITM_NM+UNIT_NM+PRD_DE+DT&orgId=303&tblId=DT_303005_CI001";
const BUSINESS_CYCLE_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=T001&objL1=01&format=json&jsonVD=Y&prdSe=M&startPrdDe=201501&endPrdDe=202601&outputFields=C1_OBJ_NM+ITM_NM+UNIT_NM+PRD_DE+DT&orgId=303&tblId=DT_303005_CI001";
const PRODUCTION_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=T33&objL1=ALL&format=json&jsonVD=Y&prdSe=Q&startPrdDe=201501&endPrdDe=202504&outputFields=ITM_NM+UNIT_NM+PRD_DE+DT+LST_CHN_DE&orgId=101&tblId=DT_1F02007";
const SERVICE_PRODUCTION_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=T2&objL1=ALL&format=json&jsonVD=Y&prdSe=Q&startPrdDe=201501&endPrdDe=202504&outputFields=C1_NM+ITM_NM+UNIT_NM+PRD_DE+DT+LST_CHN_DE&orgId=101&tblId=DT_1KC2022";
const OPERATION_RATE_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=1634013103124559T1&objL1=ALL&format=json&jsonVD=Y&prdSe=M&startPrdDe=202301&endPrdDe=202601&outputFields=C1_NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT&orgId=340&tblId=DT_D10125";
const STARTUP_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=16142T1&objL1=A1+A11+B1+C1+D1+F1+S11+S12+S13+S14+S15+S16+S17+S18+S19+S20+S21+S22+S23+Z1&objL2=&objL3=&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&startPrdDe=2016&endPrdDe=2025&outputFields=ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT&orgId=142&tblId=DT_142N_F201";
const STARTUP_CACHE_KEY = "startup_snapshot_v2";
const STARTUP_JSON_URL = "./data/startup.json?v=20260417";
const STARTUP_JSON_CACHE_KEY = "startup_json_payload_v1";
const MANAGEMENT_GROWTH_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=13103134632999&objL1=13102134632BZTYP_CD.ZZZ00&objL2=13102134632ENTERPRISE_SCALE.A+13102134632ENTERPRISE_SCALE.L+13102134632ENTERPRISE_SCALE.M&objL3=13102134632ACC_ITEM.506&format=json&jsonVD=Y&prdSe=Y&startPrdDe=2010&endPrdDe=2024&outputFields=ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT&orgId=301&tblId=DT_501Y005";
const MANAGEMENT_PROFIT_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=13103134573999&objL1=13102134573BZTYP_CD.ZZZ00&objL2=13102134573ENTERPRISE_SCALE.A+13102134573ENTERPRISE_SCALE.L+13102134573ENTERPRISE_SCALE.M&objL3=13102134573ACC_ITEM.611&format=json&jsonVD=Y&prdSe=Y&startPrdDe=2009&endPrdDe=2024&outputFields=ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT&orgId=301&tblId=DT_501Y006";
const MANAGEMENT_STABILITY_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=13103134678999&objL1=13102134678BZTYP_CD.ZZZ00&objL2=13102134678ENTERPRISE_SCALE.A+13102134678ENTERPRISE_SCALE.L+13102134678ENTERPRISE_SCALE.M&objL3=13102134678ACC_ITEM.707&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&startPrdDe=2009&endPrdDe=2024&outputFields=ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT&orgId=301&tblId=DT_501Y007";
const MANAGEMENT_GROWTH_CACHE_KEY = "management_growth_sales_snapshot_v1";
const MANAGEMENT_PROFIT_CACHE_KEY = "management_profit_sales_op_snapshot_v1";
const MANAGEMENT_STABILITY_CACHE_KEY = "management_stability_debt_snapshot_v3";
const MANAGEMENT_JSON_URL = "./data/management.json?v=20260417";
const MANAGEMENT_JSON_CACHE_KEY = "management_json_payload_v1";
const MANAGEMENT_FALLBACK = {"growth":[{"year":"2010","category":"종합","value":15.26,"unit":"%"},{"year":"2011","category":"종합","value":12.18,"unit":"%"},{"year":"2012","category":"종합","value":5.11,"unit":"%"},{"year":"2013","category":"종합","value":2.07,"unit":"%"},{"year":"2014","category":"종합","value":1.26,"unit":"%"},{"year":"2015","category":"종합","value":0.26,"unit":"%"},{"year":"2016","category":"종합","value":2.57,"unit":"%"},{"year":"2017","category":"종합","value":9.19,"unit":"%"},{"year":"2018","category":"종합","value":3.99,"unit":"%"},{"year":"2019","category":"종합","value":0.44,"unit":"%"},{"year":"2020","category":"종합","value":-1.05,"unit":"%"},{"year":"2021","category":"종합","value":17.02,"unit":"%"},{"year":"2022","category":"종합","value":15.07,"unit":"%"},{"year":"2023","category":"종합","value":-1.52,"unit":"%"},{"year":"2024","category":"종합","value":3.65,"unit":"%"},{"year":"2010","category":"대기업","value":16.84,"unit":"%"},{"year":"2011","category":"대기업","value":13.13,"unit":"%"},{"year":"2012","category":"대기업","value":4.97,"unit":"%"},{"year":"2013","category":"대기업","value":-0.47,"unit":"%"},{"year":"2014","category":"대기업","value":-1.07,"unit":"%"},{"year":"2015","category":"대기업","value":-4.14,"unit":"%"},{"year":"2016","category":"대기업","value":-1.31,"unit":"%"},{"year":"2017","category":"대기업","value":7.93,"unit":"%"},{"year":"2018","category":"대기업","value":2.71,"unit":"%"},{"year":"2019","category":"대기업","value":-2.29,"unit":"%"},{"year":"2020","category":"대기업","value":-4.62,"unit":"%"},{"year":"2021","category":"대기업","value":16.63,"unit":"%"},{"year":"2022","category":"대기업","value":15.53,"unit":"%"},{"year":"2023","category":"대기업","value":-4.25,"unit":"%"},{"year":"2024","category":"대기업","value":3.39,"unit":"%"},{"year":"2010","category":"중소기업","value":13.17,"unit":"%"},{"year":"2011","category":"중소기업","value":10.83,"unit":"%"},{"year":"2012","category":"중소기업","value":5.33,"unit":"%"},{"year":"2013","category":"중소기업","value":6,"unit":"%"},{"year":"2014","category":"중소기업","value":4.67,"unit":"%"},{"year":"2015","category":"중소기업","value":7.55,"unit":"%"},{"year":"2016","category":"중소기업","value":8.59,"unit":"%"},{"year":"2017","category":"중소기업","value":11.02,"unit":"%"},{"year":"2018","category":"중소기업","value":5.89,"unit":"%"},{"year":"2019","category":"중소기업","value":4.21,"unit":"%"},{"year":"2020","category":"중소기업","value":3.87,"unit":"%"},{"year":"2021","category":"중소기업","value":17.56,"unit":"%"},{"year":"2022","category":"중소기업","value":14.39,"unit":"%"},{"year":"2023","category":"중소기업","value":2.82,"unit":"%"},{"year":"2024","category":"중소기업","value":4.07,"unit":"%"}],"profit":[{"year":"2009","category":"종합","value":4.61,"unit":"%"},{"year":"2010","category":"종합","value":5.3,"unit":"%"},{"year":"2011","category":"종합","value":4.49,"unit":"%"},{"year":"2012","category":"종합","value":4.11,"unit":"%"},{"year":"2013","category":"종합","value":4.14,"unit":"%"},{"year":"2014","category":"종합","value":3.96,"unit":"%"},{"year":"2015","category":"종합","value":4.7,"unit":"%"},{"year":"2016","category":"종합","value":5.42,"unit":"%"},{"year":"2017","category":"종합","value":6.11,"unit":"%"},{"year":"2018","category":"종합","value":5.64,"unit":"%"},{"year":"2019","category":"종합","value":4.21,"unit":"%"},{"year":"2020","category":"종합","value":4.24,"unit":"%"},{"year":"2021","category":"종합","value":5.58,"unit":"%"},{"year":"2022","category":"종합","value":4.53,"unit":"%"},{"year":"2023","category":"종합","value":3.48,"unit":"%"},{"year":"2024","category":"종합","value":4.59,"unit":"%"},{"year":"2009","category":"대기업","value":5.42,"unit":"%"},{"year":"2010","category":"대기업","value":6.44,"unit":"%"},{"year":"2011","category":"대기업","value":5.38,"unit":"%"},{"year":"2012","category":"대기업","value":5.39,"unit":"%"},{"year":"2013","category":"대기업","value":5.7,"unit":"%"},{"year":"2014","category":"대기업","value":5.4,"unit":"%"},{"year":"2015","category":"대기업","value":6.48,"unit":"%"},{"year":"2016","category":"대기업","value":7.44,"unit":"%"},{"year":"2017","category":"대기업","value":8.6,"unit":"%"},{"year":"2018","category":"대기업","value":7.97,"unit":"%"},{"year":"2019","category":"대기업","value":5.72,"unit":"%"},{"year":"2020","category":"대기업","value":5.78,"unit":"%"},{"year":"2021","category":"대기업","value":7.63,"unit":"%"},{"year":"2022","category":"대기업","value":5.91,"unit":"%"},{"year":"2023","category":"대기업","value":4.25,"unit":"%"},{"year":"2024","category":"대기업","value":5.59,"unit":"%"},{"year":"2009","category":"중소기업","value":3.45,"unit":"%"},{"year":"2010","category":"중소기업","value":3.71,"unit":"%"},{"year":"2011","category":"중소기업","value":3.12,"unit":"%"},{"year":"2012","category":"중소기업","value":3.1,"unit":"%"},{"year":"2013","category":"중소기업","value":3.41,"unit":"%"},{"year":"2014","category":"중소기업","value":3.42,"unit":"%"},{"year":"2015","category":"중소기업","value":3.58,"unit":"%"},{"year":"2016","category":"중소기업","value":3.85,"unit":"%"},{"year":"2017","category":"중소기업","value":3.96,"unit":"%"},{"year":"2018","category":"중소기업","value":3.45,"unit":"%"},{"year":"2019","category":"중소기업","value":3.41,"unit":"%"},{"year":"2020","category":"중소기업","value":3.47,"unit":"%"},{"year":"2021","category":"중소기업","value":3.54,"unit":"%"},{"year":"2022","category":"중소기업","value":3.49,"unit":"%"},{"year":"2023","category":"중소기업","value":3.21,"unit":"%"},{"year":"2024","category":"중소기업","value":3.03,"unit":"%"}],"stability":[{"year":"2009","category":"종합","value":158.67,"unit":"%"},{"year":"2010","category":"종합","value":150.14,"unit":"%"},{"year":"2011","category":"종합","value":152.74,"unit":"%"},{"year":"2012","category":"종합","value":147.6,"unit":"%"},{"year":"2013","category":"종합","value":140.98,"unit":"%"},{"year":"2014","category":"종합","value":134.53,"unit":"%"},{"year":"2015","category":"종합","value":128.36,"unit":"%"},{"year":"2016","category":"종합","value":121.15,"unit":"%"},{"year":"2017","category":"종합","value":114.07,"unit":"%"},{"year":"2018","category":"종합","value":111.12,"unit":"%"},{"year":"2019","category":"종합","value":115.64,"unit":"%"},{"year":"2020","category":"종합","value":118.34,"unit":"%"},{"year":"2021","category":"종합","value":120.31,"unit":"%"},{"year":"2022","category":"종합","value":122.33,"unit":"%"},{"year":"2023","category":"종합","value":120.79,"unit":"%"},{"year":"2024","category":"종합","value":119.85,"unit":"%"},{"year":"2009","category":"대기업","value":131.05,"unit":"%"},{"year":"2010","category":"대기업","value":124.53,"unit":"%"},{"year":"2011","category":"대기업","value":131.92,"unit":"%"},{"year":"2012","category":"대기업","value":128.17,"unit":"%"},{"year":"2013","category":"대기업","value":122.55,"unit":"%"},{"year":"2014","category":"대기업","value":111.89,"unit":"%"},{"year":"2015","category":"대기업","value":107.9,"unit":"%"},{"year":"2016","category":"대기업","value":100.09,"unit":"%"},{"year":"2017","category":"대기업","value":95.51,"unit":"%"},{"year":"2018","category":"대기업","value":92.11,"unit":"%"},{"year":"2019","category":"대기업","value":95.21,"unit":"%"},{"year":"2020","category":"대기업","value":97.31,"unit":"%"},{"year":"2021","category":"대기업","value":99.25,"unit":"%"},{"year":"2022","category":"대기업","value":101.21,"unit":"%"},{"year":"2023","category":"대기업","value":100.95,"unit":"%"},{"year":"2024","category":"대기업","value":101.48,"unit":"%"},{"year":"2009","category":"중소기업","value":226.73,"unit":"%"},{"year":"2010","category":"중소기업","value":218.3,"unit":"%"},{"year":"2011","category":"중소기업","value":207.08,"unit":"%"},{"year":"2012","category":"중소기업","value":197.95,"unit":"%"},{"year":"2013","category":"중소기업","value":187.54,"unit":"%"},{"year":"2014","category":"중소기업","value":193.56,"unit":"%"},{"year":"2015","category":"중소기업","value":187.7,"unit":"%"},{"year":"2016","category":"중소기업","value":181.27,"unit":"%"},{"year":"2017","category":"중소기업","value":163.18,"unit":"%"},{"year":"2018","category":"중소기업","value":159.49,"unit":"%"},{"year":"2019","category":"중소기업","value":161.93,"unit":"%"},{"year":"2020","category":"중소기업","value":166.33,"unit":"%"},{"year":"2021","category":"중소기업","value":169.12,"unit":"%"},{"year":"2022","category":"중소기업","value":171.27,"unit":"%"},{"year":"2023","category":"중소기업","value":166.85,"unit":"%"},{"year":"2024","category":"중소기업","value":162.65,"unit":"%"}]};
const SME_COUNT_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=T001&objL1=IM+IM_A+IM_B+IM_C+IM_D+IM_E+IM_F+IM_G+IM_H+IM_I+IM_J+IM_K+IM_L+IM_M+IM_N+IM_P+IM_Q+IM_R+IM_S&objL2=15142C501&objL3=16142T209+T002+T003&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&startPrdDe=2019&endPrdDe=2023&outputFields=ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+&orgId=142&tblId=DT_BR_A001";
const SME_EMPLOYEE_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=T001&objL1=IM+IM_A+IM_B+IM_C+IM_D+IM_E+IM_F+IM_G+IM_H+IM_I+IM_J+IM_K+IM_L+IM_M+IM_N+IM_P+IM_Q+IM_R+IM_S&objL2=15142C501&objL3=16142T209+T002+T003&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&startPrdDe=2019&endPrdDe=2023&outputFields=ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+&orgId=142&tblId=DT_BR_B001";
const SME_SALES_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=T001&objL1=IM+IM_A+IM_B+IM_C+IM_D+IM_E+IM_F+IM_G+IM_H+IM_I+IM_J+IM_K+IM_L+IM_M+IM_N+IM_P+IM_Q+IM_R+IM_S&objL2=15142C501&objL3=16142T209+T002+T003&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&startPrdDe=2019&endPrdDe=2023&outputFields=ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+&orgId=142&tblId=DT_BR_C001";
const SME_COUNT_CACHE_KEY = "sme_count_snapshot_v3";
const SME_EMPLOYEE_CACHE_KEY = "sme_employee_snapshot_v3";
const SME_SALES_CACHE_KEY = "sme_sales_snapshot_v3";
const SME_PROFILE_CACHE_KEY = "sme_profile_snapshot_v1";
const SME_PROFILE_JSON_URL = "./data/sme_profile.json?v=20260416";
const LOAN_SHEET_CACHE_KEY = "loan_sheet_snapshot_v1";
const DELINQUENCY_SHEET_CACHE_KEY = "loan_delinquency_sheet_snapshot_v1";
const INVESTMENT_SHEET_CACHE_KEY = "investment_sheet_snapshot_v1";
const INVESTMENT_STAGE_SHEET_CACHE_KEY = "investment_stage_sheet_snapshot_v1";
const INVESTMENT_SECTOR_SHEET_CACHE_KEY = "investment_sector_sheet_snapshot_v1";
const INVESTMENT_SOURCE_SHEET_CACHE_KEY = "investment_source_sheet_snapshot_v1";
const LOAN_DATA_CACHE_KEY = "loan_data_snapshot_v1";
const INVESTMENT_DATA_CACHE_KEY = "investment_data_snapshot_v1";
const LOAN_JSON_URL = "./data/loan.json?v=20260417";
const INVESTMENT_JSON_URL = "./data/investment.json?v=20260417";
const LOAN_JSON_CACHE_KEY = "loan_json_payload_v1";
const INVESTMENT_JSON_CACHE_KEY = "investment_json_payload_v1";
const EXPORT_SUMMARY_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=T10+T20+&objL1=01+&objL2=00+10+20+30+40+50+&objL3=&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&startPrdDe=2015&endPrdDe=2025&outputFields=ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+&orgId=101&tblId=DT_1TEC_P116";
const EXPORT_COUNTRY_API_URL =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=T20+&objL1=01+&objL2=10+11+12+13+14+15+1701+1702+1703+1704+1705+1706+1707+1708+1709+1710+1711+1712+1713+1714+1715+1716+1717+1718+1719+1720+1721+1722+1723+1724+1725+1726+1727+1728+1801+1802+1803+1804+1805+1806+1807+1901+1902+2001+2002+2003+2004+2005+2101+2301+2302+2303+2304+2305+2306+2307+&objL3=30+&objL4=&objL5=&objL6=&objL7=&objL8=&format=json&jsonVD=Y&prdSe=Y&startPrdDe=2015&endPrdDe=2025&outputFields=ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+&orgId=101&tblId=DT_1TEC_P227";
const EXPORT_SUMMARY_CACHE_KEY = "export_summary_snapshot_v2";
const EXPORT_COUNTRY_CACHE_KEY = "export_country_snapshot_v3";
const EXPORT_JSON_URL = "./data/export.json?v=20260417";
const EXPORT_JSON_CACHE_KEY = "export_json_payload_v1";
const HOME_SCREEN_SEEN_KEY = "dashboard_home_seen_v1";
const LAST_ACTIVE_TAB_KEY = "dashboard_last_active_tab_v1";
const FEELING_ACTUAL_API_URL_BASE =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=13103134673999&objL1=13102134673BUSINESS_TYPE_CD.X6000&format=json&jsonVD=Y&prdSe=M&startPrdDe=201501&endPrdDe=202603&outputFields=ORG_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT&orgId=301&tblId=DT_512Y013";
const FEELING_OUTLOOK_API_URL_BASE =
  "https://kosis.kr/openapi/Param/statisticsParameterData.do?method=getList&apiKey=ZDNhYjg4YmEwOTQzMGE1ZWFhOTA5NWQxMTI3YThiZGI=&itmId=13103134488999&objL1=13102134488BUSINESS_TYPE_CD.X6000&format=json&jsonVD=Y&prdSe=M&startPrdDe=201501&endPrdDe=202604&outputFields=ORG_ID+TBL_ID+TBL_NM+OBJ_NM+NM+ITM_NM+UNIT_NM+PRD_SE+PRD_DE+LST_CHN_DE+DT&orgId=301&tblId=DT_512Y014";
const FEELING_ACTUAL_CACHE_KEY = "feeling_bsi_actual_snapshot_v2";
const FEELING_OUTLOOK_CACHE_KEY = "feeling_bsi_outlook_snapshot_v2";
const FEELING_JSON_URL = "./data/feeling.json?v=20260417";
const BUSINESS_JSON_URL = "./data/business.json?v=20260417";
const FEELING_JSON_CACHE_KEY = "feeling_json_payload_v1";
const BUSINESS_JSON_CACHE_KEY = "business_json_payload_v1";
const FEELING_BSI_OPTIONS = [
  { label: "기업심리지수", code: "AX" },
  { label: "업황BSI", code: "AI" },
  { label: "매출BSI", code: "AJ" },
  { label: "생산BSI", code: "AK" },
  { label: "신규수주BSI", code: "AL" },
  { label: "채산성BSI", code: "AM" },
  { label: "제품판매가격BSI", code: "AN" },
  { label: "제품재고BSI", code: "AO" },
  { label: "설비투자BSI", code: "AP" },
  { label: "인력사정BSI", code: "AQ" },
  { label: "가동률BSI", code: "AR" },
  { label: "내수판매BSI", code: "AS" },
  { label: "수출BSI", code: "AT" },
  { label: "원자재구입가격BSI", code: "AU" },
  { label: "자금사정BSI", code: "AV" },
  { label: "생산설비BSI", code: "AW" },
];
const BUSINESS_COMPOSITE_SNAPSHOT = { unit: "2015＝100", rows: [["201501",99.58],["201502",99.91],["201503",99.82],["201504",99.89],["201505",99.76],["201506",99.59],["201507",99.54],["201508",99.74],["201509",100.26],["201510",100.71],["201511",100.66],["201512",100.56],["201601",100.42],["201602",100.59],["201603",100.79],["201604",100.88],["201605",101.06],["201606",101.26],["201607",101.47],["201608",101.62],["201609",101.51],["201610",101.67],["201611",101.88],["201612",102.3],["201701",102.35],["201702",102.32],["201703",102.37],["201704",102.56],["201705",102.6],["201706",102.61],["201707",102.63],["201708",102.67],["201709",102.8],["201710",102.63],["201711",102.76],["201712",102.56],["201801",102.74],["201802",102.71],["201803",102.76],["201804",102.75],["201805",102.72],["201806",102.81],["201807",102.71],["201808",102.6],["201809",102.53],["201810",102.63],["201811",102.71],["201812",102.66],["201901",102.99],["201902",102.8],["201903",102.99],["201904",102.71],["201905",102.96],["201906",102.86],["201907",102.85],["201908",102.91],["201909",102.74],["201910",102.65],["201911",102.67],["201912",103.14],["202001",103.29],["202002",102.84],["202003",101.47],["202004",99.91],["202005",98.6],["202006",98.44],["202007",98.84],["202008",99.49],["202009",100.16],["202010",100.72],["202011",101.34],["202012",101.33],["202101",101.23],["202102",101.41],["202103",101.97],["202104",102.53],["202105",102.67],["202106",102.93],["202107",103.06],["202108",103.14],["202109",103.31],["202110",103.36],["202111",103.72],["202112",104.01],["202201",104.9],["202202",105.11],["202203",104.99],["202204",104.65],["202205",105.0],["202206",104.97],["202207",105.26],["202208",105.3],["202209",105.63],["202210",105.43],["202211",105.02],["202212",104.74],["202301",104.3],["202302",104.28],["202303",104.22],["202304",104.1],["202305",103.92],["202306",103.94],["202307",104.07],["202308",103.93],["202309",103.85],["202310",103.96],["202311",104.11],["202312",104.04],["202401",104.0],["202402",103.95],["202403",103.61],["202404",103.42],["202405",103.32],["202406",103.59],["202407",103.33],["202408",103.5],["202409",103.55],["202410",103.77],["202411",103.43],["202412",103.39],["202501",102.83],["202502",102.94],["202503",102.83],["202504",103.42],["202505",103.22],["202506",103.13],["202507",103.12],["202508",103.35],["202509",103.36],["202510",103.46],["202511",103.87],["202512",104.25],["202601",104.55]] };
const BUSINESS_CYCLE_SNAPSHOT = { unit: "", rows: [["201501",99.32],["201502",99.59],["201503",99.45],["201504",99.46],["201505",99.28],["201506",99.05],["201507",98.95],["201508",99.09],["201509",99.55],["201510",99.94],["201511",99.83],["201512",99.68],["201601",99.49],["201602",99.6],["201603",99.75],["201604",99.78],["201605",99.9],["201606",100.05],["201607",100.21],["201608",100.31],["201609",100.14],["201610",100.25],["201611",100.41],["201612",100.77],["201701",100.78],["201702",100.71],["201703",100.71],["201704",100.85],["201705",100.85],["201706",100.82],["201707",100.8],["201708",100.8],["201709",100.89],["201710",100.68],["201711",100.78],["201712",100.55],["201801",100.69],["201802",100.63],["201803",100.65],["201804",100.61],["201805",100.55],["201806",100.61],["201807",100.49],["201808",100.36],["201809",100.27],["201810",100.34],["201811",100.4],["201812",100.33],["201901",100.63],["201902",100.43],["201903",100.59],["201904",100.29],["201905",100.52],["201906",100.41],["201907",100.37],["201908",100.41],["201909",100.23],["201910",100.13],["201911",100.12],["201912",100.56],["202001",100.68],["202002",100.23],["202003",98.87],["202004",97.33],["202005",96.03],["202006",95.85],["202007",96.22],["202008",96.82],["202009",97.45],["202010",97.97],["202011",98.54],["202012",98.5],["202101",98.37],["202102",98.52],["202103",99.03],["202104",99.54],["202105",99.64],["202106",99.86],["202107",99.95],["202108",99.99],["202109",100.12],["202110",100.14],["202111",100.46],["202112",100.7],["202201",101.54],["202202",101.7],["202203",101.56],["202204",101.2],["202205",101.51],["202206",101.45],["202207",101.71],["202208",101.72],["202209",102.02],["202210",101.8],["202211",101.38],["202212",101.1],["202301",100.65],["202302",100.62],["202303",100.54],["202304",100.41],["202305",100.22],["202306",100.23],["202307",100.34],["202308",100.2],["202309",100.11],["202310",100.21],["202311",100.35],["202312",100.27],["202401",100.23],["202402",100.18],["202403",99.85],["202404",99.66],["202405",99.55],["202406",99.81],["202407",99.56],["202408",99.72],["202409",99.76],["202410",99.98],["202411",99.65],["202412",99.6],["202501",99.06],["202502",99.17],["202503",99.06],["202504",99.63],["202505",99.43],["202506",99.34],["202507",99.34],["202508",99.56],["202509",99.57],["202510",99.66],["202511",100.05],["202512",100.41],["202601",100.71]] };
const PRODUCTION_SNAPSHOT = { unit: "", rows: [["201501",98.881],["201502",106.156],["201503",103.253],["201504",111.403],["201601",101.049],["201602",107.765],["201603",105.107],["201604",117.314],["201701",103.918],["201702",110.773],["201703",109.864],["201704",107.8],["201801",100.315],["201802",107.59],["201803",101.889],["201804",110.318],["201901",98.846],["201902",105.457],["201903",99.51],["201904",108.779],["202001",96.4],["202002",98.2],["202003",98.3],["202004",107.1],["202101",97.5],["202102",103.4],["202103",97.9],["202104",107.6],["202201",97.5],["202202",103.5],["202203",98.4],["202204",105.8],["202301",91.6],["202302",96.7],["202303",92.9],["202304",100.6],["202401",89.9],["202402",96.8],["202403",91.6],["202404",102.3],["202501",87.5],["202502",94.6],["202503",93.2],["202504",94.5]], lastChanged: "2026-03-24" };
const SERVICE_PRODUCTION_SNAPSHOT = { unit: "2020＝100", rows: [["201501",92.6],["201502",96.0],["201503",95.4],["201504",101.1],["201601",94.6],["201602",99.3],["201603",97.7],["201604",103.1],["201701",96.6],["201702",101.1],["201703",100.1],["201704",103.1],["201801",98.3],["201802",102.6],["201803",100.6],["201804",106.1],["201901",99.5],["201902",104.2],["201903",102.0],["201904",109.6],["202001",97.7],["202002",98.5],["202003",98.5],["202004",105.3],["202101",98.4],["202102",106.4],["202103",103.1],["202104",112.3],["202201",104.0],["202202",112.4],["202203",109.9],["202204",115.6],["202301",106.8],["202302",111.3],["202303",110.7],["202304",116.1],["202401",109.1],["202402",113.6],["202403",111.0],["202404",117.1],["202501",109.2],["202502",114.9],["202503",115.0],["202504",119.8]], lastChanged: "2026-03-25" };
const OPERATION_RATE_SNAPSHOT = { unit: "%", rows: [["202301",71.2],["202302",72.6],["202303",72.6],["202304",71.9],["202305",71.6],["202306",72.4],["202307",72.1],["202308",72.5],["202309",71.8],["202310",72.7],["202311",72.6],["202312",72.2],["202401",72.6],["202402",72.8],["202403",72.0],["202404",71.8],["202405",73.2],["202406",71.6],["202407",71.5],["202408",72.1],["202409",70.5],["202410",71.6],["202411",71.9],["202412",72.6],["202501",70.2],["202502",70.5],["202503",70.7],["202504",70.7],["202505",71.3],["202506",70.9],["202507",71.6],["202508",70.8],["202509",71.3],["202510",70.0],["202511",77.6],["202512",75.0],["202601",74.7]], lastChanged: "2026-02-27" };

const marketItems = [
  { id: "govt3y", name: "국고채 3년", code: "GOVT03Y", badge: "Rate", unit: "%" },
  { id: "kospi", name: "KOSPI지수", code: "KOSPI", badge: "Index", unit: "" },
  { id: "kosdaq", name: "KOSDAQ", code: "KOSDAQ", badge: "Index", unit: "" },
  { id: "usdkrw", name: "달러/원", code: "USDKRW", badge: "FX", unit: "" },
  { id: "wti", name: "WTI유", code: "OIL", badge: "Commodity", unit: "" },
  { id: "gold", name: "금", code: "XAU", badge: "Metal", unit: "" },
  { id: "silver", name: "은", code: "XAG", badge: "Metal", unit: "" },
  { id: "bitcoin", name: "비트코인", code: "BTC", badge: "Crypto", unit: "" },
];

let smeData = [];
let smeYears = [];
let smeSelectedYear = "";
let startupSeries = [];
let loanSeries = [];
let delinquencySeries = [];
let loanYears = [];
let loanRangeStart = "";
let loanRangeEnd = "";
let loanYearRangeStart = "";
let loanYearRangeEnd = "";
let delinquencyRangeStart = "";
let delinquencyRangeEnd = "";
let investmentSeries = [];
let investmentStageSeries = [];
let investmentSectorSeries = [];
let investmentSourceSeries = [];
let investmentDates = [];
let investmentSelectedPeriod = "annual";
let investmentYearRangeStart = "";
let investmentYearRangeEnd = "";
let investmentBreakdownSelectedPeriod = "annual";
let investmentBreakdownRangeStart = "";
let investmentBreakdownRangeEnd = "";
let investmentBreakdownSelectedIndustry = "";
let investmentSourceSelectedPeriod = "annual";
let investmentSourceRangeStart = "";
let investmentSourceRangeEnd = "";
let investmentSourceSelectedPolicyDetail = "모태펀드";
let investmentSourceSelectedPrivateDetail = "VC";
let exportSeries = [];
let exportCountrySeries = [];
let exportDates = [];
let exportRangeStart = "";
let exportRangeEnd = "";
let businessCompositeSeries = [];
let businessSeries = [];
let businessDates = [];
let productionSeries = [];
let serviceProductionSeries = [];
let operationRateSeries = [];
let businessRangeStart = "";
let businessRangeEnd = "";
let productionRangeStart = "";
let productionRangeEnd = "";
let operationRangeStart = "";
let operationRangeEnd = "";
let feelingRangeStart = "";
let feelingRangeEnd = "";
let businessHasLoaded = false;
let businessIsLoading = false;
let feelingActualSeries = [];
let feelingOutlookSeries = [];
let feelingSelectedLabel = "기업심리지수";
let feelingHasLoaded = false;
let feelingIsLoading = false;
let managementGrowthSeries = [];
let managementProfitSeries = [];
let managementStabilitySeries = [];
let managementRangeStart = "";
let managementRangeEnd = "";
let managementVisibleCategories = ["종합", "대기업", "중소기업"];
let managementHasLoaded = false;
let managementIsLoading = false;
let smeLoadError = "";
let startupLoadError = "";
let loanLoadError = "";
let investmentLoadError = "";
let exportLoadError = "";
let businessLoadError = "";
let productionLoadError = "";
let operationLoadError = "";
let feelingLoadError = "";
let managementLoadError = "";

function formatClock(date = new Date()) {
  return new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function formatNumber(value, digits = 2) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function formatSmeValue(item, value) {
  if (item.title === "기업수") {
    return `${formatNumber(value / 10000, 1)}<span class="sme-value-unit">만개</span>`;
  }

  if (item.title === "종사자수") {
    return `${formatNumber(value / 10000, 1)}<span class="sme-value-unit">만명</span>`;
  }

  if (item.title === "매출액") {
    return `${formatNumber(value / 1000000, 1)}<span class="sme-value-unit">조원</span>`;
  }

  return `${formatNumber(value, 0)}`;
}

function getSmeDisplayLabel(title) {
  if (title === "기업수") {
    return "중소기업 수";
  }
  if (title === "종사자수") {
    return "중소기업 종사자수";
  }
  if (title === "매출액") {
    return "중소기업 매출액";
  }
  return title;
}

function formatManCount(value) {
  return `${formatNumber(value / 10000, 1)}<span class="sme-value-unit">만개</span>`;
}

function formatStartupIndustryShare(value, total) {
  if (
    value === undefined ||
    value === null ||
    total === undefined ||
    total === null ||
    total === 0
  ) {
    return "-";
  }

  return `${formatNumber((value / total) * 100, 1)}%`;
}

function formatTotalFootnote(item, totalValue) {
  if (item.title === "기업수") {
    return `전체 ${formatNumber(totalValue / 10000, 1)}만개`;
  }

  if (item.title === "종사자수") {
    return `전체 ${formatNumber(totalValue / 10000, 1)}만명`;
  }

  if (item.title === "매출액") {
    return `전체 ${formatNumber(totalValue / 1000000, 1)}조원`;
  }

  return `전체 ${formatNumber(totalValue, 0)}`;
}

function formatStartupMetric(value, type) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  if (type === "share") {
    return `${formatNumber(value, 1)}%`;
  }

  return `${formatNumber(value / 10000, 1)}<span class="sme-value-unit">만개</span>`;
}

function formatYoYGrowth(current, previous) {
  if (
    current === undefined ||
    current === null ||
    previous === undefined ||
    previous === null ||
    previous === 0
  ) {
    return "";
  }

  const growth = ((current - previous) / previous) * 100;
  if (growth > 0) {
    return `<span class="startup-delta is-up">(전년대비 ▲ ${formatNumber(Math.abs(growth), 1)}%)</span>`;
  }
  if (growth < 0) {
    return `<span class="startup-delta is-down">(전년대비 ▼ ${formatNumber(Math.abs(growth), 1)}%)</span>`;
  }
  return `<span class="startup-delta">(전년대비 0.0%)</span>`;
}

function formatSmeDelta(item, current, previous) {
  if (
    current === undefined ||
    current === null ||
    previous === undefined ||
    previous === null
  ) {
    return "";
  }

  const delta = current - previous;
  const directionClass = delta > 0 ? " is-up" : delta < 0 ? " is-down" : "";

  if (item.title === "기업수") {
    return `<span class="startup-delta${directionClass}">(전년대비 ${delta > 0 ? "▲ " : delta < 0 ? "▼ " : ""}${formatNumber(Math.abs(delta) / 10000, 1)}만개)</span>`;
  }

  if (item.title === "종사자수") {
    return `<span class="startup-delta${directionClass}">(전년대비 ${delta > 0 ? "▲ " : delta < 0 ? "▼ " : ""}${formatNumber(Math.abs(delta) / 10000, 1)}만명)</span>`;
  }

  if (item.title === "매출액") {
    return `<span class="startup-delta${directionClass}">(전년대비 ${delta > 0 ? "▲ " : delta < 0 ? "▼ " : ""}${formatNumber(Math.abs(delta) / 1000000, 1)}조원)</span>`;
  }

  return `<span class="startup-delta${directionClass}">(전년대비 ${delta > 0 ? "▲ " : delta < 0 ? "▼ " : ""}${formatNumber(Math.abs(delta), 0)})</span>`;
}

function setStatus(message) {
  const status = document.getElementById("last-updated");
  if (status) {
    status.textContent = `업데이트 ${formatClock()}`;
  }
}

function fetchText(url) {
  return fetch(url, { cache: "no-store" }).then((response) => {
    if (!response.ok) {
      throw new Error(`요청 실패: ${response.status}`);
    }

    return response.text();
  });
}

function fetchJson(url) {
  return fetch(url, { cache: "no-store" }).then((response) => {
    if (!response.ok) {
      throw new Error(`요청 실패: ${response.status}`);
    }

    return response.json();
  });
}

function fetchStaticJson(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`요청 실패: ${response.status}`);
    }

    return response.json();
  });
}

function readStaticJsonCache(cacheKey) {
  if (!cacheKey) {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(cacheKey);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function writeStaticJsonCache(cacheKey, payload) {
  if (!cacheKey) {
    return;
  }

  try {
    window.localStorage.setItem(cacheKey, JSON.stringify(payload));
  } catch (error) {
    // Ignore storage errors.
  }
}

function getBundledStaticJsonPayload(url) {
  const bundle = window.__DASHBOARD_STATIC_JSON__;
  if (!bundle || typeof bundle !== "object") {
    return null;
  }

  const normalizedUrl = String(url || "").split("?")[0].split("#")[0];
  const fileName = normalizedUrl.split("/").pop();
  const payload = fileName ? bundle[fileName] : null;
  return payload && typeof payload === "object" ? payload : null;
}

function createMemoizedStaticJsonLoader(url, cacheKey = "") {
  let pendingPromise = null;

  return async function loadStaticJsonPayload() {
    const bundledPayload = getBundledStaticJsonPayload(url);
    if (bundledPayload) {
      writeStaticJsonCache(cacheKey, bundledPayload);
      return bundledPayload;
    }

    if (!pendingPromise) {
      pendingPromise = fetchStaticJson(url)
        .then((payload) => {
          writeStaticJsonCache(cacheKey, payload);
          return payload;
        })
        .catch((error) => {
          pendingPromise = null;
          const cachedPayload = readStaticJsonCache(cacheKey);
          if (cachedPayload) {
            return cachedPayload;
          }
          throw error;
        });
    }

    return pendingPromise;
  };
}

function readStaticRows(payload, key, errorMessage) {
  const rows = payload?.[key];
  if (!Array.isArray(rows)) {
    throw new Error(errorMessage);
  }
  return rows;
}

const loadStartupJsonPayload = createMemoizedStaticJsonLoader(STARTUP_JSON_URL, STARTUP_JSON_CACHE_KEY);
const loadBusinessJsonPayload = createMemoizedStaticJsonLoader(BUSINESS_JSON_URL, BUSINESS_JSON_CACHE_KEY);
const loadFeelingJsonPayload = createMemoizedStaticJsonLoader(FEELING_JSON_URL, FEELING_JSON_CACHE_KEY);
const loadManagementJsonPayload = createMemoizedStaticJsonLoader(MANAGEMENT_JSON_URL, MANAGEMENT_JSON_CACHE_KEY);
const loadExportJsonPayload = createMemoizedStaticJsonLoader(EXPORT_JSON_URL, EXPORT_JSON_CACHE_KEY);
const loadLoanJsonPayload = createMemoizedStaticJsonLoader(LOAN_JSON_URL, LOAN_JSON_CACHE_KEY);
const loadInvestmentJsonPayload = createMemoizedStaticJsonLoader(INVESTMENT_JSON_URL, INVESTMENT_JSON_CACHE_KEY);
const INVESTMENT_PERIOD_OPTIONS = [
  { value: "q1", label: "1분기", month: 3 },
  { value: "q2", label: "2분기", month: 6 },
  { value: "q3", label: "3분기", month: 9 },
  { value: "annual", label: "연간", month: 12 },
];

function extractJsonPayload(text) {
  const trimmed = String(text || "").trim();
  const arrayStart = trimmed.indexOf("[");
  const objectStart = trimmed.indexOf("{");
  const startIndex = [arrayStart, objectStart]
    .filter((index) => index >= 0)
    .sort((a, b) => a - b)[0];

  if (startIndex === undefined) {
    throw new Error("JSON 응답을 찾지 못했습니다.");
  }

  return JSON.parse(trimmed.slice(startIndex));
}

async function fetchJsonViaProxy(url) {
  const proxiedText = await fetchText(`https://r.jina.ai/http://${url}`);
  return extractJsonPayload(proxiedText);
}

function mapGvizPayload(payload) {
  const cols = payload.table?.cols ?? [];
  const rows = payload.table?.rows ?? [];

  return rows.map((row) => {
    const cells = row.c ?? [];
    return cols.reduce((accumulator, col, index) => {
      const key = col.label || col.id || `col_${index}`;
      const cell = cells[index];
      accumulator[key] = cell?.v ?? null;
      return accumulator;
    }, {});
  });
}

function parseNumeric(value) {
  if (value === null || value === undefined || value === "") {
    return Number.NaN;
  }

  if (typeof value === "number") {
    return value;
  }

  return Number(String(value).replace(/,/g, "").trim());
}

function loadGoogleSheetViaJsonp(sheetName, baseUrl = SHEET_BASE_URL) {
  return new Promise((resolve, reject) => {
    const callbackName = `__sheetCallback_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const script = document.createElement("script");
    const tqx = encodeURIComponent(`out:json;responseHandler:${callbackName}`);
    const sheet = encodeURIComponent(sheetName);
    const timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error(`${sheetName} 시트 응답 시간 초과`));
    }, 7000);

    window[callbackName] = (payload) => {
      cleanup();
      try {
        resolve(mapGvizPayload(payload));
      } catch (error) {
        reject(error);
      }
    };

    script.src = sheetName
      ? `${baseUrl}?tqx=${tqx}&sheet=${sheet}`
      : `${baseUrl}?tqx=${tqx}`;
    script.async = true;

    script.onerror = () => {
      cleanup();
      reject(new Error(`${sheetName} 시트 로드 실패`));
    };

    function cleanup() {
      window.clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
    }

    document.head.appendChild(script);
  });
}

function loadGoogleSheetViaOpenSheet(sheetName, baseUrl = OPENSHEET_BASE_URL) {
  const sheet = encodeURIComponent(sheetName);
  return fetchJson(sheetName ? `${baseUrl}/${sheet}?raw=true` : `${baseUrl}?raw=true`);
}

async function loadGoogleSheet(sheetName, options = {}) {
  const {
    baseUrl = SHEET_BASE_URL,
    openSheetBaseUrl = OPENSHEET_BASE_URL,
  } = options;
  try {
    return await loadGoogleSheetViaJsonp(sheetName, baseUrl);
  } catch (jsonpError) {
    try {
      return await loadGoogleSheetViaOpenSheet(sheetName, openSheetBaseUrl);
    } catch (openSheetError) {
      throw new Error(
        `${sheetName} 시트 로드 실패 (${jsonpError.message}; 대체 경로 실패: ${openSheetError.message})`,
      );
    }
  }
}

function readSheetSnapshot(cacheKey) {
  try {
    const raw = window.localStorage.getItem(cacheKey);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeSheetSnapshot(cacheKey, rows) {
  try {
    window.localStorage.setItem(cacheKey, JSON.stringify(rows));
  } catch (error) {
    // Ignore local cache errors.
  }
}

async function loadGoogleSheetWithCache(sheetName, cacheKey, options = {}) {
  try {
    const rows = await loadGoogleSheet(sheetName, options);
    writeSheetSnapshot(cacheKey, rows);
    return rows;
  } catch (error) {
    const cachedRows = readSheetSnapshot(cacheKey);
    if (cachedRows.length) {
      return cachedRows;
    }

    throw error;
  }
}

function sortSmeIndustries(a, b) {
  if (a === "전산업") {
    return -1;
  }
  if (b === "전산업") {
    return 1;
  }
  return a.localeCompare(b, "ko");
}

function parseSmeMetricRows(rows, metricConfig) {
  const years = {};
  let unit = metricConfig.unit;
  const uniqueYears = [...new Set(
    rows
      .map((row) => String(row?.PRD_DE || "").trim())
      .filter((year) => /^\d{4}$/.test(year)),
  )].sort();
  const fallbackCategoryByBlock = ["전체기업", "중소기업", "중소기업 외"];

  rows.forEach((row, index) => {
    const year = String(row?.PRD_DE || "").trim();
    const industry = String(row?.C1_NM || row?.NM || "전산업").trim() || "전산업";
    const region = String(row?.C2_NM || "").trim();
    const fallbackCategory =
      uniqueYears.length ? fallbackCategoryByBlock[Math.floor(index / uniqueYears.length)] || "" : "";
    const companyType = String(row?.C3_NM || fallbackCategory).trim();
    const value = parseNumeric(row?.DT);

    if (!year || !industry || Number.isNaN(value)) {
      return;
    }

    if (region && region !== "전국") {
      return;
    }

    if (!["전체기업", "중소기업"].includes(companyType)) {
      return;
    }

    if (!years[year]) {
      years[year] = {};
    }

    if (!years[year][industry]) {
      years[year][industry] = { total: null, sme: null };
    }

    if (companyType === "전체기업") {
      years[year][industry].total = value;
    } else {
      years[year][industry].sme = value;
    }

    if (row?.UNIT_NM) {
      unit = String(row.UNIT_NM).trim();
    }
  });

  return {
    title: metricConfig.title,
    unit,
    color: metricConfig.color,
    years,
  };
}

function buildSmeDataset(metricRows) {
  const nextData = metricRows
    .map(({ rows, config }) => parseSmeMetricRows(rows, config))
    .filter((item) => Object.keys(item.years).length);

  const nextYears = [...new Set(nextData.flatMap((item) => Object.keys(item.years)))].sort();

  if (!nextData.length || !nextYears.length) {
    throw new Error("위상 데이터를 파싱하지 못했습니다.");
  }

  return { nextData, nextYears };
}

function readSmeMetricSnapshot(cacheKey) {
  try {
    const raw = window.localStorage.getItem(cacheKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function writeSmeMetricSnapshot(cacheKey, rows) {
  try {
    window.localStorage.setItem(cacheKey, JSON.stringify(rows));
  } catch (error) {
    // Ignore local cache errors.
  }
}

async function loadSmeMetricApi(url, cacheKey) {
  try {
    let payload;

    try {
      payload = await fetchJson(url);
    } catch (directError) {
      payload = await fetchJsonViaProxy(url);
    }

    if (!Array.isArray(payload)) {
      if (payload?.err) {
        throw new Error(payload.errMsg || `KOSIS 오류 코드 ${payload.err}`);
      }

      throw new Error("KOSIS 위상 데이터 형식을 확인해 주세요.");
    }

    writeSmeMetricSnapshot(cacheKey, payload);
    return payload;
  } catch (error) {
    const cachedRows = readSmeMetricSnapshot(cacheKey);
    if (cachedRows.length) {
      return cachedRows;
    }

    throw error;
  }
}

function createSmeProfileDataset(smeCountRows, smeEmployeeRows, smeSalesRows) {
  return buildSmeDataset([
    { rows: smeCountRows, config: { title: "기업수", unit: "개", color: "#2c7be5" } },
    { rows: smeEmployeeRows, config: { title: "종사자수", unit: "명", color: "#4a9bff" } },
    { rows: smeSalesRows, config: { title: "매출액", unit: "백만원", color: "#7fb8ff" } },
  ]);
}

function normalizeSmeProfilePayload(payload) {
  if (Array.isArray(payload?.nextData) && Array.isArray(payload?.nextYears)) {
    return {
      nextData: payload.nextData,
      nextYears: payload.nextYears,
    };
  }

  throw new Error("위상 JSON 데이터 형식을 확인해 주세요.");
}

async function loadSmeProfileJson() {
  const payload = await fetchStaticJson(SME_PROFILE_JSON_URL);
  return normalizeSmeProfilePayload(payload);
}

function readCachedSmeProfileData() {
  try {
    const raw = window.localStorage.getItem(SME_PROFILE_CACHE_KEY);
    if (raw) {
      return normalizeSmeProfilePayload(JSON.parse(raw));
    }
  } catch (error) {
    // Ignore local cache errors.
  }

  const smeCountRows = readSmeMetricSnapshot(SME_COUNT_CACHE_KEY);
  const smeEmployeeRows = readSmeMetricSnapshot(SME_EMPLOYEE_CACHE_KEY);
  const smeSalesRows = readSmeMetricSnapshot(SME_SALES_CACHE_KEY);

  if (!smeCountRows.length && !smeEmployeeRows.length && !smeSalesRows.length) {
    return null;
  }

  try {
    return createSmeProfileDataset(smeCountRows, smeEmployeeRows, smeSalesRows);
  } catch (error) {
    return null;
  }
}

function writeCachedSmeProfileData(nextData, nextYears) {
  try {
    window.localStorage.setItem(
      SME_PROFILE_CACHE_KEY,
      JSON.stringify({ nextData, nextYears }),
    );
  } catch (error) {
    // Ignore local cache errors.
  }
}

async function loadSmeProfileData() {
  try {
    const payload = await loadSmeProfileJson();
    writeCachedSmeProfileData(payload.nextData, payload.nextYears);
    return payload;
  } catch (jsonError) {
    // Fall back to the live API path if the local snapshot is unavailable.
  }

  const [smeCountRows, smeEmployeeRows, smeSalesRows] = await Promise.all([
    loadSmeMetricApi(SME_COUNT_API_URL, SME_COUNT_CACHE_KEY),
    loadSmeMetricApi(SME_EMPLOYEE_API_URL, SME_EMPLOYEE_CACHE_KEY),
    loadSmeMetricApi(SME_SALES_API_URL, SME_SALES_CACHE_KEY),
  ]);

  const payload = buildSmeDataset([
    { rows: smeCountRows, config: { title: "기업수", unit: "개", color: "#2c7be5" } },
    { rows: smeEmployeeRows, config: { title: "종사자수", unit: "명", color: "#4a9bff" } },
    { rows: smeSalesRows, config: { title: "매출액", unit: "백만원", color: "#7fb8ff" } },
  ]);
  writeCachedSmeProfileData(payload.nextData, payload.nextYears);
  return payload;
}

function getSmeIndustryTopFive(item, year) {
  const yearData = item?.years?.[year] || {};
  const totalSme = yearData["전산업"]?.sme;
  const fallbackTotal = Object.entries(yearData)
    .filter(([industry]) => industry !== "전산업")
    .reduce((sum, [, values]) => sum + (Number.isFinite(values?.sme) ? values.sme : 0), 0);
  const baseValue = Number.isFinite(totalSme) && totalSme > 0 ? totalSme : fallbackTotal;

  if (!baseValue) {
    return [];
  }

  return Object.entries(yearData)
    .filter(([industry, values]) => industry !== "전산업" && Number.isFinite(values?.sme) && values.sme > 0)
    .map(([industry, values]) => ({
      industry,
      value: values.sme,
      share: (values.sme / baseValue) * 100,
    }))
    .sort((a, b) => b.share - a.share)
    .slice(0, 5);
}

async function refreshSmeData() {
  const button = document.getElementById("sme-refresh-button");
  const previousText = button?.textContent || "새로고침";

  if (button) {
    button.disabled = true;
    button.textContent = "갱신 중";
  }

  try {
    smeLoadError = "";
    const { nextData, nextYears } = await loadSmeProfileData();
    smeData = nextData;
    smeYears = nextYears;
    initSmeYearSelect();
    renderSmeData();
    renderSmeCharts();
  } catch (error) {
    smeLoadError = `오류: ${error.message}`;
    renderSmeData();
    renderSmeCharts();
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

async function refreshExportData() {
  const button = document.getElementById("export-refresh-button");
  const previousText = button?.textContent || "새로고침";

  if (button) {
    button.disabled = true;
    button.textContent = "갱신 중";
  }

  try {
    exportLoadError = "";
    const { series, countrySeries } = await loadExportData();
    exportSeries = series;
    exportCountrySeries = countrySeries;
    exportDates = exportSeries.map((item) => item.key);
    initExportDateSelect();
    renderExportSummary();
    renderExportCharts();
  } catch (error) {
    exportLoadError = `오류: ${error.message}`;
    renderExportSummary();
    renderExportCharts();
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

async function refreshStartupData() {
  const button = document.getElementById("startup-refresh-button");
  const previousText = button?.textContent || "새로고침";

  if (button) {
    button.disabled = true;
    button.textContent = "갱신 중";
  }

  try {
    startupLoadError = "";
    startupSeries = await loadStartupData();
    initStartupYearSelect();
    renderStartupSummary();
    renderStartupCharts();
  } catch (error) {
    startupLoadError = `오류: ${error.message}`;
    renderStartupSummary();
    renderStartupCharts();
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

/* function applyInvestmentSheetData(
  investmentSheetRows,
  investmentStageSheetRows,
  investmentSectorSheetRows,
  investmentSourceSheetRows,
) {
  investmentSeries = parseInvestmentRows(investmentSheetRows, [
    "?좉퇋 踰ㅼ쿂?ъ옄湲덉븸",
    "?쇳닾?먭린????,
    "湲곗뾽???ъ옄湲덉븸",
    "踰ㅼ쿂???寃곗젙湲덉븸",
    "踰ㅼ쿂???寃곗꽦 ??,
  ]);
  investmentStageSeries = parseInvestmentRows(investmentStageSheetRows, [
    "珥덇린 ?ъ옄(3???대궡)",
    "以묎린 ?ъ옄(3~7???대궡)",
    "?꾧린 ?ъ옄(7??珥덇낵)",
  ]);
  investmentSectorSeries = parseInvestmentRows(investmentSectorSheetRows, [
    "ICT?쒕퉬??,
    "諛붿씠?ㅒ룹쓽猷?,
    "?꾧린쨌湲곌퀎쨌?λ퉬",
    "ICT?쒖“",
    "?좏넻쨌?쒕퉬??,
    "?뷀븰쨌?뚯옱",
    "?곸긽쨌怨듭뿰쨌?뚮컲",
    "寃뚯엫",
    "湲고?",
  ]);
  investmentSourceSeries = parseInvestmentRows(investmentSourceSheetRows, [
    "?뺤콉湲덉쑖",
    "紐⑦깭???,
    "?깆옣湲덉쑖",
    "?곗뾽???,
    "湲고? ?뺤콉湲덉쑖",
    "誘쇨컙遺臾?,
    "媛쒖씤",
    "?쇰컲踰뺤씤",
    "湲덉쑖湲곌?(?곗? ?쒖쇅)",
    "?곌린湲?諛?怨듭젣??,
    "VC",
    "湲고??⑥껜 諛??멸뎅??,
  ]);
  investmentDates = investmentSeries.map((item) => item.key);
}

*/
async function refreshLoanData() {
  const button = document.getElementById("loan-refresh-button");
  const previousText = button?.textContent || "새로고침";

  if (button) {
    button.disabled = true;
    button.textContent = "갱신 중";
  }

  try {
    loanLoadError = "";
    const { nextLoanSeries, nextDelinquencySeries, nextLoanYears } = await loadLoanData();
    loanSeries = nextLoanSeries;
    delinquencySeries = nextDelinquencySeries;
    loanYears = nextLoanYears;
    writeCachedLoanData();
    initLoanYearSelect();
    initLoanRangeControls();
    renderLoanSummary();
    renderLoanCharts();
  } catch (error) {
    loanLoadError = `오류: ${error.message}`;
    initLoanRangeControls();
    renderLoanSummary();
    renderLoanCharts();
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

async function refreshInvestmentData() {
  const button = document.getElementById("investment-refresh-button");
  const previousText = button?.textContent || "새로고침";

  if (button) {
    button.disabled = true;
    button.textContent = "갱신 중";
  }

  try {
    investmentLoadError = "";
    const payload = await loadInvestmentData();
    investmentSeries = payload.investmentSeries;
    investmentStageSeries = payload.investmentStageSeries;
    investmentSectorSeries = payload.investmentSectorSeries;
    investmentSourceSeries = payload.investmentSourceSeries;
    investmentDates = payload.investmentDates;
    writeCachedInvestmentData();
    initInvestmentDateSelect();
    renderInvestmentSummary();
    renderInvestmentCharts();
  } catch (error) {
    investmentLoadError = `오류: ${error.message}`;
    renderInvestmentSummary();
    renderInvestmentCharts();
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

function normalizeLabel(value) {
  return String(value || "").replace(/\s+/g, "").trim();
}

function normalizeStartupIndustryName(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function parseStartupRows(rows) {
  if (!Array.isArray(rows)) {
    return [];
  }

  const byYear = {};

  rows.forEach((row) => {
    const year = String(row?.PRD_DE || row?.prd_de || row?.시점 || "").trim();
    const industry = normalizeStartupIndustryName(row?.C1_NM || row?.NM || row?.구분 || "");
    const startupCount = parseNumeric(row?.DT ?? row?.dt ?? row?.DATA_VALUE ?? row?.data_value ?? row?.value ?? row["전체 창업기업 수"]);

    if (!/^\d{4}$/.test(year) || !industry || Number.isNaN(startupCount)) {
      return;
    }

    if (!byYear[year]) {
      byYear[year] = {
        year,
        startupCount: null,
        techStartupCount: 0,
        techShare: null,
        industries: {},
        topIndustries: [],
        lastChanged: String(row?.LST_CHN_DE || row?.lst_chn_de || "").trim(),
      };
    }

    if (industry === "합계") {
      byYear[year].startupCount = startupCount;
      return;
    }

    if (industry === "기술기반업종") {
      byYear[year].techStartupCount = startupCount;
      return;
    }

    byYear[year].industries[industry] = startupCount;
  });

  return Object.values(byYear)
    .map((entry) => {
      const industries = entry.industries || {};
      const topIndustries = Object.entries(industries)
        .map(([industry, value]) => ({ industry, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);
      const techShare =
        entry.startupCount && entry.techStartupCount
          ? (entry.techStartupCount / entry.startupCount) * 100
          : null;

      return {
        ...entry,
        startupCount: entry.startupCount,
        techShare,
        topIndustries,
      };
    })
    .filter((row) => row.startupCount !== null)
    .sort((a, b) => Number(a.year) - Number(b.year));
}

function readStartupSnapshot() {
  try {
    const raw = window.localStorage.getItem(STARTUP_CACHE_KEY);
    if (!raw) {
      return [];
    }

    return parseStartupRows(JSON.parse(raw));
  } catch (error) {
    return [];
  }
}

function writeStartupSnapshot(rows) {
  try {
    window.localStorage.setItem(STARTUP_CACHE_KEY, JSON.stringify(rows));
  } catch (error) {
    // Ignore local cache errors.
  }
}

async function loadStartupData() {
  try {
    const payload = await loadStartupJsonPayload();
    const rawRows = readStaticRows(payload, "rows", "창업 JSON 데이터 형식을 확인해 주세요.");
    const rows = parseStartupRows(rawRows);
    writeStartupSnapshot(rawRows);
    return rows;
  } catch (error) {
    const cachedRows = readStartupSnapshot();
    if (cachedRows.length) {
      return cachedRows;
    }

    throw error;
  }
}

function parseSheetDate(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }

  const stringValue = String(value || "").trim();
  const dateMatch = stringValue.match(/^Date\((\d+),(\d+),(\d+)\)$/);
  if (dateMatch) {
    return new Date(Number(dateMatch[1]), Number(dateMatch[2]), Number(dateMatch[3]));
  }

  const parsedDate = new Date(stringValue);
  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate;
  }

  return null;
}

function parseBusinessPeriod(key) {
  const stringKey = String(key || "").trim();
  if (!/^\d{6}$/.test(stringKey)) {
    return null;
  }

  return new Date(Number(stringKey.slice(0, 4)), Number(stringKey.slice(4, 6)) - 1, 1);
}

function parseBusinessRows(rows) {
  if (!Array.isArray(rows)) {
    return [];
  }
  const deduped = new Map();

  rows.forEach((row) => {
    const key = String(row?.PRD_DE || row?.prd_de || "").trim();
    const value = parseNumeric(row?.DT ?? row?.dt ?? row?.DATA_VALUE ?? row?.data_value ?? row?.value);
    const date = parseBusinessPeriod(key);

    if (!key || !date || Number.isNaN(value)) {
      return;
    }

    deduped.set(key, {
      key,
      date,
      value,
      unit: String(row?.UNIT_NM || row?.unit_nm || "").trim(),
      itemName: String(row?.C1_OBJ_NM || row?.OBJ_NM || row?.ITM_NM || "동행지수 순환변동치").trim(),
    });
  });

  return [...deduped.values()].sort((a, b) => a.key.localeCompare(b.key));
}

function parseBusinessSnapshot(snapshot, itemName) {
  const rows = snapshot?.rows || [];
  const unit = snapshot?.unit || "";

  return rows.map(([key, value]) => ({
    key,
    date: parseBusinessPeriod(key),
    value,
    unit,
    itemName,
  }));
}

function parseQuarterPeriod(key) {
  const stringKey = String(key || "").trim();
  if (!/^\d{6}$/.test(stringKey)) {
    return null;
  }

  const year = Number(stringKey.slice(0, 4));
  const quarter = Number(stringKey.slice(4, 6));
  if (quarter < 1 || quarter > 4) {
    return null;
  }

  return new Date(year, quarter * 3 - 1, 1);
}

function parseProductionRows(rows) {
  if (!Array.isArray(rows)) {
    return [];
  }

  const deduped = new Map();
  rows.forEach((row) => {
    const key = String(row?.PRD_DE || row?.prd_de || "").trim();
    const value = parseNumeric(row?.DT ?? row?.dt ?? row?.DATA_VALUE ?? row?.data_value ?? row?.value);
    const date = parseQuarterPeriod(key);

    if (!key || !date || Number.isNaN(value)) {
      return;
    }

    deduped.set(key, {
      key,
      date,
      value,
      unit: String(row?.UNIT_NM || row?.unit_nm || "").trim(),
      itemName: String(row?.ITM_NM || "중소기업생산지수").trim(),
      lastChanged: String(row?.LST_CHN_DE || row?.lst_chn_de || "").trim(),
    });
  });

  return [...deduped.values()].sort((a, b) => a.key.localeCompare(b.key));
}

function parseProductionSnapshot(snapshot, itemName) {
  const rows = snapshot?.rows || [];
  const unit = snapshot?.unit || "";
  const lastChanged = snapshot?.lastChanged || "";

  return rows.map(([key, value]) => ({
    key,
    date: parseQuarterPeriod(key),
    value,
    unit,
    itemName,
    lastChanged,
  }));
}

function parseOperationRows(rows) {
  if (!Array.isArray(rows)) {
    return [];
  }

  const deduped = new Map();
  rows.forEach((row) => {
    const category = String(
      row?.C1_NM
      || row?.c1_nm
      || row?.ITM_NM
      || row?.itm_nm
      || "제조업 계절조정",
    ).trim();
    const normalizedCategory = category === "평균가동률" ? "제조업 계절조정" : category;
    if (normalizedCategory !== "제조업 계절조정") {
      return;
    }

    const key = String(row?.PRD_DE || row?.prd_de || "").trim();
    const value = parseNumeric(row?.DT ?? row?.dt ?? row?.DATA_VALUE ?? row?.data_value ?? row?.value);
    const date = parseBusinessPeriod(key);

    if (!key || !date || Number.isNaN(value)) {
      return;
    }

    deduped.set(key, {
      key,
      date,
      value,
      unit: String(row?.UNIT_NM || row?.unit_nm || "").trim(),
      itemName: normalizedCategory,
      lastChanged: String(row?.LST_CHN_DE || row?.lst_chn_de || "").trim(),
    });
  });

  return [...deduped.values()].sort((a, b) => a.key.localeCompare(b.key));
}

function parseOperationSnapshot(snapshot, itemName) {
  const rows = snapshot?.rows || [];
  const unit = snapshot?.unit || "";
  const lastChanged = snapshot?.lastChanged || "";

  return rows.map(([key, value]) => ({
    key,
    date: parseBusinessPeriod(key),
    value,
    unit,
    itemName,
    lastChanged,
  }));
}

function normalizeFeelingName(name) {
  return String(name || "")
    .replace(/\s+/g, "")
    .replace(/\d+\)/g, "")
    .trim();
}

function getFeelingBaseName(name) {
  return normalizeFeelingName(name)
    .replace(/(실적|전망)BSI$/, "BSI")
    .replace(/(실적|전망)$/, "");
}

function getFeelingSelectedOption() {
  const selectedValue = String(getFeelingSelectedLabel("actual") || "기업심리지수").trim();
  return FEELING_BSI_OPTIONS.find((item) => item.label === selectedValue) || FEELING_BSI_OPTIONS[0];
}

function parseFeelingRows(rows) {
  if (!Array.isArray(rows)) {
    return [];
  }

  const deduped = new Map();
  rows.forEach((row) => {
    const key = String(row?.PRD_DE || row?.prd_de || "").trim();
    const value = parseNumeric(row?.DT ?? row?.dt ?? row?.DATA_VALUE ?? row?.data_value ?? row?.value);
    const date = parseBusinessPeriod(key);
    const bsiName = normalizeFeelingName(row?.C2_NM || row?.NM || row?.OBJ_NM || "");

    if (!key || !date || Number.isNaN(value) || !bsiName) {
      return;
    }

    deduped.set(`${bsiName}:${key}`, {
      key,
      date,
      value,
      unit: String(row?.UNIT_NM || row?.unit_nm || "").trim(),
      itemName: "중소기업 기업심리지수",
      bsiName,
      bsiBaseName: getFeelingBaseName(bsiName),
    });
  });

  return [...deduped.values()].sort((a, b) => {
    if (a.bsiName === b.bsiName) {
      return a.key.localeCompare(b.key);
    }
    return a.bsiName.localeCompare(b.bsiName);
  });
}

function parseManagementGrowthRows(rows) {
  if (!Array.isArray(rows)) {
    return [];
  }

  const categoryFallbackByIndex = ["종합", "대기업", "중소기업"];
  const normalizedRows = rows
    .map((row) => ({
      year: String(row?.PRD_DE || row?.prd_de || "").trim(),
      category: String(row?.C2_NM || row?.C2_OBJ_NM || row?.NM || "").trim(),
      value: parseNumeric(row?.DT ?? row?.dt ?? row?.DATA_VALUE ?? row?.data_value ?? row?.value),
      unit: String(row?.UNIT_NM || row?.unit_nm || "%").trim(),
    }))
    .filter((item) => /^\d{4}$/.test(item.year) && !Number.isNaN(item.value));

  const countsByYear = normalizedRows.reduce((accumulator, item) => {
    accumulator[item.year] = (accumulator[item.year] || 0) + 1;
    return accumulator;
  }, {});

  return normalizedRows
    .map((item, index, items) => {
      if (item.category && item.category !== "기업규모별") {
        return item;
      }

      const yearItems = items.filter((candidate) => candidate.year === item.year);
      const yearIndex = yearItems.findIndex((candidate) => candidate === item);
      const fallbackCategory =
        countsByYear[item.year] === 3
          ? categoryFallbackByIndex[yearIndex] || ""
          : "";

      return {
        ...item,
        category: fallbackCategory,
      };
    })
    .filter((item) => /^\d{4}$/.test(item.year) && item.category && !Number.isNaN(item.value))
    .sort((a, b) => {
      if (a.year === b.year) {
        return a.category.localeCompare(b.category, "ko");
      }
      return Number(a.year) - Number(b.year);
    });
}

async function loadBusinessCycleData() {
  try {
    const payload = await loadBusinessJsonPayload();
    const rows = parseBusinessRows(
      readStaticRows(payload, "businessCycleRows", "실물경기 JSON 데이터 형식을 확인해 주세요."),
    );
    return rows.length ? rows : parseBusinessSnapshot(BUSINESS_CYCLE_SNAPSHOT, "동행지수 순환변동치");
  } catch (error) {
    return parseBusinessSnapshot(BUSINESS_CYCLE_SNAPSHOT, "동행지수 순환변동치");
  }
}

async function loadBusinessCompositeData() {
  try {
    const payload = await loadBusinessJsonPayload();
    const rows = parseBusinessRows(
      readStaticRows(payload, "businessCompositeRows", "실물경기 JSON 데이터 형식을 확인해 주세요."),
    );
    return rows.length ? rows : parseBusinessSnapshot(BUSINESS_COMPOSITE_SNAPSHOT, "동행종합지수");
  } catch (error) {
    return parseBusinessSnapshot(BUSINESS_COMPOSITE_SNAPSHOT, "동행종합지수");
  }
}

async function loadProductionData() {
  try {
    const payload = await loadBusinessJsonPayload();
    const rows = parseProductionRows(
      readStaticRows(payload, "productionRows", "실물경기 JSON 데이터 형식을 확인해 주세요."),
    );
    return rows.length ? rows : parseProductionSnapshot(PRODUCTION_SNAPSHOT, "중소기업생산지수");
  } catch (error) {
    return parseProductionSnapshot(PRODUCTION_SNAPSHOT, "중소기업생산지수");
  }
}

async function loadServiceProductionData() {
  try {
    const payload = await loadBusinessJsonPayload();
    const rows = parseProductionRows(
      readStaticRows(payload, "serviceProductionRows", "실물경기 JSON 데이터 형식을 확인해 주세요."),
    );
    return rows.length ? rows : parseProductionSnapshot(SERVICE_PRODUCTION_SNAPSHOT, "중소기업서비스업생산지수");
  } catch (error) {
    return parseProductionSnapshot(SERVICE_PRODUCTION_SNAPSHOT, "중소기업서비스업생산지수");
  }
}

async function loadOperationRateData() {
  try {
    const payload = await loadBusinessJsonPayload();
    const rows = parseOperationRows(
      readStaticRows(payload, "operationRows", "실물경기 JSON 데이터 형식을 확인해 주세요."),
    );
    return rows.length ? rows : parseOperationSnapshot(OPERATION_RATE_SNAPSHOT, "제조업 계절조정");
  } catch (error) {
    return parseOperationSnapshot(OPERATION_RATE_SNAPSHOT, "제조업 계절조정");
  }
}

function readFeelingSnapshot(cacheKey) {
  try {
    const raw = window.localStorage.getItem(cacheKey);
    if (!raw) {
      return [];
    }

    const payload = JSON.parse(raw);
    if (!Array.isArray(payload)) {
      return [];
    }

    return payload
      .map((item) => ({
        key: String(item?.key || "").trim(),
        date: parseBusinessPeriod(item?.key),
        value: parseNumeric(item?.value),
        unit: String(item?.unit || "").trim(),
        itemName: String(item?.itemName || "중소기업 기업심리지수").trim(),
        bsiName: String(item?.bsiName || "기업심리지수실적").trim(),
        bsiBaseName: String(item?.bsiBaseName || getFeelingBaseName(item?.bsiName || "기업심리지수실적")).trim(),
      }))
      .filter((item) => item.key && item.date && !Number.isNaN(item.value))
      .sort((a, b) => {
        if (a.bsiName === b.bsiName) {
          return a.key.localeCompare(b.key);
        }
        return a.bsiName.localeCompare(b.bsiName);
      });
  } catch (error) {
    return [];
  }
}

function writeFeelingSnapshot(cacheKey, rows) {
  try {
    const payload = rows.map((item) => ({
      key: item.key,
      value: item.value,
      unit: item.unit,
      itemName: item.itemName,
      bsiName: item.bsiName,
      bsiBaseName: item.bsiBaseName,
    }));
    window.localStorage.setItem(cacheKey, JSON.stringify(payload));
  } catch (error) {
    // Ignore local cache errors.
  }
}

function hydrateFeelingFromCache() {
  const cachedActualRows = readFeelingSnapshot(FEELING_ACTUAL_CACHE_KEY);
  const cachedOutlookRows = readFeelingSnapshot(FEELING_OUTLOOK_CACHE_KEY);

  if (!cachedActualRows.length && !cachedOutlookRows.length) {
    return false;
  }

  if (cachedActualRows.length) {
    feelingActualSeries = cachedActualRows;
  }

  if (cachedOutlookRows.length) {
    feelingOutlookSeries = cachedOutlookRows;
  }

  initFeelingBsiSelect();
  renderFeelingSummary();
  renderFeelingCharts();
  feelingHasLoaded = true;
  return true;
}

async function loadFeelingSeries({ url, cacheKey }) {
  try {
    const payload = await loadFeelingJsonPayload();
    const rawRows = readStaticRows(
      payload,
      cacheKey === FEELING_ACTUAL_CACHE_KEY ? "actualRows" : "outlookRows",
      "체감경기 JSON 데이터 형식을 확인해 주세요.",
    );
    const rows = parseFeelingRows(rawRows);
    writeFeelingSnapshot(cacheKey, rows);
    return rows;
  } catch (error) {
    const cachedRows = readFeelingSnapshot(cacheKey);
    if (cachedRows.length) {
      return cachedRows;
    }

    throw error;
  }
}

async function loadFeelingActualData() {
  return loadFeelingSeries({
    url: `${FEELING_ACTUAL_API_URL_BASE}&objL2=ALL`,
    cacheKey: FEELING_ACTUAL_CACHE_KEY,
  });
}

async function loadFeelingOutlookData() {
  return loadFeelingSeries({
    url: `${FEELING_OUTLOOK_API_URL_BASE}&objL2=ALL`,
    cacheKey: FEELING_OUTLOOK_CACHE_KEY,
  });
}

function readManagementGrowthSnapshot() {
  try {
    const raw = window.localStorage.getItem(MANAGEMENT_GROWTH_CACHE_KEY);
    if (!raw) {
      return [];
    }

    return parseManagementGrowthRows(JSON.parse(raw));
  } catch (error) {
    return [];
  }
}

function writeManagementGrowthSnapshot(rows) {
  try {
    window.localStorage.setItem(MANAGEMENT_GROWTH_CACHE_KEY, JSON.stringify(rows));
  } catch (error) {
    // Ignore local cache errors.
  }
}

async function loadManagementGrowthData() {
  try {
    const payload = await loadManagementJsonPayload();
    const rawRows = readStaticRows(payload, "growthRows", "경영지표 JSON 데이터 형식을 확인해 주세요.");
    const rows = parseManagementGrowthRows(rawRows);
    writeManagementGrowthSnapshot(rows);
    return rows;
  } catch (error) {
    const cachedRows = readManagementGrowthSnapshot();
    if (cachedRows.length) {
      return cachedRows;
    }

    return MANAGEMENT_FALLBACK.growth;
  }
}

function readManagementMetricSnapshot(cacheKey) {
  try {
    const raw = window.localStorage.getItem(cacheKey);
    if (!raw) {
      return [];
    }

    return parseManagementGrowthRows(JSON.parse(raw));
  } catch (error) {
    return [];
  }
}

function writeManagementMetricSnapshot(cacheKey, rows) {
  try {
    window.localStorage.setItem(cacheKey, JSON.stringify(rows));
  } catch (error) {
    // Ignore local cache errors.
  }
}

async function loadManagementMetricData(url, cacheKey) {
  try {
    const payload = await loadManagementJsonPayload();
    const rawRows = readStaticRows(
      payload,
      cacheKey === MANAGEMENT_PROFIT_CACHE_KEY ? "profitRows" : "stabilityRows",
      "경영지표 JSON 데이터 형식을 확인해 주세요.",
    );
    const rows = parseManagementGrowthRows(rawRows);
    writeManagementMetricSnapshot(cacheKey, rows);
    return rows;
  } catch (error) {
    const cachedRows = readManagementMetricSnapshot(cacheKey);
    if (cachedRows.length) {
      return cachedRows;
    }

    return cacheKey === MANAGEMENT_PROFIT_CACHE_KEY
      ? MANAGEMENT_FALLBACK.profit
      : MANAGEMENT_FALLBACK.stability;
  }
}

async function loadManagementProfitData() {
  return loadManagementMetricData(MANAGEMENT_PROFIT_API_URL, MANAGEMENT_PROFIT_CACHE_KEY);
}

async function loadManagementStabilityData() {
  return loadManagementMetricData(MANAGEMENT_STABILITY_API_URL, MANAGEMENT_STABILITY_CACHE_KEY);
}

function hydrateManagementFromCache() {
  const growthRows = readManagementGrowthSnapshot();
  const profitRows = readManagementMetricSnapshot(MANAGEMENT_PROFIT_CACHE_KEY);
  const stabilityRows = readManagementMetricSnapshot(MANAGEMENT_STABILITY_CACHE_KEY);

  if (!growthRows.length && !profitRows.length && !stabilityRows.length) {
    return false;
  }

  managementLoadError = "";
  if (growthRows.length) {
    managementGrowthSeries = growthRows;
  }
  if (profitRows.length) {
    managementProfitSeries = profitRows;
  }
  if (stabilityRows.length) {
    managementStabilitySeries = stabilityRows;
  }
  managementHasLoaded = true;
  initManagementYearSelect();
  renderManagementSummary();
  renderManagementCharts();
  renderManagementProfitSummary();
  renderManagementProfitCharts();
  renderManagementStabilitySummary();
  renderManagementStabilityCharts();
  return true;
}

async function refreshBusinessData() {
  const buttons = [
    document.getElementById("business-refresh-button"),
    document.getElementById("production-refresh-button"),
    document.getElementById("operation-refresh-button"),
  ].filter(Boolean);
  const previousTexts = buttons.map((button) => button.textContent || "새로고침");

  buttons.forEach((button) => {
    button.disabled = true;
    button.textContent = "갱신 중";
  });

  try {
    businessIsLoading = true;
    businessLoadError = "";
    productionLoadError = "";
    operationLoadError = "";
    renderBusinessSummary();
    renderBusinessCharts();
    renderProductionSummary();
    renderProductionCharts();
    renderOperationSummary();
    renderOperationCharts();
    const [businessCompositeRows, businessCycleRows, productionRows, serviceProductionRows, operationRows] = await Promise.all([
      loadBusinessCompositeData(),
      loadBusinessCycleData(),
      loadProductionData(),
      loadServiceProductionData(),
      loadOperationRateData(),
    ]);

    businessCompositeSeries = businessCompositeRows;
    businessSeries = businessCycleRows;
    businessDates = businessSeries.map((item) => item.key);
    productionSeries = productionRows;
    serviceProductionSeries = serviceProductionRows;
    operationRateSeries = operationRows;
    businessHasLoaded = Boolean(
      businessCompositeRows.length
      || businessCycleRows.length
      || productionRows.length
      || serviceProductionRows.length
      || operationRows.length
    );
    initBusinessRangeSelects();
    renderBusinessSummary();
    renderBusinessCharts();
    renderProductionSummary();
    renderProductionCharts();
    renderOperationSummary();
    renderOperationCharts();
  } catch (error) {
    businessHasLoaded = false;
    businessLoadError = `오류: ${error.message}`;
    productionLoadError = `오류: ${error.message}`;
    operationLoadError = `오류: ${error.message}`;
    initBusinessRangeSelects();
    renderBusinessSummary();
    renderBusinessCharts();
    renderProductionSummary();
    renderProductionCharts();
    renderOperationSummary();
    renderOperationCharts();
  } finally {
    businessIsLoading = false;
    buttons.forEach((button, index) => {
      button.disabled = false;
      button.textContent = previousTexts[index];
    });
  }
}

function formatYearMonth(date) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
  }).format(date);
}

function formatYearLabel(value) {
  if (!value && value !== 0) {
    return "";
  }

  return `${value}년`;
}

function formatLoanValue(value) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  return `${formatNumber(value, 1)}<span class="sme-value-unit">조원</span>`;
}

function formatLoanNumberOnly(value) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  return formatNumber(value, 1);
}

function formatRateValue(value) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  return `${formatNumber(value, 2)}<span class="sme-value-unit">%</span>`;
}

function formatBusinessCycleValue(value, unit = "") {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  const trimmedUnit = String(unit || "").trim();
  return trimmedUnit
    ? `${formatNumber(value, 2)}<span class="sme-value-unit">${trimmedUnit}</span>`
    : formatNumber(value, 2);
}

function formatBusinessCycleDelta(current, previous, label = "전기대비") {
  if (
    current === undefined ||
    current === null ||
    Number.isNaN(current) ||
    previous === undefined ||
    previous === null ||
    Number.isNaN(previous)
  ) {
    return "";
  }

  const delta = current - previous;
  const directionClass = delta > 0 ? " is-up" : delta < 0 ? " is-down" : "";
  return `<span class="startup-delta${directionClass}">(${label} ${delta > 0 ? "▲ " : delta < 0 ? "▼ " : ""}${formatNumber(Math.abs(delta), 2)})</span>`;
}

function formatBusinessYoYGrowth(current, previous) {
  if (
    current === undefined ||
    current === null ||
    Number.isNaN(current) ||
    previous === undefined ||
    previous === null ||
    Number.isNaN(previous) ||
    previous === 0
  ) {
    return "";
  }

  const growth = ((current - previous) / previous) * 100;
  if (growth > 0) {
    return `<span class="startup-delta is-up">(전년동월대비 ▲ ${formatNumber(Math.abs(growth), 1)}%)</span>`;
  }
  if (growth < 0) {
    return `<span class="startup-delta is-down">(전년동월대비 ▼ ${formatNumber(Math.abs(growth), 1)}%)</span>`;
  }
  return `<span class="startup-delta">(전년동월대비 0.0%)</span>`;
}

function formatBusinessPeriod(key) {
  if (!/^\d{6}$/.test(String(key || ""))) {
    return String(key || "-");
  }

  return `${String(key).slice(0, 4)}년 ${Number(String(key).slice(4, 6))}월`;
}

function formatBusinessAxisLabel(key, isLatest = false) {
  const stringKey = String(key || "");
  if (!/^\d{6}$/.test(stringKey)) {
    return stringKey || "";
  }

  const year = stringKey.slice(2, 4);
  const month = Number(stringKey.slice(4, 6));

  if (isLatest) {
    return `${year}.${month}월`;
  }

  if (month === 1) {
    return year;
  }

  return "";
}

function formatBusinessPointCaption(key) {
  const stringKey = String(key || "");
  if (!/^\d{6}$/.test(stringKey)) {
    return "";
  }

  return `(${Number(stringKey.slice(2, 4))}.${Number(stringKey.slice(4, 6))}월)`;
}

function formatQuarterPeriod(key) {
  const stringKey = String(key || "");
  if (!/^\d{6}$/.test(stringKey)) {
    return stringKey || "-";
  }

  return `${stringKey.slice(0, 4)}년 ${Number(stringKey.slice(4, 6))}분기`;
}

function formatQuarterCardPeriod(key) {
  const stringKey = String(key || "");
  if (!/^\d{6}$/.test(stringKey)) {
    return stringKey || "-";
  }

  return `${stringKey.slice(0, 4)}.Q${Number(stringKey.slice(4, 6))}`;
}

function formatQuarterAxisLabel(key, isLatest = false) {
  const stringKey = String(key || "");
  if (!/^\d{6}$/.test(stringKey)) {
    return stringKey || "";
  }

  const year = stringKey.slice(2, 4);
  const quarter = Number(stringKey.slice(4, 6));
  if (isLatest) {
    return `${year}.Q${quarter}`;
  }

  if (quarter === 1) {
    return year;
  }

  return "";
}

function getYearSpanFromKeys(firstKey, lastKey) {
  const firstYear = Number(String(firstKey || "").slice(0, 4));
  const lastYear = Number(String(lastKey || "").slice(0, 4));
  if (!Number.isFinite(firstYear) || !Number.isFinite(lastYear)) {
    return 0;
  }
  return Math.max(0, lastYear - firstYear + 1);
}

function formatQuarterPointCaption(key) {
  const stringKey = String(key || "");
  if (!/^\d{6}$/.test(stringKey)) {
    return "";
  }

  return `(${Number(stringKey.slice(2, 4))}.Q${Number(stringKey.slice(4, 6))})`;
}

function buildAxisMarkup(axisEntries, baseY, labelY) {
  return axisEntries
    .map(
      ({ x, label }) => `
        <line class="startup-line-axis-tick" x1="${x}" y1="${baseY}" x2="${x}" y2="${baseY + 5}"></line>
        <text class="startup-line-axis-label" x="${x}" y="${labelY}" text-anchor="middle">${label}</text>
      `,
    )
    .join("");
}

function bindLineChartTooltips(scope = document) {
  scope.querySelectorAll(".startup-line-chart").forEach((chart) => {
    if (chart.dataset.tooltipBound === "true") {
      return;
    }

    const tooltip = chart.querySelector(".startup-line-tooltip");
    const svg = chart.querySelector(".startup-line-svg, .management-trend-svg");
    const hits = chart.querySelectorAll(".startup-line-hit");

    if (!tooltip || !svg || !hits.length) {
      return;
    }

    chart.dataset.tooltipBound = "true";

    const labelNode = tooltip.querySelector(".startup-line-tooltip-label");
    const valueNode = tooltip.querySelector(".startup-line-tooltip-value");

    const hideTooltip = () => {
      tooltip.hidden = true;
    };

    const showTooltip = (target) => {
      const cx = Number(target.getAttribute("cx"));
      const cy = Number(target.getAttribute("cy"));

      if (!Number.isFinite(cx) || !Number.isFinite(cy)) {
        hideTooltip();
        return;
      }

      if (labelNode) {
        labelNode.textContent = target.dataset.tooltipLabel || "";
      }
      if (valueNode) {
        valueNode.textContent = target.dataset.tooltipValue || "";
      }

      tooltip.hidden = false;

      const viewBox = svg.viewBox.baseVal;
      const scaleX = svg.clientWidth / (viewBox.width || 1);
      const scaleY = svg.clientHeight / (viewBox.height || 1);
      const rawLeft = cx * scaleX;
      const rawTop = cy * scaleY;
      const tooltipWidth = tooltip.offsetWidth || 120;
      const minLeft = tooltipWidth / 2 + 8;
      const maxLeft = Math.max(minLeft, chart.clientWidth - tooltipWidth / 2 - 8);
      const clampedLeft = Math.min(maxLeft, Math.max(minLeft, rawLeft));

      tooltip.style.left = `${clampedLeft}px`;
      tooltip.style.top = `${Math.max(22, rawTop - 10)}px`;
    };

    hits.forEach((hit) => {
      hit.addEventListener("pointerenter", () => showTooltip(hit));
      hit.addEventListener("pointermove", () => showTooltip(hit));
      hit.addEventListener("pointerleave", hideTooltip);
      hit.addEventListener("focus", () => showTooltip(hit));
      hit.addEventListener("blur", hideTooltip);
    });

    chart.addEventListener("pointerleave", hideTooltip);
  });
}

function formatProductionValue(value, unit = "") {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  const trimmedUnit = String(unit || "").trim();
  return trimmedUnit
    ? `${formatNumber(value, 1)}<span class="sme-value-unit">${trimmedUnit}</span>`
    : formatNumber(value, 1);
}

function formatProductionYoYGrowth(current, previous) {
  if (
    current === undefined ||
    current === null ||
    Number.isNaN(current) ||
    previous === undefined ||
    previous === null ||
    Number.isNaN(previous) ||
    previous === 0
  ) {
    return "";
  }

  const growth = ((current - previous) / previous) * 100;
  if (growth > 0) {
    return `<span class="startup-delta is-up">(전년동기대비 ▲ ${formatNumber(Math.abs(growth), 1)}%)</span>`;
  }
  if (growth < 0) {
    return `<span class="startup-delta is-down">(전년동기대비 ▼ ${formatNumber(Math.abs(growth), 1)}%)</span>`;
  }
  return `<span class="startup-delta">(전년동기대비 0.0%)</span>`;
}

function formatOperationRateDelta(current, previous) {
  if (
    current === undefined ||
    current === null ||
    Number.isNaN(current) ||
    previous === undefined ||
    previous === null ||
    Number.isNaN(previous) ||
    previous === 0
  ) {
    return "";
  }

  const growth = ((current - previous) / previous) * 100;
  if (growth > 0) {
    return `<span class="startup-delta is-up">(전년동월대비 ▲ ${formatNumber(Math.abs(growth), 1)}%)</span>`;
  }
  if (growth < 0) {
    return `<span class="startup-delta is-down">(전년동월대비 ▼ ${formatNumber(Math.abs(growth), 1)}%)</span>`;
  }
  return `<span class="startup-delta">(전년동월대비 0.0%)</span>`;
}

function formatRateDelta(current, previous) {
  if (
    current === undefined ||
    current === null ||
    previous === undefined ||
    previous === null
  ) {
    return "";
  }

  const delta = current - previous;
  const directionClass = delta > 0 ? " is-up" : delta < 0 ? " is-down" : "";
  return `<span class="startup-delta${directionClass}">(전년동월대비 ${delta > 0 ? "▲ " : delta < 0 ? "▼ " : ""}${formatNumber(Math.abs(delta), 2)}%p)</span>`;
}

function formatEokValue(value) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  return `${formatNumber(value, 0)}<span class="sme-value-unit">억원</span>`;
}

function formatInvestmentTrillionValue(value) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  return `${formatNumber(value / 10000, 1)}<span class="sme-value-unit">조원</span>`;
}

function formatCountValue(value) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  return `${formatNumber(value, 0)}<span class="sme-value-unit">개</span>`;
}

function formatDateKey(date) {
  if (!date) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function serializeSeriesWithDate(items) {
  return (items || []).map((item) => ({
    ...item,
    date: formatDateKey(item?.date),
  }));
}

function reviveSeriesWithDate(items) {
  return (items || [])
    .map((item) => ({
      ...item,
      date: item?.date ? new Date(item.date) : null,
    }))
    .filter((item) => item.date && !Number.isNaN(item.date.getTime()));
}

function readProcessedSnapshot(cacheKey) {
  try {
    const raw = window.localStorage.getItem(cacheKey);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function writeProcessedSnapshot(cacheKey, payload) {
  try {
    window.localStorage.setItem(cacheKey, JSON.stringify(payload));
  } catch (error) {
    // Ignore local cache errors.
  }
}

function formatInvestmentPeriod(date) {
  if (!date) {
    return "-";
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const suffixMap = {
    3: "1분기",
    6: "2분기",
    9: "3분기",
    12: "연간",
  };

  return `${year}년 ${suffixMap[month] || `${month}월`}`;
}

function formatInvestmentDelta(current, previous, type) {
  if (
    current === undefined ||
    current === null ||
    previous === undefined ||
    previous === null ||
    previous === 0
  ) {
    return "";
  }

  const growth = ((current - previous) / previous) * 100;
  const delta = current - previous;
  const directionClass = growth > 0 ? " is-up" : growth < 0 ? " is-down" : "";
  const directionMark = growth > 0 ? "▲ " : growth < 0 ? "▼ " : "";
  const deltaText =
    type === "count"
      ? `${delta > 0 ? "▲ " : delta < 0 ? "▼ " : ""}${formatNumber(Math.abs(delta), 0)}개`
      : `${delta > 0 ? "▲ " : delta < 0 ? "▼ " : ""}${formatNumber(Math.abs(delta) / 10000, 1)}조원`;

  return `
    <span class="startup-delta${directionClass}">
      <span class="investment-delta-line">전년대비 ${directionMark}${formatNumber(Math.abs(growth), 1)}%</span>
      <span class="investment-delta-line">${deltaText}</span>
    </span>
  `;
}

function formatInvestmentShare(value, total) {
  if (
    value === undefined ||
    value === null ||
    Number.isNaN(value) ||
    total === undefined ||
    total === null ||
    Number.isNaN(total) ||
    total === 0
  ) {
    return "";
  }

  return `<div class="startup-subvalue">(비중: <span class="startup-share-value">${formatNumber((value / total) * 100, 1)}%</span>)</div>`;
}

function formatLoanYoYGrowth(current, previous) {
  if (
    current === undefined ||
    current === null ||
    previous === undefined ||
    previous === null ||
    previous === 0
  ) {
    return "";
  }

  const growth = ((current - previous) / previous) * 100;
  if (growth > 0) {
    return `<span class="startup-delta is-up">(전년동월대비 ▲ ${formatNumber(Math.abs(growth), 1)}%)</span>`;
  }
  if (growth < 0) {
    return `<span class="startup-delta is-down">(전년동월대비 ▼ ${formatNumber(Math.abs(growth), 1)}%)</span>`;
  }
  return `<span class="startup-delta">(전년동월대비 0.0%)</span>`;
}

function formatLoanYoYDelta(current, previous) {
  if (
    current === undefined ||
    current === null ||
    previous === undefined ||
    previous === null
  ) {
    return "";
  }

  const delta = current - previous;
  const directionClass = delta > 0 ? " is-up" : delta < 0 ? " is-down" : "";
  return `<span class="startup-delta${directionClass}">(증감 ${delta > 0 ? "▲ " : delta < 0 ? "▼ " : ""}${formatNumber(Math.abs(delta), 1)}조원)</span>`;
}

function formatLoanYoYGrowthWithDelta(current, previous) {
  if (
    current === undefined ||
    current === null ||
    previous === undefined ||
    previous === null ||
    previous === 0
  ) {
    return "";
  }

  const growth = ((current - previous) / previous) * 100;
  const delta = current - previous;
  const directionClass = growth > 0 ? " is-up" : growth < 0 ? " is-down" : "";
  const directionMark = growth > 0 ? "▲ " : growth < 0 ? "▼ " : "";

  return `<span class="startup-delta${directionClass}">(전년동월대비 ${directionMark}${formatNumber(Math.abs(growth), 1)}%, ${delta > 0 ? "▲ " : delta < 0 ? "▼ " : ""}${formatNumber(Math.abs(delta), 1)}조원)</span>`;
}

function parseLoanRows(rows) {
  return rows
    .map((row) => {
      const pointDate = parseSheetDate(row["시점"] ?? row[""] ?? row.A);
      const balance = parseNumeric(row["은행권 중기대출잔액"]);
      const netIncrease = parseNumeric(row["은행권 중기대출 순증"]);

      if (!pointDate || (Number.isNaN(balance) && Number.isNaN(netIncrease))) {
        return null;
      }

      return {
        date: pointDate,
        year: pointDate.getFullYear(),
        month: pointDate.getMonth() + 1,
        balance,
        netIncrease,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.date - b.date);
}

function parseDelinquencyRows(rows) {
  return rows
    .map((row) => {
      const pointDate = parseSheetDate(row["시점"] ?? row.A);
      const largeCompanyRate = parseNumeric(row["대기업 연체율"]);
      const smeRate = parseNumeric(row["중소기업 연체율"]);
      const corporateRate = parseNumeric(row["중소법인 연체율"]);
      const solePropRate = parseNumeric(row["개인사업자 연체율"]);

      if (
        !pointDate ||
        [largeCompanyRate, smeRate, corporateRate, solePropRate].every((value) => Number.isNaN(value))
      ) {
        return null;
      }

      return {
        date: pointDate,
        year: pointDate.getFullYear(),
        month: pointDate.getMonth() + 1,
        largeCompanyRate,
        smeRate,
        corporateRate,
        solePropRate,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.date - b.date);
}

function parseInvestmentRows(rows, valueKeys) {
  return rows
    .map((row) => {
      const pointDate = parseSheetDate(row["시점"] ?? row.A);
      if (!pointDate) {
        return null;
      }

      const parsed = {
        date: pointDate,
        key: formatDateKey(pointDate),
        year: pointDate.getFullYear(),
        month: pointDate.getMonth() + 1,
      };

      valueKeys.forEach((key) => {
        parsed[key] = parseNumeric(row[key]);
      });

      return parsed;
    })
    .filter(Boolean)
    .sort((a, b) => a.date - b.date);
}

function readCachedLoanData() {
  const payload = readProcessedSnapshot(LOAN_DATA_CACHE_KEY);
  if (!payload) {
    return null;
  }

  const nextLoanSeries = reviveSeriesWithDate(payload.loanSeries);
  const nextDelinquencySeries = reviveSeriesWithDate(payload.delinquencySeries);
  const nextLoanYears = Array.isArray(payload.loanYears) ? payload.loanYears : [];

  if (!nextLoanSeries.length && !nextDelinquencySeries.length) {
    return null;
  }

  return {
    loanSeries: nextLoanSeries,
    delinquencySeries: nextDelinquencySeries,
    loanYears: nextLoanYears,
  };
}

async function loadLoanData() {
  try {
    const payload = await loadLoanJsonPayload();
    const loanRows = readStaticRows(payload, "loanRows", "대출 JSON 데이터 형식을 확인해 주세요.");
    const delinquencyRows = readStaticRows(payload, "delinquencyRows", "대출 JSON 데이터 형식을 확인해 주세요.");
    const nextLoanSeries = parseLoanRows(loanRows);
    const nextDelinquencySeries = parseDelinquencyRows(delinquencyRows);
    const nextLoanYears = [...new Set([...nextLoanSeries.map((item) => item.year), ...nextDelinquencySeries.map((item) => item.year)])].sort((a, b) => a - b);
    return {
      nextLoanSeries,
      nextDelinquencySeries,
      nextLoanYears,
    };
  } catch (error) {
    const cached = readCachedLoanData();
    if (cached) {
      return {
        nextLoanSeries: cached.loanSeries,
        nextDelinquencySeries: cached.delinquencySeries,
        nextLoanYears: cached.loanYears,
      };
    }
    throw error;
  }
}

function writeCachedLoanData() {
  writeProcessedSnapshot(LOAN_DATA_CACHE_KEY, {
    loanSeries: serializeSeriesWithDate(loanSeries),
    delinquencySeries: serializeSeriesWithDate(delinquencySeries),
    loanYears,
  });
}

function readCachedInvestmentData() {
  const payload = readProcessedSnapshot(INVESTMENT_DATA_CACHE_KEY);
  if (!payload) {
    return null;
  }

  const nextInvestmentSeries = reviveSeriesWithDate(payload.investmentSeries);
  const nextInvestmentStageSeries = reviveSeriesWithDate(payload.investmentStageSeries);
  const nextInvestmentSectorSeries = reviveSeriesWithDate(payload.investmentSectorSeries);
  const nextInvestmentSourceSeries = reviveSeriesWithDate(payload.investmentSourceSeries);
  const nextInvestmentDates = Array.isArray(payload.investmentDates) ? payload.investmentDates : [];

  if (
    !nextInvestmentSeries.length &&
    !nextInvestmentStageSeries.length &&
    !nextInvestmentSectorSeries.length &&
    !nextInvestmentSourceSeries.length
  ) {
    return null;
  }

  return {
    investmentSeries: nextInvestmentSeries,
    investmentStageSeries: nextInvestmentStageSeries,
    investmentSectorSeries: nextInvestmentSectorSeries,
    investmentSourceSeries: nextInvestmentSourceSeries,
    investmentDates: nextInvestmentDates,
  };
}

async function loadInvestmentData() {
  try {
    const payload = await loadInvestmentJsonPayload();
    const investmentSheetRows = readStaticRows(payload, "investmentRows", "투자 JSON 데이터 형식을 확인해 주세요.");
    const investmentStageSheetRows = readStaticRows(payload, "investmentStageRows", "투자 JSON 데이터 형식을 확인해 주세요.");
    const investmentSectorSheetRows = readStaticRows(payload, "investmentSectorRows", "투자 JSON 데이터 형식을 확인해 주세요.");
    const investmentSourceSheetRows = readStaticRows(payload, "investmentSourceRows", "투자 JSON 데이터 형식을 확인해 주세요.");
    const investmentSeries = parseInvestmentRows(investmentSheetRows, [
      "신규 벤처투자금액",
      "피투자기업 수",
      "기업당 투자금액",
      "벤처펀드 결정금액",
      "벤처펀드 결성 수",
    ]);
    const investmentStageSeries = parseInvestmentRows(investmentStageSheetRows, [
      "초기 투자(3년 이내)",
      "중기 투자(3~7년 이내)",
      "후기 투자(7년 초과)",
    ]);
    const investmentSectorSeries = parseInvestmentRows(investmentSectorSheetRows, [
      "ICT서비스",
      "바이오·의료",
      "전기·기계·장비",
      "ICT제조",
      "유통·서비스",
      "화학·소재",
      "영상·공연·음반",
      "게임",
      "기타",
    ]);
    const investmentSourceSeries = parseInvestmentRows(investmentSourceSheetRows, [
      "정책금융",
      "모태펀드",
      "성장금융",
      "산업은행",
      "기타 정책금융",
      "민간부문",
      "개인",
      "일반법인",
      "금융기관(산은 제외)",
      "연기금 및 공제회",
      "VC",
      "기타단체 및 외국인",
    ]);
    const investmentDates = investmentSeries.map((item) => item.key);
    return {
      investmentSeries,
      investmentStageSeries,
      investmentSectorSeries,
      investmentSourceSeries,
      investmentDates,
    };
  } catch (error) {
    const cached = readCachedInvestmentData();
    if (cached) {
      return cached;
    }
    throw error;
  }
}

function writeCachedInvestmentData() {
  writeProcessedSnapshot(INVESTMENT_DATA_CACHE_KEY, {
    investmentSeries: serializeSeriesWithDate(investmentSeries),
    investmentStageSeries: serializeSeriesWithDate(investmentStageSeries),
    investmentSectorSeries: serializeSeriesWithDate(investmentSectorSeries),
    investmentSourceSeries: serializeSeriesWithDate(investmentSourceSeries),
    investmentDates,
  });
}

function getLoanMonthKey(item) {
  if (!item?.date) {
    return "";
  }

  return `${item.date.getFullYear()}${String(item.date.getMonth() + 1).padStart(2, "0")}`;
}

function getLoanSelectedYear() {
  return Number(loanYears[loanYears.length - 1] || 0);
}

function getLoanLatestPointForYear(targetYear) {
  const yearRows = loanSeries.filter((item) => item.year === targetYear);
  if (!yearRows.length) {
    return null;
  }

  return yearRows[yearRows.length - 1];
}

function getDelinquencyLatestPointForYear(targetYear) {
  const yearRows = delinquencySeries.filter((item) => item.year === targetYear);
  if (!yearRows.length) {
    return null;
  }

  return yearRows[yearRows.length - 1];
}

function getLoanBalancePointForYear(targetYear) {
  const yearRows = loanSeries.filter((item) => item.year === targetYear);
  if (!yearRows.length) {
    return null;
  }

  const decemberPoint = yearRows.find((item) => item.month === 12);
  return decemberPoint || yearRows[yearRows.length - 1];
}

function getRecentLoanBalancePoints() {
  const selectedYear = getLoanSelectedYear();
  const years = loanYears.filter((year) => year <= selectedYear).slice(-3);
  return years
    .map((year) => getLoanBalancePointForYear(year))
    .filter(Boolean);
}

function getFilteredLoanSeries() {
  return loanSeries.filter((item) => {
    const key = getLoanMonthKey(item);
    return (!loanRangeStart || key >= loanRangeStart) && (!loanRangeEnd || key <= loanRangeEnd);
  });
}

function getFilteredDelinquencyMonthlySeries() {
  return delinquencySeries.filter((item) => {
    const key = getLoanMonthKey(item);
    return (!delinquencyRangeStart || key >= delinquencyRangeStart) && (!delinquencyRangeEnd || key <= delinquencyRangeEnd);
  });
}

function getRecentLoanNetIncreasePoints() {
  const selectedYear = getLoanSelectedYear();
  const decemberPoints = loanSeries
    .filter((item) => item.year <= selectedYear && item.month === 12)
    .sort((a, b) => a.year - b.year);

  return decemberPoints.slice(-3);
}

function getRecentLoanNetIncreaseLatestMonthPoints() {
  const selectedYear = getLoanSelectedYear();
  const selectedYearLatestPoint = getLoanLatestPointForYear(selectedYear);

  if (!selectedYearLatestPoint || selectedYearLatestPoint.month === 12) {
    return [];
  }

  return loanSeries
    .filter((item) => item.year <= selectedYear && item.month === selectedYearLatestPoint.month)
    .sort((a, b) => a.year - b.year)
    .slice(-3);
}

function getLoanAnnualNetIncreasePointsByLatestMonth() {
  const selectedYear = getLoanSelectedYear();
  const selectedYearLatestPoint = getLoanLatestPointForYear(selectedYear);
  if (!selectedYearLatestPoint) {
    return [];
  }

  return loanYears
    .filter((year) => year <= selectedYear)
    .map((year) => {
      const sameMonthPoint = loanSeries.find(
        (item) => item.year === year && item.month === selectedYearLatestPoint.month,
      );
      return sameMonthPoint || null;
    })
    .filter(Boolean);
}

function getLoanAnnualNetIncreasePointsByYearEnd() {
  return loanYears
    .map((year) => {
      const yearEndPoint = loanSeries.find((item) => item.year === year && item.month === 12);
      return yearEndPoint || null;
    })
    .filter(Boolean);
}

function getLoanAnnualChartYearKeys() {
  const yearSet = new Set([
    ...getLoanAnnualNetIncreasePointsByYearEnd().map((item) => String(item.year)),
    ...getLoanAnnualNetIncreasePointsByLatestMonth().map((item) => String(item.year)),
  ]);

  return Array.from(yearSet).sort((a, b) => Number(a) - Number(b));
}

function getFilteredLoanAnnualSeries(points) {
  return points.filter((item) => {
    const key = String(item.year);
    return (!loanYearRangeStart || key >= loanYearRangeStart) && (!loanYearRangeEnd || key <= loanYearRangeEnd);
  });
}

function getPreviousYearSameMonthLoanPoint(referenceDate) {
  if (!referenceDate) {
    return null;
  }

  return (
    loanSeries.find(
      (item) =>
        item.year === referenceDate.getFullYear() - 1 &&
        item.month === referenceDate.getMonth() + 1,
    ) || null
  );
}

function getPreviousYearSameMonthDelinquencyPoint(referenceDate) {
  if (!referenceDate) {
    return null;
  }

  return (
    delinquencySeries.find(
      (item) =>
        item.year === referenceDate.getFullYear() - 1 &&
        item.month === referenceDate.getMonth() + 1,
    ) || null
  );
}

function getFilteredDelinquencySeries(windowSize = 5) {
  const selectedYear = getLoanSelectedYear();
  const latestPoint = getDelinquencyLatestPointForYear(selectedYear);
  if (!latestPoint) {
    return [];
  }

  const years = loanYears.filter((year) => year <= selectedYear).slice(-windowSize);

  return years
    .map((year) => {
      const sameMonthPoint = delinquencySeries.find(
        (item) => item.year === year && item.month === latestPoint.month,
      );
      return sameMonthPoint || getDelinquencyLatestPointForYear(year);
    })
    .filter(Boolean);
}

function initLoanRangeControls() {
  const loanKeys = loanSeries.map((item) => getLoanMonthKey(item)).filter(Boolean);
  const normalizedLoan = syncRangeSliderPair({
    startId: "loan-range-start",
    endId: "loan-range-end",
    labelId: "loan-range-label",
    trackId: "loan-range-track",
    startTextId: "loan-range-start-text",
    endTextId: "loan-range-end-text",
    keys: loanKeys,
    startValue: loanRangeStart,
    endValue: loanRangeEnd,
    defaultCount: 36,
    formatLabel: formatBusinessPeriod,
    labelPrefix: "잔액 그래프 표시 기간",
    onChange: (start, end) => {
      loanRangeStart = start;
      loanRangeEnd = end;
      const normalized = normalizeRangeSelection(loanKeys, loanRangeStart, loanRangeEnd, 36);
      loanRangeStart = normalized.start;
      loanRangeEnd = normalized.end;
      initLoanRangeControls();
      renderLoanSummary();
      renderLoanCharts();
    },
  });
  loanRangeStart = normalizedLoan.start;
  loanRangeEnd = normalizedLoan.end;

  const loanYearKeys = getLoanAnnualChartYearKeys();
  const normalizedLoanYear = syncRangeSliderPair({
    startId: "loan-year-range-start",
    endId: "loan-year-range-end",
    labelId: "loan-year-range-label",
    trackId: "loan-year-range-track",
    startTextId: "loan-year-range-start-text",
    endTextId: "loan-year-range-end-text",
    keys: loanYearKeys,
    startValue: loanYearRangeStart,
    endValue: loanYearRangeEnd,
    defaultCount: Math.max(loanYearKeys.length, 1),
    formatLabel: formatYearLabel,
    labelPrefix: "순증 그래프 표시 기간",
    onChange: (start, end) => {
      loanYearRangeStart = start;
      loanYearRangeEnd = end;
      const normalized = normalizeRangeSelection(loanYearKeys, loanYearRangeStart, loanYearRangeEnd, loanYearKeys.length);
      loanYearRangeStart = normalized.start;
      loanYearRangeEnd = normalized.end;
      initLoanRangeControls();
      renderLoanCharts();
    },
  });
  loanYearRangeStart = normalizedLoanYear.start;
  loanYearRangeEnd = normalizedLoanYear.end;

  const delinquencyKeys = delinquencySeries.map((item) => getLoanMonthKey(item)).filter(Boolean);
  const normalizedDelinquency = syncRangeSliderPair({
    startId: "delinquency-range-start",
    endId: "delinquency-range-end",
    labelId: "delinquency-range-label",
    trackId: "delinquency-range-track",
    startTextId: "delinquency-range-start-text",
    endTextId: "delinquency-range-end-text",
    keys: delinquencyKeys,
    startValue: delinquencyRangeStart,
    endValue: delinquencyRangeEnd,
    defaultCount: 36,
    formatLabel: formatBusinessPeriod,
    onChange: (start, end) => {
      delinquencyRangeStart = start;
      delinquencyRangeEnd = end;
      const normalized = normalizeRangeSelection(delinquencyKeys, delinquencyRangeStart, delinquencyRangeEnd, 36);
      delinquencyRangeStart = normalized.start;
      delinquencyRangeEnd = normalized.end;
      initLoanRangeControls();
      renderLoanSummary();
      renderLoanCharts();
    },
  });
  delinquencyRangeStart = normalizedDelinquency.start;
  delinquencyRangeEnd = normalizedDelinquency.end;
}

function getInvestmentPeriodConfig(period = investmentSelectedPeriod) {
  return INVESTMENT_PERIOD_OPTIONS.find((item) => item.value === period) || INVESTMENT_PERIOD_OPTIONS[INVESTMENT_PERIOD_OPTIONS.length - 1];
}

function getInvestmentAvailableYears(period = investmentSelectedPeriod) {
  const { month } = getInvestmentPeriodConfig(period);
  return [...new Set(
    investmentSeries
      .filter((item) => item.month === month)
      .map((item) => item.year),
  )].sort((a, b) => a - b);
}

function getInvestmentAvailableYearsForSeries(series, period) {
  const { month } = getInvestmentPeriodConfig(period);
  return [...new Set(
    series
      .filter((item) => item.month === month)
      .map((item) => item.year),
  )].sort((a, b) => a - b);
}

function syncInvestmentSelection() {
  const hasSelectedPeriod = INVESTMENT_PERIOD_OPTIONS.some((item) => item.value === investmentSelectedPeriod);
  if (!hasSelectedPeriod) {
    investmentSelectedPeriod = "annual";
  }

  const availableYears = getInvestmentAvailableYears(investmentSelectedPeriod);
  if (!availableYears.length) {
    investmentYearRangeStart = "";
    investmentYearRangeEnd = "";
    return availableYears;
  }

  const normalized = normalizeRangeSelection(
    availableYears.map(String),
    investmentYearRangeStart,
    investmentYearRangeEnd,
    Math.max(availableYears.length, 1),
  );
  investmentYearRangeStart = normalized.start;
  investmentYearRangeEnd = normalized.end;

  return availableYears;
}

function getInvestmentSelectedKey() {
  syncInvestmentSelection();
  const { month } = getInvestmentPeriodConfig();
  const targetYear = Number(investmentYearRangeEnd);
  return investmentSeries.find((item) => item.year === targetYear && item.month === month)?.key || "";
}

function getInvestmentRecord(series, key = getInvestmentSelectedKey()) {
  return series.find((item) => item.key === key) || null;
}

function getPreviousYearInvestmentRecord(series, key = getInvestmentSelectedKey()) {
  const current = getInvestmentRecord(series, key);
  if (!current) {
    return null;
  }

  return (
    series.find(
      (item) =>
        item.year === current.year - 1 &&
        item.month === current.month,
    ) || null
  );
}

function formatInvestmentPointLabel(key = getInvestmentSelectedKey()) {
  const current = getInvestmentRecord(investmentSeries, key);
  return current?.date ? formatInvestmentPeriod(current.date) : "-";
}

function getInvestmentTrendSeries(series) {
  const { month } = getInvestmentPeriodConfig();
  return series.filter((item) => {
    if (item.month !== month) {
      return false;
    }
    const yearKey = String(item.year);
    if (investmentYearRangeStart && yearKey < investmentYearRangeStart) {
      return false;
    }
    if (investmentYearRangeEnd && yearKey > investmentYearRangeEnd) {
      return false;
    }
    return true;
  });
}

function getInvestmentRecordByPeriodAndYear(series, period, year) {
  const { month } = getInvestmentPeriodConfig(period);
  return series.find((item) => item.year === Number(year) && item.month === month) || null;
}

function getInvestmentBreakdownAvailableYears(period = investmentBreakdownSelectedPeriod) {
  const { month } = getInvestmentPeriodConfig(period);
  return [...new Set(
    investmentStageSeries
      .filter((item) => item.month === month)
      .map((item) => item.year),
  )].sort((a, b) => a - b);
}

function syncInvestmentBreakdownSelection() {
  const hasSelectedPeriod = INVESTMENT_PERIOD_OPTIONS.some((item) => item.value === investmentBreakdownSelectedPeriod);
  if (!hasSelectedPeriod) {
    investmentBreakdownSelectedPeriod = "annual";
  }

  const availableYears = getInvestmentBreakdownAvailableYears(investmentBreakdownSelectedPeriod);
  if (!availableYears.length) {
    investmentBreakdownRangeStart = "";
    investmentBreakdownRangeEnd = "";
    return availableYears;
  }

  const normalized = normalizeRangeSelection(
    availableYears.map(String),
    investmentBreakdownRangeStart,
    investmentBreakdownRangeEnd,
    Math.max(availableYears.length, 1),
  );
  investmentBreakdownRangeStart = normalized.start;
  investmentBreakdownRangeEnd = normalized.end;
  return availableYears;
}

function syncInvestmentSourceSelection() {
  const hasSelectedPeriod = INVESTMENT_PERIOD_OPTIONS.some((item) => item.value === investmentSourceSelectedPeriod);
  if (!hasSelectedPeriod) {
    investmentSourceSelectedPeriod = "annual";
  }

  const availableYears = getInvestmentAvailableYearsForSeries(investmentSourceSeries, investmentSourceSelectedPeriod);
  if (!availableYears.length) {
    investmentSourceRangeStart = "";
    investmentSourceRangeEnd = "";
    return availableYears;
  }

  const normalized = normalizeRangeSelection(
    availableYears.map(String),
    investmentSourceRangeStart,
    investmentSourceRangeEnd,
    Math.max(availableYears.length, 1),
  );
  investmentSourceRangeStart = normalized.start;
  investmentSourceRangeEnd = normalized.end;
  return availableYears;
}

function getInvestmentBreakdownTrendSeries(series) {
  const { month } = getInvestmentPeriodConfig(investmentBreakdownSelectedPeriod);
  return series.filter((item) => {
    if (item.month !== month) {
      return false;
    }
    const yearKey = String(item.year);
    if (investmentBreakdownRangeStart && yearKey < investmentBreakdownRangeStart) {
      return false;
    }
    if (investmentBreakdownRangeEnd && yearKey > investmentBreakdownRangeEnd) {
      return false;
    }
    return true;
  });
}

function getInvestmentSourceTrendSeries(series) {
  const { month } = getInvestmentPeriodConfig(investmentSourceSelectedPeriod);
  return series.filter((item) => {
    if (item.month !== month) {
      return false;
    }
    const yearKey = String(item.year);
    if (investmentSourceRangeStart && yearKey < investmentSourceRangeStart) {
      return false;
    }
    if (investmentSourceRangeEnd && yearKey > investmentSourceRangeEnd) {
      return false;
    }
    return true;
  });
}

function getInvestmentSectorNames() {
  const latest = [...investmentSectorSeries].reverse().find((item) => item);
  if (!latest) {
    return [];
  }
  return [
    "ICT서비스",
    "바이오·의료",
    "전기·기계·장비",
    "ICT제조",
    "유통·서비스",
    "화학·소재",
    "영상·공연·음반",
    "게임",
    "기타",
  ].filter((name) => latest[name] !== undefined && latest[name] !== null && !Number.isNaN(latest[name]));
}

function parseExportRows(rows, valueKeys) {
  return rows
    .map((row) => {
      const pointDate = parseExportPoint(row["시점"] ?? row.A);
      if (!pointDate) {
        return null;
      }

      const parsed = {
        date: pointDate,
        key: formatDateKey(pointDate),
        year: pointDate.getFullYear(),
        month: pointDate.getMonth() + 1,
      };

      valueKeys.forEach((key) => {
        parsed[key] = parseNumeric(row[key]);
      });

      return parsed;
    })
    .filter(Boolean)
    .sort((a, b) => a.date - b.date);
}

function parseExportCountryRows(rows, valueKeys) {
  const series = parseExportRows(rows, valueKeys);
  const byKey = new Map();

  series.forEach((item) => {
    const currentTotal = valueKeys.reduce((sum, key) => sum + (item[key] || 0), 0);
    const existing = byKey.get(item.key);
    if (!existing) {
      byKey.set(item.key, item);
      return;
    }

    const existingTotal = valueKeys.reduce((sum, key) => sum + (existing[key] || 0), 0);
    if (currentTotal < existingTotal) {
      byKey.set(item.key, item);
    }
  });

  return Array.from(byKey.values()).sort((a, b) => a.date - b.date);
}

function readExportSnapshot(cacheKey) {
  try {
    const raw = window.localStorage.getItem(cacheKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function writeExportSnapshot(cacheKey, rows) {
  try {
    window.localStorage.setItem(cacheKey, JSON.stringify(rows));
  } catch (error) {
    // Ignore local cache errors.
  }
}

async function loadExportApi(url, cacheKey) {
  try {
    const payload = await loadExportJsonPayload();
    const rawRows = readStaticRows(
      payload,
      cacheKey === EXPORT_SUMMARY_CACHE_KEY ? "summaryRows" : "countryRows",
      "수출 JSON 데이터 형식을 확인해 주세요.",
    );
    writeExportSnapshot(cacheKey, rawRows);
    return rawRows;
  } catch (error) {
    const cachedRows = readExportSnapshot(cacheKey);
    if (cachedRows.length) {
      return cachedRows;
    }

    throw error;
  }
}

function parseExportSummaryApiRows(rows) {
  const byYear = {};

  rows.forEach((row) => {
    const year = String(row?.PRD_DE || "").trim();
    const companyType = String(row?.C2_NM || "").trim();
    const itemName = String(row?.ITM_NM || "").trim();
    const value = parseNumeric(row?.DT);

    if (!/^\d{4}$/.test(year) || !companyType || Number.isNaN(value)) {
      return;
    }

    if (!byYear[year]) {
      byYear[year] = {
        date: new Date(Number(year), 0, 1),
        key: year,
        year: Number(year),
        month: 1,
      };
    }

    if (itemName === "기업수") {
      if (companyType === "계") byYear[year]["전체 기업 수"] = value;
      if (companyType === "중소기업") byYear[year]["중소기업 기업 수"] = value;
      if (companyType === "대기업") byYear[year]["대기업 기업 수"] = value;
      if (companyType === "중견기업") byYear[year]["중견기업 기업 수"] = value;
    }

    if (itemName === "교역액") {
      if (companyType === "계") byYear[year]["전체 수출금액"] = value;
      if (companyType === "중소기업") byYear[year]["중소기업 수출금액"] = value;
      if (companyType === "대기업") byYear[year]["대기업 수출금액"] = value;
      if (companyType === "중견기업") byYear[year]["중견기업 수출금액"] = value;
    }
  });

  return Object.values(byYear).sort((a, b) => a.year - b.year);
}

function parseExportCountryApiRows(rows) {
  const byYear = {};

  rows.forEach((row) => {
    const year = String(row?.PRD_DE || "").trim();
    const country = String(row?.C2_NM || "").trim();
    const companyType = String(row?.C3_NM || "").trim();
    const value = parseNumeric(row?.DT);

    if (!/^\d{4}$/.test(year) || !country || Number.isNaN(value) || (companyType && companyType !== "중소기업")) {
      return;
    }

    if (!byYear[year]) {
      byYear[year] = {
        date: new Date(Number(year), 0, 1),
        key: year,
        year: Number(year),
        month: 1,
      };
    }

    byYear[year][`${country} 수출금액`] = value;
  });

  return Object.values(byYear).sort((a, b) => a.year - b.year);
}

async function loadExportData() {
  const [summaryRows, countryRows] = await Promise.all([
    loadExportApi(EXPORT_SUMMARY_API_URL, EXPORT_SUMMARY_CACHE_KEY),
    loadExportApi(EXPORT_COUNTRY_API_URL, EXPORT_COUNTRY_CACHE_KEY),
  ]);

  return {
    series: parseExportSummaryApiRows(summaryRows),
    countrySeries: parseExportCountryApiRows(countryRows),
  };
}

function readCachedExportData() {
  const summaryRows = readExportSnapshot(EXPORT_SUMMARY_CACHE_KEY);
  const countryRows = readExportSnapshot(EXPORT_COUNTRY_CACHE_KEY);

  if (!summaryRows.length && !countryRows.length) {
    return null;
  }

  return {
    series: parseExportSummaryApiRows(summaryRows),
    countrySeries: parseExportCountryApiRows(countryRows),
  };
}

function parseExportPoint(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    const year = Math.trunc(value);
    if (year >= 1900 && year <= 3000) {
      return new Date(year, 0, 1);
    }
  }

  const stringValue = String(value || "").trim().replace(/\s*p\)\s*$/i, "");
  const yearMatch = stringValue.match(/^(\d{4})$/);
  if (yearMatch) {
    return new Date(Number(yearMatch[1]), 0, 1);
  }

  const quarterMatch = stringValue.match(/^(\d{4})\s*[.\-\/]\s*([1-4])\s*\/\s*4$/);
  if (quarterMatch) {
    const year = Number(quarterMatch[1]);
    const quarter = Number(quarterMatch[2]);
    const monthMap = { 1: 3, 2: 6, 3: 9, 4: 12 };
    return new Date(year, monthMap[quarter] - 1, 1);
  }

  return parseSheetDate(value);
}

function formatExportPeriod(date) {
  if (!date) {
    return "-";
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  if (month === 1 && day === 1) {
    return `${year}`;
  }
  const suffixMap = {
    3: "1분기",
    6: "2분기",
    9: "3분기",
    12: "4분기",
  };

  return `${year}년 ${suffixMap[month] || `${month}월`}`;
}

function getExportSelectedKey() {
  const select = document.getElementById("export-date-select");
  return select?.value || exportDates[exportDates.length - 1] || "";
}

function getExportRecord(key = getExportSelectedKey()) {
  return exportSeries.find((item) => item.key === key) || null;
}

function getExportCountryRecord(key = getExportSelectedKey()) {
  return exportCountrySeries.find((item) => item.key === key) || null;
}

function getPreviousYearExportRecord(series, key = getExportSelectedKey()) {
  const current = series.find((item) => item.key === key) || null;
  if (!current) {
    return null;
  }

  return (
    series.find(
      (item) =>
        item.year === current.year - 1 &&
        item.month === current.month,
    ) || null
  );
}

function formatExportCompanyCount(value) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  return `${formatNumber(value, 0)}<span class="sme-value-unit">개사</span>`;
}

function formatExportAmount(value) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }

  return `${formatNumber(value / 100000, 1)}<span class="sme-value-unit">억달러</span>`;
}

function getRecentExportSeries(series, windowSize = 3) {
  const selectedKey = getExportSelectedKey();
  const current = series.find((item) => item.key === selectedKey) || null;
  if (!current) {
    return [];
  }

  return series
    .filter((item) => item.month === current.month && item.year <= current.year)
    .slice(-windowSize);
}

function getExportChartSeries(series = exportSeries) {
  if (!series.length) {
    return [];
  }
  return filterSeriesByRange(series, exportRangeStart, exportRangeEnd);
}

function renderExportBarChart({ title, points, key, type = "amount", colorValue }) {
  if (!points.length) {
    return "";
  }

  const values = points.map((item) => item[key] ?? 0);
  const maxValue = Math.max(...values, 1);

  return `
    <article class="startup-chart-card export-country-pie">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="startup-bars" style="--bar-count:${points.length};">
        ${points
          .map((item) => {
            const value = item[key] ?? 0;
            const barHeight = Math.max(8, Math.round((value / maxValue) * 120));
            const valueText = type === "count" ? formatExportCompanyCount(value) : formatExportAmount(value);
            return `
              <div class="startup-bar-item">
                <div class="startup-bar-value">${valueText}</div>
                <div class="startup-bar-track">
                  <div class="startup-bar" style="height:${barHeight}px; --bar-color:${colorValue};"></div>
                </div>
                <div class="startup-bar-label">${formatExportPeriod(item.date)}</div>
              </div>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderExportShareLineChart({ title, points, valueKey, totalKey, colorValue }) {
  const validPoints = points
    .map((item) => {
      const total = item?.[totalKey];
      const value = item?.[valueKey];
      if (!total || value === undefined || value === null || Number.isNaN(total) || Number.isNaN(value)) {
        return null;
      }
      return {
        label: formatExportPeriod(item.date),
        share: (value / total) * 100,
      };
    })
    .filter(Boolean);

  if (!validPoints.length) {
    return "";
  }

  const minShare = Math.min(...validPoints.map((point) => point.share));
  const maxShare = Math.max(...validPoints.map((point) => point.share));
  const range = Math.max(maxShare - minShare, 1);
  const width = 320;
  const height = 120;
  const paddingX = 18;
  const paddingTop = 18;
  const paddingBottom = 26;
  const usableWidth = width - paddingX * 2;
  const usableHeight = height - paddingTop - paddingBottom;
  const xStep = validPoints.length === 1 ? 0 : usableWidth / (validPoints.length - 1);
  const plotted = validPoints.map((point, index) => ({
    ...point,
    x: paddingX + xStep * index,
    y: paddingTop + ((maxShare - point.share) / range) * usableHeight,
  }));
  const path = plotted.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");

  return `
    <article class="startup-chart-card business-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="sme-share-chart">
        <svg class="sme-share-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true" style="--share-line-color:${colorValue};">
          <path class="sme-share-line" d="${path}"></path>
          ${plotted
            .map(
              (point) => `
                <g>
                  <circle class="sme-share-point" cx="${point.x}" cy="${point.y}" r="3.5"></circle>
                  <text class="sme-share-label" x="${point.x}" y="${Math.max(12, point.y - 8)}">${formatNumber(point.share, 1)}%</text>
                  <text class="sme-share-year" x="${point.x}" y="${height - 4}">${point.label}</text>
                </g>
              `,
            )
            .join("")}
        </svg>
      </div>
    </article>
  `;
}

function renderExportCountryPieChart({ title, items, totalValue }) {
  const validItems = items.filter((item) => item.value !== undefined && item.value !== null && !Number.isNaN(item.value) && item.value > 0);
  if (!validItems.length) {
    return "";
  }

  const baseTotal = totalValue && totalValue > 0 ? totalValue : validItems.reduce((sum, item) => sum + item.value, 0);
  const segments = [];
  let cursor = 0;

  validItems.forEach((item) => {
    const share = (item.value / baseTotal) * 100;
    const start = cursor;
    const end = cursor + share;
    segments.push(`${item.color} ${start}% ${end}%`);
    cursor = end;
  });

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="investment-pie-layout">
        <div class="investment-pie" style="--pie-fill:${segments.join(", ")};"></div>
        <div class="investment-pie-legend">
          ${validItems
            .map(
              (item) => `
                <div class="investment-pie-legend-item" style="--legend-color:${item.color};">
                  <span class="investment-pie-legend-swatch" style="--legend-color:${item.color};"></span>
                  <span class="investment-pie-legend-name">${item.name}</span>
                  <span class="investment-pie-legend-value">${formatExportAmount(item.value)} (${formatNumber((item.value / baseTotal) * 100, 1)}%)</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function parseIndexPage(markdown, code) {
  const priceMatch = markdown.match(/_([\d,\.]+)_\s+([\d,\.]+)\s+(-?[\d,\.]+)%/);
  const timeRegex = new RegExp(`https://finance\\.naver\\.com/sise/sise_index\\.naver\\?code=${code}#\\)\\s*(\\d{4}\\.\\d{2}\\.\\d{2}\\s+[^\\n]+)`);
  const timeMatch = markdown.match(timeRegex);

  if (!priceMatch) {
    throw new Error(`${code} 지수 파싱 실패`);
  }

  const value = priceMatch[1];
  const delta = Number(priceMatch[2].replace(/,/g, ""));
  const rate = Number(priceMatch[3].replace(/,/g, ""));

  return {
    value,
    changeValue: delta,
    changePercent: rate,
    direction: rate > 0 ? "up" : rate < 0 ? "down" : "steady",
    metaTime: timeMatch ? timeMatch[1].trim() : "네이버 증권 기준",
    metaSource: code,
  };
}

function parseMarketIndex(markdown) {
  const usdMatch = markdown.match(/### 미국 USD\s+([\d,\.]+)\s+원\s+([\d,\.]+)\s+(상승|하락).*?(\d{4}\.\d{2}\.\d{2}\s+\d{2}:\d{2})/s);
  const wtiMatch = markdown.match(/### WTI\s+([\d,\.]+)\s+달러\s+([\d,\.]+)\s+(상승|하락).*?(\d{4}\.\d{2}\.\d{2})/s);
  const govt3yMatch = markdown.match(/\|\s+\[국고채 \(3년\)\][^|]+\|\s+([\d\.]+)\s+\|\s+!\[Image[^\]]*:\s*(상승|하락)\][^|]*\s+([\d\.]+)\s+\|/);

  if (!usdMatch || !wtiMatch || !govt3yMatch) {
    throw new Error("시장지표 파싱 실패");
  }

  return {
    usdkrw: {
      value: usdMatch[1],
      changeValue: Number(usdMatch[2].replace(/,/g, "")),
      changePercent: null,
      direction: usdMatch[3] === "상승" ? "up" : "down",
      metaTime: usdMatch[4],
      metaSource: "USDKRW",
    },
    wti: {
      value: wtiMatch[1],
      changeValue: Number(wtiMatch[2].replace(/,/g, "")),
      changePercent: null,
      direction: wtiMatch[3] === "상승" ? "up" : "down",
      metaTime: wtiMatch[4],
      metaSource: "WTI",
    },
    govt3y: {
      value: govt3yMatch[1],
      changeValue: Number(govt3yMatch[3]),
      changePercent: null,
      direction: govt3yMatch[2] === "상승" ? "up" : "down",
      metaTime: "네이버 증권 시장금리 표",
      metaSource: "KR3YT",
    },
  };
}

function readSnapshot() {
  try {
    return JSON.parse(localStorage.getItem(SNAPSHOT_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeSnapshot(snapshot) {
  localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(snapshot));
}

function parseAltAsset(payload, previousSnapshot) {
  const previousPrice = previousSnapshot?.[payload.symbol]?.price ?? null;
  const currentPrice = Number(payload.price);
  const delta = previousPrice === null ? null : currentPrice - previousPrice;
  const percent = previousPrice ? (delta / previousPrice) * 100 : null;

  return {
    value: formatNumber(currentPrice, payload.symbol === "BTC" ? 2 : 2),
    changeValue: delta,
    changePercent: percent,
    direction: delta === null ? "steady" : delta > 0 ? "up" : delta < 0 ? "down" : "steady",
    metaTime: payload.updatedAtReadable || payload.updatedAt,
    metaSource: `${payload.symbol} · refresh`,
    changeBasis: "직전 새로고침 대비",
    rawPrice: currentPrice,
  };
}

function getChangeClass(direction) {
  if (direction === "up") {
    return "is-up";
  }

  if (direction === "down") {
    return "is-down";
  }

  return "is-steady";
}

function formatChange(item) {
  if (item.changeValue === null || Number.isNaN(item.changeValue)) {
    return item.changeBasis ? "첫 새로고침 기준값" : "변동률 집계 중";
  }

  const sign = item.changeValue > 0 ? "+" : "";
  const changeNumber = Math.abs(item.changeValue) >= 100
    ? formatNumber(item.changeValue, 2)
    : formatNumber(item.changeValue, 2);

  if (item.changePercent === null || Number.isNaN(item.changePercent)) {
    return `${sign}${changeNumber}${item.changeBasis ? ` · ${item.changeBasis}` : ""}`;
  }

  const percentSign = item.changePercent > 0 ? "+" : "";
  return `${sign}${changeNumber} (${percentSign}${formatNumber(item.changePercent, 2)}%)${item.changeBasis ? ` · ${item.changeBasis}` : ""}`;
}

function renderMarketList(data) {
  const marketList = document.getElementById("market-list");

  marketList.innerHTML = marketItems
    .map((item) => {
      const row = data[item.id];
      const changeClass = row ? getChangeClass(row.direction) : "is-steady";
      const value = row ? `${row.value}${item.unit}` : "-";
      const change = row ? formatChange(row) : "데이터 없음";
      const metaTime = row ? row.metaTime : "연결 대기";
      const metaSource = row ? row.metaSource : item.code;

      return `
        <article class="market-item">
          <div class="market-row">
            <div class="market-left">
              <div class="asset-name">
                <span>${item.name}</span>
                <span class="asset-badge">${item.badge}</span>
              </div>
              <div class="asset-meta">
                <span class="asset-dot"></span>
                <span>${metaTime}</span>
                <span>|</span>
                <span>${metaSource}</span>
              </div>
            </div>
            <div class="market-right">
              <div class="asset-value">${value}</div>
              <div class="asset-change ${changeClass}">${change}</div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSmeData() {
  const smeGrid = document.getElementById("sme-grid");
  const smeCharts = document.getElementById("sme-charts");
  const smeYearSelect = document.getElementById("sme-year-select");

  if (!smeData.length) {
    if (smeYearSelect) {
      smeYearSelect.innerHTML = "";
      smeYearSelect.disabled = true;
    }
    smeGrid.innerHTML = `
      <article class="sme-card">
        <div class="sme-title">데이터를 불러오지 못했습니다.</div>
        <div class="sme-footnote">${smeLoadError || "KOSIS OpenAPI 응답 형식을 확인해 주세요."}</div>
      </article>
    `;
    smeCharts.innerHTML = "";
    return;
  }

  const selectedYear = smeSelectedYear || smeYears[smeYears.length - 1];
  const selectedIndustry = "전산업";
  const selectedIndex = smeYears.findIndex((year) => year === selectedYear);
  const previousYear = selectedIndex > 0 ? smeYears[selectedIndex - 1] : null;

  if (smeYearSelect) {
    smeYearSelect.disabled = false;
    smeYearSelect.innerHTML = smeYears
      .map((year) => `<option value="${year}"${year === selectedYear ? " selected" : ""}>${year}</option>`)
      .join("");
    smeYearSelect.onchange = (event) => {
      smeSelectedYear = event.currentTarget.value;
      renderSmeData();
      renderSmeCharts();
    };
  }

  const smeDisplayOrder = ["기업수", "종사자수", "매출액"];
  const orderedSmeData = [...smeData].sort((a, b) => {
    const aIndex = smeDisplayOrder.indexOf(a.title);
    const bIndex = smeDisplayOrder.indexOf(b.title);
    return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex)
      - (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex);
  });

  smeGrid.innerHTML = orderedSmeData
    .map((item) => {
      const displayLabel = getSmeDisplayLabel(item.title);
      const current = item.years[selectedYear]?.[selectedIndustry];
      const previous = previousYear ? item.years[previousYear]?.[selectedIndustry] : null;
      const currentValue = current?.sme;
      const totalValue = current?.total;
      const previousValue = previous?.sme ?? null;
      const growthText = formatSmeDelta(item, currentValue, previousValue);
      const share =
        totalValue && currentValue !== null && currentValue !== undefined
          ? (currentValue / totalValue) * 100
          : Number.NaN;
      const fill = Number.isNaN(share) ? 6 : Math.max(6, Math.min(100, Math.round(share)));
      const filteredYears = getFilteredSmeYears().filter((year) => item.years[year]?.[selectedIndustry]?.sme !== undefined);
      const values = filteredYears.map((year) => item.years[year]?.[selectedIndustry]?.sme ?? 0);
      const maxValue = Math.max(...values, 1);
      const topIndustries = getSmeIndustryTopFive(item, selectedYear);
      const shareSeries = filteredYears.map((year) => {
        const yearPoint = item.years[year]?.[selectedIndustry];
        const yearTotal = yearPoint?.total;
        const yearSme = yearPoint?.sme;
        return yearTotal && yearSme !== null && yearSme !== undefined ? (yearSme / yearTotal) * 100 : null;
      });
      const validShareSeries = shareSeries.filter((value) => value !== null);
      const shareMin = validShareSeries.length ? Math.min(...validShareSeries) : 0;
      const shareMax = validShareSeries.length ? Math.max(...validShareSeries) : 100;
      const shareRange = Math.max(shareMax - shareMin, 1);
      const shareWidth = 320;
      const shareHeight = 104;
      const sharePaddingX = 18;
      const sharePaddingTop = 18;
      const sharePaddingBottom = 24;
      const shareUsableWidth = shareWidth - sharePaddingX * 2;
      const shareUsableHeight = shareHeight - sharePaddingTop - sharePaddingBottom;
      const sharePoints = shareSeries
        .map((value, index) => {
          if (value === null) {
            return null;
          }
          const x = sharePaddingX + (filteredYears.length === 1 ? shareUsableWidth / 2 : (shareUsableWidth / Math.max(filteredYears.length - 1, 1)) * index);
          const y = sharePaddingTop + ((shareMax - value) / shareRange) * shareUsableHeight;
          return { x, y, value, year: filteredYears[index] };
        })
        .filter(Boolean);
      const sharePath = sharePoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");

      return `
        <article class="sme-card">
          <div class="sme-card-header">
            <div class="sme-title">${item.title}</div>
          </div>
          <div class="sme-chart-row">
            <div class="sme-donut" style="--fill:${fill}; --donut-color:${item.color};">
              <div class="sme-donut-inner">
                <div class="sme-donut-percent">${Number.isNaN(share) ? "-" : `${formatNumber(share, 1)}%`}</div>
                <div class="sme-donut-caption">${item.title}</div>
              </div>
            </div>
            <div class="sme-metric-copy">
              <div class="sme-kicker">${selectedYear} ${displayLabel}</div>
              <div class="sme-value">${currentValue === undefined || currentValue === null ? "-" : formatSmeValue(item, currentValue)}</div>
              ${growthText ? `<div class="sme-footnote sme-footnote--delta">${growthText}</div>` : ""}
              <div class="sme-footnote">
                ${totalValue === undefined || totalValue === null
                  ? "선택한 조건의 전체기업 데이터가 없습니다."
                  : formatTotalFootnote(item, totalValue)}
              </div>
            </div>
          </div>
          <div class="sme-chart-stack">
            <div class="sme-chart-block">
              <div class="sme-chart-block-title">${displayLabel} 추이</div>
              <div class="startup-bars" style="--bar-count:${filteredYears.length || 1};">
                ${filteredYears
                  .map((year) => {
                    const value = item.years[year]?.[selectedIndustry]?.sme ?? 0;
                    const barHeight = Math.max(8, Math.round((value / maxValue) * 120));
                    return `
                      <div class="startup-bar-item">
                        <div class="sme-bar-value">${formatSmeValue(item, value)}</div>
                        <div class="startup-bar-track">
                          <div class="startup-bar" style="height:${barHeight}px; --bar-color:${item.color};"></div>
                        </div>
                        <div class="startup-bar-label">${year}</div>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            </div>
            <div class="sme-chart-block sme-share-chart">
              <div class="sme-share-chart-title">${displayLabel} 비중 추이</div>
              <svg class="sme-share-svg" viewBox="0 0 ${shareWidth} ${shareHeight}" preserveAspectRatio="none" aria-hidden="true" style="--share-line-color:${item.color};">
                ${sharePath ? `<path class="sme-share-line" d="${sharePath}"></path>` : ""}
                ${sharePoints
                  .map((point) => `
                    <g>
                      <circle class="sme-share-point" cx="${point.x}" cy="${point.y}" r="3.5"></circle>
                      <text class="sme-share-label" x="${point.x}" y="${Math.max(12, point.y - 8)}">${formatNumber(point.value, 1)}%</text>
                      <text class="sme-share-year" x="${point.x}" y="${shareHeight - 4}">${point.year}</text>
                    </g>
                  `)
                  .join("")}
              </svg>
            </div>
            <div class="sme-chart-block sme-top-list">
              <div class="sme-top-list-title">업종별 비중 상위 5개</div>
              ${topIndustries.length
                ? topIndustries
                  .map((entry) => `
                    <div class="sme-top-item">
                      <div class="sme-top-item-label">${entry.industry}</div>
                      <div class="sme-top-item-value">${formatSmeValue(item, entry.value)} (${formatNumber(entry.share, 1)}%)</div>
                    </div>
                  `)
                  .join("")
                : `<div class="sme-footnote">상위 업종 비중을 계산할 데이터가 없습니다.</div>`}
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  smeCharts.innerHTML = "";
}

function getFilteredSmeYears() {
  const selectedYear = smeSelectedYear || smeYears[smeYears.length - 1];
  const selectedIndex = smeYears.findIndex((year) => year === selectedYear);
  if (selectedIndex < 0) {
    return smeYears.slice(-3);
  }

  const startIndex = Math.max(0, selectedIndex - 2);
  return smeYears.slice(startIndex, selectedIndex + 1);
}

function renderSmeCharts() {
  const charts = document.getElementById("sme-charts");
  if (!charts) {
    return;
  }

  if (!smeData.length) {
    charts.innerHTML = "";
    return;
  }
  charts.innerHTML = "";
}

function renderStartupSummary() {
  const summary = document.getElementById("startup-summary");
  if (!summary) {
    return;
  }

  if (!startupSeries.length) {
    summary.innerHTML = `
      <article class="startup-summary-card">
        <div class="startup-value">창업 데이터를 불러오지 못했습니다.</div>
        <div class="startup-subvalue">${startupLoadError || "KOSIS OpenAPI 설정을 확인해 주세요."}</div>
      </article>
    `;
    return;
  }

  const selectedYear = getStartupSelectedYear();
  const currentIndex = startupSeries.findIndex((item) => item.year === selectedYear);
  const current = currentIndex >= 0 ? startupSeries[currentIndex] : startupSeries[startupSeries.length - 1];
  const previous = currentIndex > 0 ? startupSeries[currentIndex - 1] : null;
  const shareText = current.techShare !== undefined && current.techShare !== null ? `${formatNumber(current.techShare, 1)}%` : "-";
  const startupGrowth = formatYoYGrowth(current.startupCount, previous?.startupCount);
  const techGrowth = formatYoYGrowth(current.techStartupCount, previous?.techStartupCount);
  const topIndustryPalette = ["#d04a42", "#6f5bd3", "#2f8f6b", "#d4a72c", "#7d8796"];
  const topIndustryMarkup = (current.topIndustries || [])
    .map((item, index) => {
      const previousValue = previous?.industries?.[item.industry];
      return `
        <div class="startup-metric investment-metric startup-topfive-item" style="--investment-accent:${topIndustryPalette[index % topIndustryPalette.length]};">
          <div class="startup-kicker investment-kicker startup-topfive-name">${item.industry}</div>
          <div class="startup-value investment-value startup-topfive-value">${formatManCount(item.value || 0)} <span class="sme-value-unit">(비중: ${formatStartupIndustryShare(item.value, current.startupCount)})</span></div>
          <div class="startup-subvalue">${formatYoYGrowth(item.value, previousValue) || '<span class="startup-delta">(전년대비 0.0%)</span>'}</div>
        </div>
      `;
    })
    .join("");
  const startupChartMarkup = renderStartupBarChart({
    title: "창업기업 수 최근 3년 추이",
    key: "startupCount",
    type: "count",
    colorClass: "is-blue",
    colorValue: "#2c7be5",
  });
  const techStartupChartMarkup = renderStartupBarChart({
    title: "기술기반업종 창업기업 수 최근 3년 추이",
    key: "techStartupCount",
    type: "count",
    colorClass: "is-sky",
    colorValue: "#59a7ff",
  });
  const techShareChartMarkup = renderStartupLineChart({
    title: "기술기반업종 비중 최근 3년 추이",
    key: "techShare",
  });

  summary.innerHTML = `
    <section class="startup-section-block">
      <div class="section-head section-head-secondary">
        <div>
          <h2>창업기업 수</h2>
        </div>
      </div>
      <article class="startup-summary-card">
        <div class="startup-summary-grid">
          <div class="startup-metric">
            <div class="startup-kicker">${current.year}년 전체 창업기업 수</div>
            <div class="startup-value">${formatManCount(current.startupCount || 0)}</div>
            <div class="startup-subvalue">${startupGrowth || '<span class="startup-delta">(전년대비 0.0%)</span>'}</div>
          </div>
        </div>
      </article>
      ${startupChartMarkup}
    </section>
    <section class="startup-section-block">
      <div class="section-head section-head-secondary">
        <div>
          <h2>기술기반업종 창업</h2>
        </div>
      </div>
      <article class="startup-summary-card">
        <div class="startup-summary-grid">
          <div class="startup-metric">
            <div class="startup-kicker">${current.year}년 기술기반업종 창업기업 수</div>
            <div class="startup-value">${formatManCount(current.techStartupCount || 0)}</div>
            <div class="startup-subvalue">${techGrowth || '<span class="startup-delta">(전년대비 0.0%)</span>'}</div>
            <div class="startup-subvalue">전체 창업기업 수 대비 비중: <span class="startup-share-value">${shareText}</span></div>
          </div>
        </div>
      </article>
      ${techStartupChartMarkup}
      ${techShareChartMarkup}
    </section>
    <section class="startup-section-block">
      <div class="section-head section-head-secondary">
        <div>
          <h2>업종별 창업 비중 Top-5</h2>
        </div>
      </div>
      <article class="startup-summary-card">
        <div class="startup-summary-grid">
          ${topIndustryMarkup || `<div class="startup-subvalue">상위 5개 업종 데이터를 계산할 수 없습니다.</div>`}
        </div>
      </article>
    </section>
  `;
}

function getStartupSelectedYear() {
  return document.getElementById("startup-year-select")?.value || startupSeries[startupSeries.length - 1]?.year || "";
}

function getFilteredStartupSeries(windowSize = 5) {
  const selectedYear = getStartupSelectedYear();
  const selectedIndex = startupSeries.findIndex((item) => item.year === selectedYear);
  if (selectedIndex < 0) {
    return startupSeries.slice(-windowSize);
  }

  const startIndex = Math.max(0, selectedIndex - (windowSize - 1));
  return startupSeries.slice(startIndex, selectedIndex + 1);
}

function renderStartupBarChart({ title, key, type, colorClass, colorValue }) {
  const filteredSeries = getFilteredStartupSeries(3);

  if (!filteredSeries.length) {
    return "";
  }

  const values = filteredSeries.map((item) => item[key] ?? 0);
  const maxValue = Math.max(...values, 1);

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="startup-bars" style="--bar-count:${filteredSeries.length};">
        ${filteredSeries
          .map((item) => {
            const value = item[key] ?? 0;
            const barHeight = Math.max(8, Math.round((value / maxValue) * 120));
            return `
              <div class="startup-bar-item">
                <div class="startup-bar-value">${formatStartupMetric(value, type)}</div>
                <div class="startup-bar-track">
                  <div class="startup-bar ${colorClass}" style="height:${barHeight}px; --bar-color:${colorValue};"></div>
                </div>
                <div class="startup-bar-label">${item.year}</div>
              </div>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderStartupTopIndustryChart() {
  const selectedYear = getStartupSelectedYear();
  const current = startupSeries.find((item) => item.year === selectedYear) || startupSeries[startupSeries.length - 1];
  const topIndustries = current?.topIndustries || [];

  if (!topIndustries.length) {
    return "";
  }
  const palette = ["#d04a42", "#6f5bd3", "#2f8f6b", "#d4a72c", "#7d8796"];
  const topItems = topIndustries.map((item, index) => ({
    name: item.industry,
    value: item.value,
    color: palette[index % palette.length],
  }));
  const totalValue = current?.startupCount || topItems.reduce((sum, item) => sum + item.value, 0);
  const otherValue = Math.max(0, totalValue - topItems.reduce((sum, item) => sum + item.value, 0));
  const pieItems = [
    ...topItems,
    ...(otherValue > 0 ? [{ name: "기타", value: otherValue, color: "#94a3b8" }] : []),
  ];

  return renderStartupIndustryPieChart({
    title: `${selectedYear} 업종별 창업기업 비중`,
    items: pieItems,
    totalValue,
  });
}

function renderStartupIndustryPieChart({ title, items, totalValue }) {
  const validItems = items.filter((item) => item.value !== undefined && item.value !== null && !Number.isNaN(item.value) && item.value > 0);
  if (!validItems.length) {
    return "";
  }

  const baseTotal = totalValue && totalValue > 0 ? totalValue : validItems.reduce((sum, item) => sum + item.value, 0);
  const segments = [];
  let cursor = 0;

  validItems.forEach((item) => {
    const share = (item.value / baseTotal) * 100;
    const start = cursor;
    const end = cursor + share;
    segments.push(`${item.color} ${start}% ${end}%`);
    cursor = end;
  });

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="investment-pie-layout">
        <div class="investment-pie" style="--pie-fill:${segments.join(", ")};"></div>
        <div class="investment-pie-legend">
          ${validItems
            .map(
              (item) => `
                <div class="investment-pie-legend-item" style="--legend-color:${item.color};">
                  <span class="investment-pie-legend-swatch" style="--legend-color:${item.color};"></span>
                  <span class="investment-pie-legend-name">${item.name}</span>
                  <span class="investment-pie-legend-value">${formatManCount(item.value)} (${formatNumber((item.value / baseTotal) * 100, 1)}%)</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderStartupLineChart({ title, key }) {
  const filteredSeries = getFilteredStartupSeries(3);

  if (!filteredSeries.length) {
    return "";
  }

  const values = filteredSeries.map((item) => item[key] ?? 0);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const range = maxValue - minValue || 1;
  const width = 320;
  const height = 150;
  const paddingX = 22;
  const paddingTop = 26;
  const paddingBottom = 34;
  const usableWidth = width - paddingX * 2;
  const usableHeight = height - paddingTop - paddingBottom;

  const points = filteredSeries.map((item, index) => {
    const x =
      filteredSeries.length === 1
        ? width / 2
        : paddingX + (usableWidth / (filteredSeries.length - 1)) * index;
    const value = item[key] ?? 0;
    const y = paddingTop + (1 - (value - minValue) / range) * usableHeight;
    return { x, y, value, year: item.year };
  });

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="startup-line-chart" style="--bar-count:${filteredSeries.length};">
        <svg class="startup-line-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <line class="startup-line-grid" x1="${paddingX}" y1="${height - paddingBottom}" x2="${width - paddingX}" y2="${height - paddingBottom}"></line>
          <path class="startup-line-path" d="${path}"></path>
          ${points
            .map(
              (point) => `
                <text class="startup-line-value" x="${point.x}" y="${Math.max(12, point.y - 10)}">${formatNumber(point.value, 1)}%</text>
                <circle class="startup-line-point" cx="${point.x}" cy="${point.y}" r="4"></circle>
              `,
            )
            .join("")}
        </svg>
        <div class="startup-line-years">
          ${points.map((point) => `<div class="startup-line-year">${point.year}</div>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderStartupCharts() {
  const charts = document.getElementById("startup-charts");
  if (!charts) {
    return;
  }
  charts.innerHTML = startupSeries.length ? renderStartupTopIndustryChart() : "";
}

function getBusinessSelectedKey() {
  return businessDates[businessDates.length - 1] || "";
}

function getDefaultRange(keys, count = 12) {
  if (!keys.length) {
    return { start: "", end: "" };
  }

  const end = keys[keys.length - 1];
  const start = keys[Math.max(0, keys.length - count)];
  return { start, end };
}

function normalizeRangeSelection(keys, start, end, defaultCount = 12) {
  if (!keys.length) {
    return { start: "", end: "" };
  }

  const fallback = getDefaultRange(keys, defaultCount);
  let nextStart = keys.includes(start) ? start : fallback.start;
  let nextEnd = keys.includes(end) ? end : fallback.end;

  if (nextStart > nextEnd) {
    nextStart = nextEnd;
  }

  return { start: nextStart, end: nextEnd };
}

function filterSeriesByRange(series, start, end) {
  return (series || []).filter((item) => {
    const key = String(item?.key || "");
    if (start && key < start) {
      return false;
    }
    if (end && key > end) {
      return false;
    }
    return true;
  });
}

function syncRangeSelectPair({
  startId,
  endId,
  keys,
  startValue,
  endValue,
  defaultCount,
  formatLabel,
  onChange,
}) {
  const startSelect = document.getElementById(startId);
  const endSelect = document.getElementById(endId);
  const normalized = normalizeRangeSelection(keys, startValue, endValue, defaultCount);

  if (!startSelect || !endSelect) {
    return normalized;
  }

  const options = keys
    .map((key) => `<option value="${key}">${formatLabel(key)}</option>`)
    .join("");

  startSelect.innerHTML = options;
  endSelect.innerHTML = options;
  startSelect.disabled = !keys.length;
  endSelect.disabled = !keys.length;
  startSelect.value = normalized.start;
  endSelect.value = normalized.end;

  startSelect.onchange = () => onChange(startSelect.value, endSelect.value);
  endSelect.onchange = () => onChange(startSelect.value, endSelect.value);

  return normalized;
}

function syncRangeSliderPair({
  startId,
  endId,
  labelId,
  trackId,
  startTextId,
  endTextId,
  keys,
  startValue,
  endValue,
  defaultCount,
  formatLabel,
  labelPrefix = "",
  onChange,
}) {
  const startInput = document.getElementById(startId);
  const endInput = document.getElementById(endId);
  const label = document.getElementById(labelId);
  const track = document.getElementById(trackId);
  const startText = document.getElementById(startTextId);
  const endText = document.getElementById(endTextId);
  const normalized = normalizeRangeSelection(keys, startValue, endValue, defaultCount);

  if (!startInput || !endInput) {
    return normalized;
  }

  const startIndex = Math.max(0, keys.indexOf(normalized.start));
  const endIndex = Math.max(0, keys.indexOf(normalized.end));
  const isDisabled = !keys.length;

  [startInput, endInput].forEach((input) => {
    input.min = "0";
    input.max = String(Math.max(0, keys.length - 1));
    input.step = "1";
    input.disabled = isDisabled;
  });

  startInput.value = String(startIndex);
  endInput.value = String(endIndex);

  if (label) {
    const rangeLabel = isDisabled
      ? ""
      : `${formatLabel(keys[startIndex])} ~ ${formatLabel(keys[endIndex])}`;
    label.innerHTML = isDisabled
      ? ""
      : labelPrefix
        ? `<span class="range-label-prefix">${labelPrefix}</span><span class="range-label-period">${rangeLabel}</span>`
        : `<span class="range-label-period">${rangeLabel}</span>`;
  }

  if (startText) {
    startText.textContent = isDisabled ? "" : `시작: ${formatLabel(keys[startIndex])}`;
  }

  if (endText) {
    endText.textContent = isDisabled ? "" : `종료: ${formatLabel(keys[endIndex])}`;
  }

  if (track) {
    const maxIndex = Math.max(keys.length - 1, 1);
    track.style.setProperty("--range-start", `${(startIndex / maxIndex) * 100}%`);
    track.style.setProperty("--range-end", `${(endIndex / maxIndex) * 100}%`);
  }

  const emit = () => {
    const nextStart = keys[Number(startInput.value)] || "";
    const nextEnd = keys[Number(endInput.value)] || "";
    onChange(nextStart, nextEnd);
  };

  startInput.oninput = emit;
  endInput.oninput = emit;

  return normalized;
}

function getBusinessRecord(key) {
  return businessSeries.find((item) => item.key === key) || null;
}

function getBusinessCompositeRecord(key) {
  return businessCompositeSeries.find((item) => item.key === key) || null;
}

function getPreviousBusinessRecord(key) {
  const index = businessSeries.findIndex((item) => item.key === key);
  return index > 0 ? businessSeries[index - 1] : null;
}

function getPreviousRecordFromSeries(series, key, matchKey = null, matchValue = null) {
  const filteredSeries = matchKey
    ? series.filter((item) => item?.[matchKey] === matchValue)
    : series;
  const index = filteredSeries.findIndex((item) => item.key === key);
  return index > 0 ? filteredSeries[index - 1] : null;
}

function getPreviousYearBusinessRecord(key) {
  if (!/^\d{6}$/.test(String(key || ""))) {
    return null;
  }

  return getBusinessRecord(`${Number(String(key).slice(0, 4)) - 1}${String(key).slice(4, 6)}`);
}

function getPreviousYearBusinessRecordFromSeries(series, key) {
  if (!/^\d{6}$/.test(String(key || ""))) {
    return null;
  }

  return series.find((item) => item.key === `${Number(String(key).slice(0, 4)) - 1}${String(key).slice(4, 6)}`) || null;
}

function getBusinessChartSeries() {
  if (!businessSeries.length) {
    return [];
  }

  return filterSeriesByRange(businessSeries, businessRangeStart, businessRangeEnd);
}

function getProductionRecord(key) {
  return productionSeries.find((item) => item.key === key) || null;
}

function getServiceProductionRecord(key) {
  return serviceProductionSeries.find((item) => item.key === key) || null;
}

function getPreviousYearProductionRecord(key) {
  if (!/^\d{6}$/.test(String(key || ""))) {
    return null;
  }

  return getProductionRecord(`${Number(String(key).slice(0, 4)) - 1}${String(key).slice(4, 6)}`);
}

function getPreviousYearServiceProductionRecord(key) {
  if (!/^\d{6}$/.test(String(key || ""))) {
    return null;
  }

  return getServiceProductionRecord(`${Number(String(key).slice(0, 4)) - 1}${String(key).slice(4, 6)}`);
}

function getProductionYoYSeries() {
  if (!productionSeries.length) {
    return [];
  }

  return productionSeries
    .filter((item) => {
      const key = String(item.key || "");
      return (!productionRangeStart || key >= productionRangeStart)
        && (!productionRangeEnd || key <= productionRangeEnd);
    })
    .map((item) => {
      const previousYear = getPreviousYearProductionRecord(item.key);
      if (!previousYear || previousYear.value === 0) {
        return null;
      }

      return {
        key: item.key,
        value: ((item.value - previousYear.value) / previousYear.value) * 100,
      };
    })
    .filter(Boolean);
}

function getServiceProductionYoYSeries() {
  if (!serviceProductionSeries.length) {
    return [];
  }

  return serviceProductionSeries
    .filter((item) => {
      const key = String(item.key || "");
      return (!productionRangeStart || key >= productionRangeStart)
        && (!productionRangeEnd || key <= productionRangeEnd);
    })
    .map((item) => {
      const previousYear = getPreviousYearServiceProductionRecord(item.key);
      if (!previousYear || previousYear.value === 0) {
        return null;
      }

      return {
        key: item.key,
        value: ((item.value - previousYear.value) / previousYear.value) * 100,
      };
    })
    .filter(Boolean);
}

function getOperationRateChartSeries() {
  if (!operationRateSeries.length) {
    return [];
  }

  return filterSeriesByRange(operationRateSeries, operationRangeStart, operationRangeEnd);
}

function initBusinessRangeSelects() {
  const businessKeys = businessSeries.map((item) => item.key);
  const normalizedBusiness = syncRangeSliderPair({
    startId: "business-range-start",
    endId: "business-range-end",
    labelId: "business-range-label",
    trackId: "business-range-track",
    startTextId: "business-range-start-text",
    endTextId: "business-range-end-text",
    keys: businessKeys,
    startValue: businessRangeStart,
    endValue: businessRangeEnd,
    defaultCount: 36,
    formatLabel: formatBusinessPeriod,
    onChange: (start, end) => {
      businessRangeStart = start;
      businessRangeEnd = end;
      const normalized = normalizeRangeSelection(businessKeys, businessRangeStart, businessRangeEnd, 36);
      businessRangeStart = normalized.start;
      businessRangeEnd = normalized.end;
      initBusinessRangeSelects();
      renderBusinessCharts();
    },
  });
  businessRangeStart = normalizedBusiness.start;
  businessRangeEnd = normalizedBusiness.end;

  const productionKeys = productionSeries.map((item) => item.key);
  const normalizedProduction = syncRangeSliderPair({
    startId: "production-range-start",
    endId: "production-range-end",
    labelId: "production-range-label",
    trackId: "production-range-track",
    startTextId: "production-range-start-text",
    endTextId: "production-range-end-text",
    keys: productionKeys,
    startValue: productionRangeStart,
    endValue: productionRangeEnd,
    defaultCount: 12,
    formatLabel: formatQuarterPeriod,
    onChange: (start, end) => {
      productionRangeStart = start;
      productionRangeEnd = end;
      const normalized = normalizeRangeSelection(productionKeys, productionRangeStart, productionRangeEnd, 12);
      productionRangeStart = normalized.start;
      productionRangeEnd = normalized.end;
      initBusinessRangeSelects();
      renderProductionCharts();
    },
  });
  productionRangeStart = normalizedProduction.start;
  productionRangeEnd = normalizedProduction.end;

  const operationKeys = operationRateSeries.map((item) => item.key);
  const normalizedOperation = syncRangeSliderPair({
    startId: "operation-range-start",
    endId: "operation-range-end",
    labelId: "operation-range-label",
    trackId: "operation-range-track",
    startTextId: "operation-range-start-text",
    endTextId: "operation-range-end-text",
    keys: operationKeys,
    startValue: operationRangeStart,
    endValue: operationRangeEnd,
    defaultCount: 36,
    formatLabel: formatBusinessPeriod,
    onChange: (start, end) => {
      operationRangeStart = start;
      operationRangeEnd = end;
      const normalized = normalizeRangeSelection(operationKeys, operationRangeStart, operationRangeEnd, 36);
      operationRangeStart = normalized.start;
      operationRangeEnd = normalized.end;
      initBusinessRangeSelects();
      renderOperationCharts();
    },
  });
  operationRangeStart = normalizedOperation.start;
  operationRangeEnd = normalizedOperation.end;
}

function getPreviousYearOperationRecord(key) {
  const stringKey = String(key || "");
  if (!/^\d{6}$/.test(stringKey)) {
    return null;
  }

  const previousYearKey = `${Number(stringKey.slice(0, 4)) - 1}${stringKey.slice(4, 6)}`;
  return operationRateSeries.find((item) => item.key === previousYearKey) || null;
}

function getFeelingChartSeries() {
  if (!feelingActualSeries.length) {
    return [];
  }

  const selectedLabel = getFeelingSelectedLabel("actual");
  const filteredSeries = feelingActualSeries.filter((item) => item.bsiBaseName === selectedLabel);

  if (!filteredSeries.length) {
    return [];
  }
  return filterSeriesByRange(filteredSeries, feelingRangeStart, feelingRangeEnd);
}

function getFeelingOptions() {
  return FEELING_BSI_OPTIONS.map((item) => item.label);
}

function getFeelingOutlookChartSeries() {
  if (!feelingOutlookSeries.length) {
    return [];
  }

  const selectedLabel = getFeelingSelectedLabel("outlook");
  const filteredSeries = feelingOutlookSeries.filter((item) => item.bsiBaseName === selectedLabel);

  if (!filteredSeries.length) {
    return [];
  }
  return filterSeriesByRange(filteredSeries, feelingRangeStart, feelingRangeEnd);
}

function getFeelingSelectedLabel(type = "actual") {
  const options = getFeelingOptions();
  if (!options.length) {
    return "기업심리지수";
  }

  const preferred = "기업심리지수";
  const selectedValue = feelingSelectedLabel;
  return options.includes(selectedValue) ? selectedValue : preferred || options[0];
}

function initFeelingBsiSelect() {
  const options = getFeelingOptions();
  const select = document.getElementById("feeling-bsi-select");
  if (!select) {
    return;
  }

  if (!options.length) {
    select.innerHTML = "";
    return;
  }

  select.innerHTML = options
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("");
  select.value = getFeelingSelectedLabel();
  select.onchange = () => {
    feelingSelectedLabel = select.value;
    initFeelingRangeSelects();
    renderFeelingSummary();
    renderFeelingCharts();
  };
}

function initFeelingRangeSelects() {
  const selectedLabel = getFeelingSelectedLabel();
  const actualKeys = feelingActualSeries
    .filter((item) => item.bsiBaseName === selectedLabel)
    .map((item) => item.key);
  const outlookKeys = feelingOutlookSeries
    .filter((item) => item.bsiBaseName === selectedLabel)
    .map((item) => item.key);
  const keys = [...new Set([...actualKeys, ...outlookKeys])].sort();

  const normalizedFeeling = syncRangeSliderPair({
    startId: "feeling-range-start",
    endId: "feeling-range-end",
    labelId: "feeling-range-label",
    trackId: "feeling-range-track",
    startTextId: "feeling-range-start-text",
    endTextId: "feeling-range-end-text",
    keys,
    startValue: feelingRangeStart,
    endValue: feelingRangeEnd,
    defaultCount: 36,
    formatLabel: formatBusinessPeriod,
    onChange: (start, end) => {
      feelingRangeStart = start;
      feelingRangeEnd = end;
      const normalized = normalizeRangeSelection(keys, feelingRangeStart, feelingRangeEnd, 36);
      feelingRangeStart = normalized.start;
      feelingRangeEnd = normalized.end;
      initFeelingRangeSelects();
      renderFeelingCharts();
    },
  });

  feelingRangeStart = normalizedFeeling.start;
  feelingRangeEnd = normalizedFeeling.end;
}

function getFeelingFootnote(baseLabel) {
  const cleanLabel = String(baseLabel || "").replace(/BSI$/, "");

  if (cleanLabel.includes("업황")) {
    return "1) 지수 = 기준값(100) + 「좋음」 응답업체 구성비(%) - 「나쁨」 응답업체 구성비(%)";
  }

  if (["매출", "수출", "내수판매", "생산", "신규수주"].some((item) => cleanLabel.includes(item))) {
    return "2) 지수 = 기준값(100) + 「확대」 응답업체 구성비(%) - 「둔화」 응답업체 구성비(%)";
  }

  if (["제품재고", "생산설비", "인력사정"].some((item) => cleanLabel.includes(item))) {
    return "3) 지수 = 기준값(100) + 「과잉」 응답업체 구성비(%) - 「부족」 응답업체 구성비(%)";
  }

  if (["가동률", "원자재구입가격", "제품판매가격"].some((item) => cleanLabel.includes(item))) {
    return "4) 지수 = 기준값(100) + 「상승」 응답업체 구성비(%) - 「하락」 응답업체 구성비(%)";
  }

  if (cleanLabel.includes("설비투자")) {
    return "5) 지수 = 기준값(100) + 「계획대비 수정증액」 응답업체 구성비(%) - 「계획대비 수정감액」 응답업체 구성비(%)";
  }

  if (["채산성", "자금사정"].some((item) => cleanLabel.includes(item))) {
    return "6) 지수 = 기준값(100) + 「호전」 응답업체 구성비(%) - 「악화」 응답업체 구성비(%)";
  }

  return "지수 = 기준값(100)을 중심으로 응답 방향의 차이를 반영한 BSI 지표입니다.";
}

function getFeelingFootnoteExtra(baseLabel) {
  const cleanLabel = String(baseLabel || "").replace(/BSI$/, "");
  if (cleanLabel.includes("생산설비")) {
    return "*24.6월부터 생산설비 항목은 조사 중단";
  }
  return "";
}

function getManagementYears() {
  return [...new Set([
    ...managementGrowthSeries.map((item) => item.year),
    ...managementProfitSeries.map((item) => item.year),
    ...managementStabilitySeries.map((item) => item.year),
  ])].sort((a, b) => Number(a) - Number(b));
}

function getManagementSelectedYear() {
  const years = getManagementYears();
  const select = document.getElementById("management-year-select");
  return select?.value || years[years.length - 1] || "";
}

function getManagementRecord(year, category) {
  return managementGrowthSeries.find((item) => item.year === String(year) && item.category === category) || null;
}

function getManagementMetricRecord(series, year, category) {
  return series.find((item) => item.year === String(year) && item.category === category) || null;
}

function getManagementRecentYears() {
  const years = getManagementYears();
  const selectedYear = getManagementSelectedYear();
  const selectedIndex = years.findIndex((year) => year === selectedYear);
  if (selectedIndex < 0) {
    return years.slice(-3);
  }

  return years.slice(Math.max(0, selectedIndex - 2), selectedIndex + 1);
}

function getManagementVisibleCategoryMeta() {
  const palette = {
    종합: { label: "전산업", color: "#6b8db3" },
    대기업: { label: "대기업", color: "#2c7be5" },
    중소기업: { label: "중소기업", color: "#ff7a59" },
  };

  return managementVisibleCategories
    .filter((category) => palette[category])
    .map((category) => ({ key: category, ...palette[category] }));
}

function getManagementFilteredYears() {
  const years = getManagementYears();
  return years.filter((year) => {
    return (!managementRangeStart || year >= managementRangeStart)
      && (!managementRangeEnd || year <= managementRangeEnd);
  });
}

function initManagementYearSelect() {
  const select = document.getElementById("management-year-select");
  if (!select) {
    return;
  }

  const years = getManagementYears();
  if (!years.length) {
    select.innerHTML = "";
    return;
  }

  select.innerHTML = years
    .map((year) => `<option value="${year}">${year}</option>`)
    .join("");
  const preservedValue = select.dataset.selectedYear;
  select.value = preservedValue && years.includes(preservedValue)
    ? preservedValue
    : years[years.length - 1];
  select.onchange = () => {
    select.dataset.selectedYear = select.value;
    renderManagementSummary();
    renderManagementCharts();
    renderManagementProfitSummary();
    renderManagementProfitCharts();
    renderManagementStabilitySummary();
    renderManagementStabilityCharts();
  };
}

function initManagementControls() {
  const years = getManagementYears();
  const normalized = syncRangeSliderPair({
    startId: "management-range-start",
    endId: "management-range-end",
    labelId: "management-range-label",
    trackId: "management-range-track",
    startTextId: "management-range-start-text",
    endTextId: "management-range-end-text",
    keys: years,
    startValue: managementRangeStart,
    endValue: managementRangeEnd,
    defaultCount: 5,
    formatLabel: (year) => `${year}년`,
    onChange: (start, end) => {
      managementRangeStart = start;
      managementRangeEnd = end;
      const next = normalizeRangeSelection(years, managementRangeStart, managementRangeEnd, 5);
      managementRangeStart = next.start;
      managementRangeEnd = next.end;
      initManagementControls();
      renderManagementCharts();
    },
  });
  managementRangeStart = normalized.start;
  managementRangeEnd = normalized.end;

  const filters = document.getElementById("management-category-filters");
  if (!filters) {
    return;
  }

  const checkboxes = [...filters.querySelectorAll('input[type="checkbox"]')];
  checkboxes.forEach((input) => {
    input.checked = managementVisibleCategories.includes(input.value);
    input.onchange = () => {
      const next = checkboxes.filter((item) => item.checked).map((item) => item.value);
      if (!next.length) {
        input.checked = true;
        return;
      }
      managementVisibleCategories = next;
      renderManagementCharts();
    };
  });
}

function renderBusinessSummary() {
  const summary = document.getElementById("business-summary");

  if (!businessSeries.length && !businessCompositeSeries.length) {
    if (!businessHasLoaded && !businessLoadError) {
      summary.innerHTML = `
        <div class="business-summary-empty">경기 데이터를 불러오는 중입니다.</div>
      `;
      return;
    }

    summary.innerHTML = `
      <div class="business-summary-empty">${businessLoadError || "로컬 JSON 데이터 구성을 확인해 주세요."}</div>
    `;
    return;
  }

  const selectedKey = getBusinessSelectedKey();
  const current = getBusinessRecord(selectedKey) || businessSeries[businessSeries.length - 1];
  const previous = getPreviousBusinessRecord(current?.key);
  const previousYear = getPreviousYearBusinessRecord(current?.key);
  const currentComposite =
    getBusinessCompositeRecord(selectedKey) || businessCompositeSeries[businessCompositeSeries.length - 1];
  const previousCompositeYear = getPreviousYearBusinessRecordFromSeries(
    businessCompositeSeries,
    currentComposite?.key,
  );
  const currentCompositeDelta = formatBusinessYoYGrowth(currentComposite?.value, previousCompositeYear?.value);
  const currentCycleDelta = formatBusinessYoYGrowth(current?.value, previousYear?.value);

  summary.innerHTML = `
    <div class="business-summary-caption">최신 수치</div>
    <div class="business-summary-inline-grid">
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatBusinessPeriod(currentComposite?.key)} 동행종합지수</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatBusinessCycleValue(currentComposite?.value, currentComposite?.unit)}</div>
          ${currentCompositeDelta ? `<div class="business-inline-delta">${currentCompositeDelta}</div>` : ""}
        </div>
      </div>
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatBusinessPeriod(current?.key)} 동행지수 순환변동치</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatBusinessCycleValue(current?.value, current?.unit)}</div>
          ${currentCycleDelta ? `<div class="business-inline-delta">${currentCycleDelta}</div>` : ""}
        </div>
      </div>
    </div>
  `;
}

function renderBusinessLineChart({
  title,
  points,
  color = "#143f6b",
  referenceValue = null,
  labelDigits = 2,
  summaryDigits = 2,
}) {
  if (!points.length) {
    return "";
  }

  const values = points.map((item) => item.value ?? 0);
  let minValue = referenceValue === null || referenceValue === undefined
    ? Math.min(...values) - 1
    : Math.min(...values, referenceValue) - 1;
  let maxValue = referenceValue === null || referenceValue === undefined
    ? Math.max(...values) + 1
    : Math.max(...values, referenceValue) + 1;

  if (referenceValue === 100 && Math.min(...values) > 100) {
    minValue = 98;
  }
  const range = maxValue - minValue || 1;
  const width = 320;
  const height = 150;
  const paddingLeft = 32;
  const paddingRight = 32;
  const paddingTop = 26;
  const paddingBottom = 28;
  const usableWidth = width - paddingLeft - paddingRight;
  const usableHeight = height - paddingTop - paddingBottom;

  const plotted = points.map((item, index) => ({
    x: points.length === 1 ? (paddingLeft + width - paddingRight) / 2 : paddingLeft + (usableWidth / (points.length - 1)) * index,
    y: paddingTop + (1 - (item.value - minValue) / range) * usableHeight,
    value: item.value,
    label: formatBusinessPeriod(item.key),
    key: item.key,
  }));
  const latestPoint = plotted[plotted.length - 1];
  const minPoint = plotted.reduce((lowest, point) => (point.value < lowest.value ? point : lowest), plotted[0]);
  const maxPoint = plotted.reduce((highest, point) => (point.value > highest.value ? point : highest), plotted[0]);
  const firstPoint = plotted[0];
  const highlightKeys = new Set([firstPoint.key, minPoint.key, maxPoint.key, latestPoint.key]);
  const referenceY =
    referenceValue === null || referenceValue === undefined
      ? null
      : paddingTop + (1 - (referenceValue - minValue) / range) * usableHeight;
  const path = plotted
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
  const formatSummaryValue = (point) => `${formatNumber(point.value, summaryDigits)}${formatBusinessPointCaption(point.key)}`;
  const firstYearFull = Number(String(plotted[0]?.key || "").slice(0, 4));
  const yearSpan = getYearSpanFromKeys(plotted[0]?.key, plotted[plotted.length - 1]?.key);
  const yearStep = yearSpan > 5 ? 2 : 1;
  const axisEntries = plotted.map((point, index) => {
    const isLatest = index === plotted.length - 1;
    const pointYearFull = Number(String(point.key || "").slice(0, 4));
    const pointYearShort = String(point.key || "").slice(2, 4);
    const pointMonth = Number(String(point.key || "").slice(4, 6));
    let label = "";

    if (yearSpan > 5) {
      if (pointMonth === 1 && Number.isFinite(pointYearFull) && ((pointYearFull - firstYearFull) % yearStep === 0)) {
        label = pointYearShort;
      } else if (isLatest && pointMonth !== 1) {
        label = pointYearShort;
      }
    } else {
      const latestYear = plotted[plotted.length - 1]?.key?.slice(0, 4);
      const pointYear = point.key?.slice(0, 4);
      label = !isLatest && pointYear === latestYear
        ? ""
        : formatBusinessAxisLabel(point.key, isLatest);
    }

    if (!label) {
      return null;
    }
    return { x: point.x, label };
  }).filter(Boolean);
  const axisMarkup = buildAxisMarkup(axisEntries, height - paddingBottom, height - 4);
  const tooltipPoints = plotted.map((point) => `
    <circle
      class="startup-line-hit"
      cx="${point.x}"
      cy="${point.y}"
      r="8"
      tabindex="0"
      data-tooltip-label="${point.label}"
      data-tooltip-value="${formatNumber(point.value, labelDigits)}"
      aria-label="${point.label} ${formatNumber(point.value, labelDigits)}"
    ></circle>
  `).join("");

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
        <div class="startup-chart-summary">
          <span class="startup-chart-summary-item is-blue">최저점: ${formatSummaryValue(minPoint)}</span>
          <span class="startup-chart-summary-item is-red">최고점: ${formatSummaryValue(maxPoint)}</span>
          <span class="startup-chart-summary-item is-yellow">최근: ${formatSummaryValue(latestPoint)}</span>
        </div>
      </div>
      <div class="startup-line-chart">
        <div class="startup-line-tooltip" hidden>
          <div class="startup-line-tooltip-label"></div>
          <div class="startup-line-tooltip-value"></div>
        </div>
        <svg class="startup-line-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <line class="startup-line-grid" x1="${paddingLeft}" y1="${height - paddingBottom}" x2="${width - paddingRight}" y2="${height - paddingBottom}"></line>
          ${referenceY === null ? "" : `<line class="startup-line-reference" x1="${paddingLeft}" y1="${referenceY}" x2="${width - paddingRight}" y2="${referenceY}"></line>`}
          ${referenceY === null ? "" : `<text class="startup-line-reference-label" x="${width - paddingRight}" y="${Math.max(12, referenceY - 6)}">(2015=100)</text>`}
          <path class="startup-line-path" d="${path}" style="stroke:${color};"></path>
          ${plotted
            .map(
              (point, index) => {
                const isMinPoint = point.key === minPoint.key;
                const isMaxPoint = point.key === maxPoint.key;
                const isFirstPoint = point.key === firstPoint.key;
                const isLatestPoint = point.key === latestPoint.key;
                const pointColor = isMaxPoint
                  ? "#d04a42"
                  : isMinPoint
                    ? "#2c7be5"
                    : isFirstPoint
                      ? "#94a3b8"
                      : color;
                const labelColor = isLatestPoint ? "#f4b400" : pointColor;
                const pointFill = isLatestPoint ? "#f4b400" : pointColor;
                const pointRadius = isLatestPoint ? 5 : 4;
                const labelY = isMinPoint
                  ? Math.min(height - paddingBottom - 6, point.y + 14)
                  : index % 2 === 0
                    ? Math.max(12, point.y - 10)
                    : Math.min(height - paddingBottom - 6, point.y + 14);
                const labelAnchor = isFirstPoint ? "start" : isLatestPoint ? "end" : "middle";
                const labelDx = isFirstPoint ? 6 : isLatestPoint ? -6 : 0;

                return `
                ${highlightKeys.has(point.key) ? `<text class="startup-line-value" x="${point.x}" y="${labelY}" dx="${labelDx}" style="fill:${labelColor};font-weight:${isLatestPoint ? 800 : 700};text-anchor:${labelAnchor};">${formatNumber(point.value, labelDigits)}</text>` : ""}
                ${highlightKeys.has(point.key) ? `<circle class="startup-line-point" cx="${point.x}" cy="${point.y}" r="${isLatestPoint ? 4.2 : 3.5}" style="fill:${pointFill};stroke-width:${isLatestPoint ? 2 : 1.6};"></circle>` : ""}
              `;
              },
            )
            .join("")}
          ${tooltipPoints}
          ${axisMarkup}
        </svg>
      </div>
    </article>
  `;
}

function renderBusinessCharts() {
  const charts = document.getElementById("business-charts");

  if (!businessSeries.length && !businessCompositeSeries.length) {
    charts.innerHTML = "";
    return;
  }

  charts.innerHTML = [
    renderBusinessLineChart({
      title: "중소기업 경기동행종합지수 순환변동치",
      points: getBusinessChartSeries(),
      color: "#143f6b",
    }),
  ]
    .filter(Boolean)
    .join("");

  bindLineChartTooltips(charts);
}

function renderProductionSummary() {
  const summary = document.getElementById("production-summary");

  if (!productionSeries.length && !serviceProductionSeries.length) {
    if (!businessHasLoaded && !productionLoadError) {
      summary.innerHTML = `
        <div class="business-summary-empty">생산지수 데이터를 불러오는 중입니다.</div>
      `;
      return;
    }

    summary.innerHTML = `
      <div class="business-summary-empty">${productionLoadError || "로컬 JSON 데이터 구성을 확인해 주세요."}</div>
    `;
    return;
  }

  const current = productionSeries[productionSeries.length - 1];
  const previousYear = getPreviousYearProductionRecord(current?.key);
  const currentService = serviceProductionSeries[serviceProductionSeries.length - 1];
  const previousServiceYear = getPreviousYearServiceProductionRecord(currentService?.key);
  const currentProductionDelta = formatProductionYoYGrowth(current?.value, previousYear?.value);
  const currentServiceDelta = formatProductionYoYGrowth(currentService?.value, previousServiceYear?.value);

  summary.innerHTML = `
    <div class="business-summary-caption">최신 수치</div>
    <div class="business-summary-inline-grid">
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatQuarterCardPeriod(current?.key)} 제조업 생산지수</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatProductionValue(current?.value, current?.unit)}</div>
          ${currentProductionDelta ? `<div class="business-inline-delta">${currentProductionDelta}</div>` : ""}
        </div>
      </div>
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatQuarterCardPeriod(currentService?.key)} 서비스업 생산지수</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatProductionValue(currentService?.value, currentService?.unit)}</div>
          ${currentServiceDelta ? `<div class="business-inline-delta">${currentServiceDelta}</div>` : ""}
        </div>
      </div>
    </div>
  `;
}

function renderProductionLineChart({ title, subtitle = "", unitLabel = "", points, color = "#1b7f5a" }) {
  if (!points.length) {
    return "";
  }

  const values = points.map((item) => item.value ?? 0);
  const minValue = Math.min(...values) - 3;
  const maxValue = Math.max(...values) + 3;
  const range = maxValue - minValue || 1;
  const width = 320;
  const height = 150;
  const paddingLeft = 32;
  const paddingRight = 32;
  const paddingTop = 26;
  const paddingBottom = 28;
  const usableWidth = width - paddingLeft - paddingRight;
  const usableHeight = height - paddingTop - paddingBottom;

  const plotted = points.map((item, index) => ({
    x: points.length === 1 ? (paddingLeft + width - paddingRight) / 2 : paddingLeft + (usableWidth / (points.length - 1)) * index,
    y: paddingTop + (1 - (item.value - minValue) / range) * usableHeight,
    value: item.value,
    label: formatQuarterPeriod(item.key),
    key: item.key,
  }));
  const latestPoint = plotted[plotted.length - 1];
  const minPoint = plotted.reduce((lowest, point) => (point.value < lowest.value ? point : lowest), plotted[0]);
  const maxPoint = plotted.reduce((highest, point) => (point.value > highest.value ? point : highest), plotted[0]);
  const firstPoint = plotted[0];
  const highlightKeys = new Set([firstPoint.key, minPoint.key, maxPoint.key, latestPoint.key]);
  const path = plotted
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
  const formatSummaryValue = (point) => {
    const directionMark = point.value > 0 ? "+" : point.value < 0 ? "-" : "";
    return `${directionMark}${formatNumber(Math.abs(point.value), 1)}%${formatQuarterPointCaption(point.key)}`;
  };
  const firstYearFull = Number(String(plotted[0]?.key || "").slice(0, 4));
  const yearSpan = getYearSpanFromKeys(plotted[0]?.key, plotted[plotted.length - 1]?.key);
  const yearStep = yearSpan > 5 ? 2 : 1;
  const axisEntries = plotted.map((point, index) => {
    const isLatest = index === plotted.length - 1;
    const pointYearFull = Number(String(point.key || "").slice(0, 4));
    const pointYearShort = String(point.key || "").slice(2, 4);
    const pointQuarter = Number(String(point.key || "").slice(4, 6));
    let label = "";

    if (yearSpan > 5) {
      if (pointQuarter === 1 && Number.isFinite(pointYearFull) && ((pointYearFull - firstYearFull) % yearStep === 0)) {
        label = pointYearShort;
      } else if (isLatest && pointQuarter !== 1) {
        label = pointYearShort;
      }
    } else {
      label = formatQuarterAxisLabel(point.key, isLatest);
    }

    if (!label) {
      return null;
    }
    return { x: point.x, label };
  }).filter(Boolean);
  const axisMarkup = buildAxisMarkup(axisEntries, height - paddingBottom, height - 4);
  const tooltipPoints = plotted.map((point) => `
    <circle
      class="startup-line-hit"
      cx="${point.x}"
      cy="${point.y}"
      r="8"
      tabindex="0"
      data-tooltip-label="${point.label}"
      data-tooltip-value="${point.value > 0 ? "+" : point.value < 0 ? "-" : ""}${formatNumber(Math.abs(point.value), 1)}%"
      aria-label="${point.label} ${point.value > 0 ? "+" : point.value < 0 ? "-" : ""}${formatNumber(Math.abs(point.value), 1)}%"
    ></circle>
  `).join("");

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        ${subtitle ? `<div class="startup-chart-subtitle startup-chart-subtitle--strong">${subtitle}</div>` : ""}
        <div class="startup-chart-title">${title}</div>
        <div class="startup-chart-summary">
          <span class="startup-chart-summary-item is-blue">최저점: ${formatSummaryValue(minPoint)}</span>
          <span class="startup-chart-summary-item is-red">최고점: ${formatSummaryValue(maxPoint)}</span>
          <span class="startup-chart-summary-item is-yellow">최근: ${formatSummaryValue(latestPoint)}</span>
        </div>
      </div>
      <div class="startup-line-chart">
        ${unitLabel ? `<div class="startup-line-unit">(단위: ${unitLabel})</div>` : ""}
        <div class="startup-line-tooltip" hidden>
          <div class="startup-line-tooltip-label"></div>
          <div class="startup-line-tooltip-value"></div>
        </div>
        <svg class="startup-line-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <line class="startup-line-grid" x1="${paddingLeft}" y1="${height - paddingBottom}" x2="${width - paddingRight}" y2="${height - paddingBottom}"></line>
          <path class="startup-line-path" d="${path}" style="stroke:${color};"></path>
          ${plotted
            .map((point, index) => {
              const isMinPoint = point.key === minPoint.key;
              const isMaxPoint = point.key === maxPoint.key;
              const isFirstPoint = point.key === firstPoint.key;
              const isLatestPoint = point.key === latestPoint.key;
              const pointColor = isMaxPoint
                ? "#d04a42"
                : isMinPoint
                  ? "#2c7be5"
                  : isFirstPoint
                    ? "#94a3b8"
                    : color;
              const labelColor = isLatestPoint ? "#f4b400" : pointColor;
              const pointFill = isLatestPoint ? "#f4b400" : pointColor;
              const pointRadius = isLatestPoint ? 5 : 4;
              const labelY = index % 2 === 0
                ? Math.max(12, point.y - 10)
                : Math.min(height - paddingBottom - 6, point.y + 14);
              const labelAnchor = isFirstPoint ? "start" : isLatestPoint ? "end" : "middle";
              const labelDx = isFirstPoint ? 6 : isLatestPoint ? -6 : 0;

              return `
                ${highlightKeys.has(point.key) ? `<text class="startup-line-value" x="${point.x}" y="${labelY}" dx="${labelDx}" style="fill:${labelColor};font-weight:${isLatestPoint ? 800 : 700};text-anchor:${labelAnchor};">${point.value > 0 ? "+" : point.value < 0 ? "-" : ""}${formatNumber(Math.abs(point.value), 1)}%</text>` : ""}
                ${highlightKeys.has(point.key) ? `<circle class="startup-line-point" cx="${point.x}" cy="${point.y}" r="${isLatestPoint ? 4.2 : 3.5}" style="fill:${pointFill};stroke-width:${isLatestPoint ? 2 : 1.6};"></circle>` : ""}
              `;
            })
            .join("")}
          ${tooltipPoints}
          ${axisMarkup}
        </svg>
      </div>
    </article>
  `;
}

function renderProductionCharts() {
  const charts = document.getElementById("production-charts");

  if (!productionSeries.length && !serviceProductionSeries.length) {
    charts.innerHTML = "";
    return;
  }

  charts.innerHTML = [
    renderProductionLineChart({
      title: "중소기업 제조업 생산지수",
      subtitle: "전년동기대비 증가율",
      unitLabel: "%",
      points: getProductionYoYSeries(),
      color: "#1b7f5a",
    }),
    renderProductionLineChart({
      title: "중소기업 서비스업 생산지수",
      subtitle: "전년동기대비 증가율",
      unitLabel: "%",
      points: getServiceProductionYoYSeries(),
      color: "#8a5cf6",
    }),
  ]
    .filter(Boolean)
    .join("");

  bindLineChartTooltips(charts);
}

function renderOperationSummary() {
  const summary = document.getElementById("operation-summary");

  if (!operationRateSeries.length) {
    if (!businessHasLoaded && !operationLoadError) {
      summary.innerHTML = `
        <div class="business-summary-empty">평균가동률 데이터를 불러오는 중입니다.</div>
      `;
      return;
    }

    summary.innerHTML = `
      <div class="business-summary-empty">${operationLoadError || "로컬 JSON 데이터 구성을 확인해 주세요."}</div>
    `;
    return;
  }

  const current = operationRateSeries[operationRateSeries.length - 1];
  const previousYear = getPreviousYearOperationRecord(current?.key);
  const currentOperationDelta = formatOperationRateDelta(current?.value, previousYear?.value);

  summary.innerHTML = `
    <div class="business-summary-caption">최신 수치</div>
    <div class="business-summary-inline-grid">
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatBusinessPeriod(current?.key)} 중소제조업 평균가동률(제조업 계절조정)</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatProductionValue(current?.value, current?.unit)}</div>
          ${currentOperationDelta ? `<div class="business-inline-delta">${currentOperationDelta}</div>` : ""}
        </div>
      </div>
    </div>
  `;
}

function renderOperationCharts() {
  const charts = document.getElementById("operation-charts");

  if (!operationRateSeries.length) {
    charts.innerHTML = "";
    return;
  }

  charts.innerHTML = renderBusinessLineChart({
    title: "중소제조업 평균가동률",
    points: getOperationRateChartSeries(),
    color: "#c66a1d",
  });

  bindLineChartTooltips(charts);
}

function renderFeelingSummary() {
  const summary = document.getElementById("feeling-summary");

  if (!summary) {
    return;
  }

  if (!feelingActualSeries.length && !feelingOutlookSeries.length) {
    summary.innerHTML = `
      <div class="business-summary-empty">${feelingLoadError ? "기업심리지수 데이터를 불러오지 못했습니다." : "기업심리지수 데이터를 불러오는 중입니다."}</div>
    `;
    return;
  }

  const selectedActualLabel = getFeelingSelectedLabel();
  const selectedOutlookLabel = getFeelingSelectedLabel();
  const currentActual = feelingActualSeries.filter((item) => item.bsiBaseName === selectedActualLabel).slice(-1)[0] || null;
  const actualPrevious = currentActual
    ? getPreviousRecordFromSeries(feelingActualSeries, currentActual.key, "bsiBaseName", selectedActualLabel)
    : null;
  const currentOutlook = feelingOutlookSeries.filter((item) => item.bsiBaseName === selectedOutlookLabel).slice(-1)[0] || null;
  const outlookPrevious = currentOutlook
    ? getPreviousRecordFromSeries(feelingOutlookSeries, currentOutlook.key, "bsiBaseName", selectedOutlookLabel)
    : null;

  if (!currentActual && !currentOutlook) {
    summary.innerHTML = "";
    return;
  }

  summary.innerHTML = `
    <div class="business-summary-caption">최신 수치</div>
    <div class="business-summary-inline-grid">
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatBusinessPeriod(currentActual?.key)} ${selectedActualLabel} 실적</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatBusinessCycleValue(currentActual?.value, currentActual?.unit)}</div>
          ${actualPrevious ? `<div class="business-inline-delta">${formatBusinessCycleDelta(currentActual?.value, actualPrevious?.value, "전월대비")}</div>` : ""}
        </div>
      </div>
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatBusinessPeriod(currentOutlook?.key)} ${selectedOutlookLabel} 전망</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatBusinessCycleValue(currentOutlook?.value, currentOutlook?.unit)}</div>
          ${outlookPrevious ? `<div class="business-inline-delta">${formatBusinessCycleDelta(currentOutlook?.value, outlookPrevious?.value, "전월대비")}</div>` : ""}
        </div>
      </div>
    </div>
  `;
  initFeelingBsiSelect();
  initFeelingRangeSelects();
}

function renderFeelingCharts() {
  const charts = document.getElementById("feeling-charts");

  if (!charts) {
    return;
  }

  if (!feelingActualSeries.length && !feelingOutlookSeries.length) {
    charts.innerHTML = "";
    return;
  }

  const selectedLabel = getFeelingSelectedLabel();

  charts.innerHTML = [
    renderBusinessLineChart({
      title: `중소기업 ${selectedLabel} 실적`,
      points: getFeelingChartSeries(),
      color: "#5c6ac4",
      labelDigits: 0,
      summaryDigits: 0,
    }),
    renderBusinessLineChart({
      title: `중소기업 ${selectedLabel} 전망`,
      points: getFeelingOutlookChartSeries(),
      color: "#3b82f6",
      labelDigits: 0,
      summaryDigits: 0,
    }),
    `
      <article class="startup-chart-card startup-note-card feeling-note-card">
        <div class="startup-note-text">${getFeelingFootnote(selectedLabel)}</div>
        ${getFeelingFootnoteExtra(selectedLabel) ? `<div class="startup-note-text startup-note-text--sub">${getFeelingFootnoteExtra(selectedLabel)}</div>` : ""}
      </article>
    `,
  ]
    .filter(Boolean)
    .join("");

  bindLineChartTooltips(charts);
}

async function refreshFeelingData() {
  const button = document.getElementById("feeling-refresh-button");
  const previousText = button?.textContent || "새로고침";
  if (button) {
    button.disabled = true;
    button.textContent = "갱신 중";
  }

  try {
    feelingIsLoading = true;
    feelingLoadError = "";
    const [actualRows, outlookRows] = await Promise.all([
      loadFeelingActualData(),
      loadFeelingOutlookData(),
    ]);
    feelingActualSeries = actualRows;
    feelingOutlookSeries = outlookRows;
    feelingHasLoaded = true;
    initFeelingBsiSelect();
    renderFeelingSummary();
    renderFeelingCharts();
  } catch (error) {
    feelingActualSeries = [];
    feelingOutlookSeries = [];
    feelingLoadError = `오류: ${error.message}`;
    feelingHasLoaded = false;
    initFeelingBsiSelect();
    renderFeelingSummary();
    renderFeelingCharts();
  } finally {
    feelingIsLoading = false;
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

function renderManagementSummary() {
  // Management tab no longer uses separate summary cards.
}

function renderManagementSmeRecentChart() {
  const years = getManagementRecentYears();
  if (!years.length) {
    return "";
  }

  const values = years.map((year) => getManagementRecord(year, "중소기업")?.value ?? 0);
  const minValue = Math.min(...values, 0);
  const maxValue = Math.max(...values, 0);
  const range = maxValue - minValue || 1;
  const width = 320;
  const height = 190;
  const paddingX = 18;
  const paddingTop = 24;
  const paddingBottom = 42;
  const usableWidth = width - paddingX * 2;
  const usableHeight = height - paddingTop - paddingBottom;
  const zeroY = paddingTop + (1 - (0 - minValue) / range) * usableHeight;
  const groupWidth = usableWidth / years.length;
  const barWidth = Math.min(42, groupWidth - 24);

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">최근 3년 중소기업 추이</div>
      </div>
      <div class="management-compare-chart">
        <svg class="management-compare-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
          <line class="management-zero-line" x1="${paddingX}" y1="${zeroY}" x2="${width - paddingX}" y2="${zeroY}"></line>
          ${years.map((year, groupIndex) => {
            const groupStart = paddingX + groupWidth * groupIndex;
            const value = getManagementRecord(year, "중소기업")?.value ?? 0;
            const barHeight = Math.abs((value / range) * usableHeight);
            const x = groupStart + (groupWidth - barWidth) / 2;
            const y = value >= 0 ? zeroY - barHeight : zeroY;
            const labelY = value >= 0 ? Math.max(12, y - 6) : Math.min(height - 24, y + barHeight + 12);

            return `
              <g>
                <rect x="${x}" y="${y}" width="${barWidth}" height="${Math.max(2, barHeight)}" rx="6" ry="6" fill="#ff7a59"></rect>
                <text class="management-bar-value is-sme" x="${x + barWidth / 2}" y="${labelY}">${formatNumber(value, 2)}%</text>
                <text class="management-group-label" x="${groupStart + groupWidth / 2}" y="${height - 4}">${year}</text>
              </g>
            `;
          }).join("")}
        </svg>
      </div>
    </article>
  `;
}

function renderManagementCompareChart() {
  const year = getManagementSelectedYear();
  if (!year) {
    return "";
  }

  const categories = [
    { key: "종합", label: "전산업", color: "#6b8db3" },
    { key: "대기업", label: "대기업", color: "#2c7be5" },
    { key: "중소기업", label: "중소기업", color: "#ff7a59" },
  ];
  const values = categories.map((category) => getManagementRecord(year, category.key)?.value ?? 0);
  const minValue = Math.min(...values, 0);
  const maxValue = Math.max(...values, 0);
  const range = maxValue - minValue || 1;
  const width = 320;
  const height = 190;
  const paddingX = 18;
  const paddingTop = 24;
  const paddingBottom = 42;
  const usableWidth = width - paddingX * 2;
  const usableHeight = height - paddingTop - paddingBottom;
  const zeroY = paddingTop + (1 - (0 - minValue) / range) * usableHeight;
  const groupWidth = usableWidth / categories.length;
  const barWidth = Math.min(42, groupWidth - 24);

  const chartBody = `
    <div class="management-compare-chart">
      <svg class="management-compare-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
        <line class="management-zero-line" x1="${paddingX}" y1="${zeroY}" x2="${width - paddingX}" y2="${zeroY}"></line>
        ${categories.map((category, index) => {
          const value = getManagementRecord(year, category.key)?.value ?? 0;
          const barHeight = Math.abs((value / range) * usableHeight);
          const groupStart = paddingX + groupWidth * index;
          const x = groupStart + (groupWidth - barWidth) / 2;
          const y = value >= 0 ? zeroY - barHeight : zeroY;
          const labelY = value >= 0 ? Math.max(12, y - 6) : Math.min(height - 24, y + barHeight + 12);

          return `
            <g>
              <rect x="${x}" y="${y}" width="${barWidth}" height="${Math.max(2, barHeight)}" rx="6" ry="6" fill="${category.color}"></rect>
              <text class="management-bar-value${category.key === "중소기업" ? " is-sme" : ""}" x="${x + barWidth / 2}" y="${labelY}">${formatNumber(value, 2)}%</text>
              <text class="management-group-label${category.key === "중소기업" ? " is-sme" : ""}" x="${groupStart + groupWidth / 2}" y="${height - 4}">${category.label}</text>
            </g>
          `;
        }).join("")}
      </svg>
    </div>
  `;

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${year} 전산업·대기업·중소기업 비교</div>
      </div>
      ${chartBody}
    </article>
  `;
}

function renderManagementTrendChart(series) {
  const years = getManagementFilteredYears();
  const categories = getManagementVisibleCategoryMeta();
  if (!years.length || !categories.length) {
    return `
      <div class="management-trend-empty">표시할 시계열 데이터가 없습니다.</div>
    `;
  }

  const datasets = categories.map((category) => ({
    ...category,
    points: years.map((year) => ({
      year,
      value: getManagementMetricRecord(series, year, category.key)?.value ?? null,
    })).filter((point) => point.value !== null),
  })).filter((dataset) => dataset.points.length);

  if (!datasets.length) {
    return `
      <div class="management-trend-empty">선택한 조건에 해당하는 시계열 데이터가 없습니다.</div>
    `;
  }

  const values = datasets.flatMap((dataset) => dataset.points.map((point) => point.value));
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const width = 320;
  const height = 176;
  const paddingLeft = 26;
  const paddingRight = 18;
  const paddingTop = 18;
  const paddingBottom = 28;
  const usableWidth = width - paddingLeft - paddingRight;
  const usableHeight = height - paddingTop - paddingBottom;
  const range = maxValue - minValue || 1;
  const firstYear = Number(years[0]);
  const lastYear = Number(years[years.length - 1]);
  const yearSpan = Math.max(0, lastYear - firstYear + 1);
  const yearStep = yearSpan > 5 ? 2 : 1;
  const baselineY = paddingTop + (1 - ((0 - minValue) / range)) * usableHeight;

  const xForIndex = (index) => {
    if (years.length === 1) {
      return paddingLeft + usableWidth / 2;
    }
    return paddingLeft + (usableWidth / (years.length - 1)) * index;
  };
  const yForValue = (value) => paddingTop + (1 - ((value - minValue) / range)) * usableHeight;
  const renderMarker = (dataset, x, y) => {
    if (dataset.key === "종합") {
      return `<rect class="management-trend-point management-trend-point--square" x="${x - 3.3}" y="${y - 3.3}" width="6.6" height="6.6" style="fill:${dataset.color};"></rect>`;
    }

    if (dataset.key === "대기업") {
      return `<path class="management-trend-point management-trend-point--triangle" d="M ${x} ${y - 4.2} L ${x + 4.3} ${y + 3.4} L ${x - 4.3} ${y + 3.4} Z" style="fill:${dataset.color};"></path>`;
    }

    return `<circle class="management-trend-point" cx="${x}" cy="${y}" r="3.4" style="fill:${dataset.color};"></circle>`;
  };

  const axisMarkup = years
    .map((year, index) => {
      const yearNumber = Number(year);
      const showLabel = years.length <= 2
        || index === 0
        || index === years.length - 1
        || ((yearNumber - firstYear) % yearStep === 0);
      if (!showLabel) {
        return "";
      }

      const x = xForIndex(index);
      return `
        <line class="startup-line-axis-tick" x1="${x}" y1="${height - paddingBottom}" x2="${x}" y2="${height - paddingBottom + 5}"></line>
        <text class="startup-line-axis-label" x="${x}" y="${height - 4}" text-anchor="middle">${String(year).slice(2, 4)}</text>
      `;
    })
    .join("");

  const legendMarkup = datasets
    .map((dataset) => `
      <span class="management-trend-legend-item">
        <span class="management-trend-legend-swatch" style="--trend-color:${dataset.color};"></span>
        <span>${dataset.label}</span>
      </span>
    `)
    .join("");

  const pathMarkup = datasets
    .map((dataset) => {
      const path = dataset.points
        .map((point, index) => {
          const yearIndex = years.indexOf(point.year);
          return `${index === 0 ? "M" : "L"} ${xForIndex(yearIndex)} ${yForValue(point.value)}`;
        })
        .join(" ");
      const markers = dataset.points
        .map((point) => {
          const x = xForIndex(years.indexOf(point.year));
          const y = yForValue(point.value);
          return renderMarker(dataset, x, y);
        })
        .join("");

      return `
        <path class="management-trend-line" d="${path}" style="stroke:${dataset.color};"></path>
        ${markers}
      `;
    })
    .join("");
  const hitMarkup = datasets
    .flatMap((dataset) => dataset.points.map((point) => {
      const yearIndex = years.indexOf(point.year);
      const x = xForIndex(yearIndex);
      const y = yForValue(point.value);
      return `
        <circle
          class="startup-line-hit"
          cx="${x}"
          cy="${y}"
          r="8"
          tabindex="0"
          data-tooltip-label="${point.year}년 ${dataset.label}"
          data-tooltip-value="${formatNumber(point.value, 2)}%"
          aria-label="${point.year}년 ${dataset.label} ${formatNumber(point.value, 2)}%"
        ></circle>
      `;
    }))
    .join("");

  return `
    <div class="management-trend-card">
      <div class="management-trend-head">
        <div class="management-trend-legend">${legendMarkup}</div>
      </div>
      <div class="startup-line-chart management-trend-plot">
        <div class="startup-line-tooltip" hidden>
          <div class="startup-line-tooltip-label"></div>
          <div class="startup-line-tooltip-value"></div>
        </div>
        <svg class="management-trend-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <line class="startup-line-grid" x1="${paddingLeft}" y1="${height - paddingBottom}" x2="${width - paddingRight}" y2="${height - paddingBottom}"></line>
          ${baselineY >= paddingTop && baselineY <= height - paddingBottom ? `<line class="management-zero-line" x1="${paddingLeft}" y1="${baselineY}" x2="${width - paddingRight}" y2="${baselineY}"></line>` : ""}
          ${pathMarkup}
          ${hitMarkup}
          ${axisMarkup}
        </svg>
      </div>
    </div>
  `;
}

function renderManagementCharts() {
  const barCharts = document.getElementById("management-bar-charts");
  const trendCharts = document.getElementById("management-trend-charts");
  if (!barCharts || !trendCharts) {
    return;
  }

  if (!managementGrowthSeries.length && !managementProfitSeries.length && !managementStabilitySeries.length) {
    const errorMarkup = managementLoadError
      ? `<article class="startup-chart-card"><div class="business-summary-empty">${managementLoadError}</div></article>`
      : "";
    barCharts.innerHTML = errorMarkup;
    trendCharts.innerHTML = "";
    return;
  }

  const year = getManagementSelectedYear();
  const renderManagementBarPanel = (title, series) => {
    if (!series.length) {
      return "";
    }

    const categories = [
      { key: "종합", label: "전산업", color: "#6b8db3" },
      { key: "대기업", label: "대기업", color: "#2c7be5" },
      { key: "중소기업", label: "중소기업", color: "#ff7a59" },
    ];
    const values = categories.map((category) => getManagementMetricRecord(series, year, category.key)?.value ?? 0);
    const minValue = Math.min(...values, 0);
    const maxValue = Math.max(...values, 0);
    const range = maxValue - minValue || 1;
    const width = 320;
    const height = 190;
    const paddingX = 18;
    const paddingTop = 24;
    const paddingBottom = 42;
    const usableWidth = width - paddingX * 2;
    const usableHeight = height - paddingTop - paddingBottom;
    const zeroY = paddingTop + (1 - (0 - minValue) / range) * usableHeight;
    const groupWidth = usableWidth / categories.length;
    const barWidth = Math.min(42, groupWidth - 24);

    return `
      <article class="startup-chart-card management-panel-card">
        <div class="startup-chart-head">
          <div class="startup-chart-title">${title}</div>
        </div>
        <div class="management-compare-chart">
          <svg class="management-compare-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
            <line class="management-zero-line" x1="${paddingX}" y1="${zeroY}" x2="${width - paddingX}" y2="${zeroY}"></line>
            ${categories.map((category, index) => {
              const value = getManagementMetricRecord(series, year, category.key)?.value ?? 0;
              const barHeight = Math.abs((value / range) * usableHeight);
              const groupStart = paddingX + groupWidth * index;
              const x = groupStart + (groupWidth - barWidth) / 2;
              const y = value >= 0 ? zeroY - barHeight : zeroY;
              const labelY = value >= 0 ? Math.max(12, y - 6) : Math.min(height - 24, y + barHeight + 12);

              return `
                <g>
                  <rect x="${x}" y="${y}" width="${barWidth}" height="${Math.max(2, barHeight)}" rx="6" ry="6" fill="${category.color}"></rect>
                  <text class="management-bar-value${category.key === "중소기업" ? " is-sme" : ""}" x="${x + barWidth / 2}" y="${labelY}">${formatNumber(value, 2)}%</text>
                  <text class="management-group-label${category.key === "중소기업" ? " is-sme" : ""}" x="${groupStart + groupWidth / 2}" y="${height - 4}">${category.label}</text>
                </g>
              `;
            }).join("")}
          </svg>
        </div>
      </article>
    `;
  };

  const renderManagementTrendPanel = (title, series) => {
    if (!series.length) {
      return "";
    }

    return `
      <article class="startup-chart-card management-panel-card">
        <div class="startup-chart-head">
          <div class="startup-chart-title">${title}</div>
        </div>
        ${renderManagementTrendChart(series)}
      </article>
    `;
  };

  barCharts.innerHTML = [
    renderManagementBarPanel("성장성 지표: 매출액 증가율", managementGrowthSeries),
    renderManagementBarPanel("수익성 지표: 매출액영업이익률", managementProfitSeries),
    renderManagementBarPanel("안정성 지표: 부채비율", managementStabilitySeries),
  ]
    .filter(Boolean)
    .join("");

  trendCharts.innerHTML = [
    renderManagementTrendPanel("성장성 지표: 매출액 증가율", managementGrowthSeries),
    renderManagementTrendPanel("수익성 지표: 매출액영업이익률", managementProfitSeries),
    renderManagementTrendPanel("안정성 지표: 부채비율", managementStabilitySeries),
  ]
    .filter(Boolean)
    .join("");

  bindLineChartTooltips(trendCharts);
}

function renderManagementMetricSummary(containerId, series) {
  const summary = document.getElementById(containerId);
  if (!summary) {
    return;
  }
  summary.innerHTML = "";
}

function renderManagementMetricSmeRecentChart(series, title) {
  const years = getManagementRecentYears();
  if (!years.length) {
    return "";
  }

  const values = years.map((year) => getManagementMetricRecord(series, year, "중소기업")?.value ?? 0);
  const minValue = Math.min(...values, 0);
  const maxValue = Math.max(...values, 0);
  const range = maxValue - minValue || 1;
  const width = 320;
  const height = 190;
  const paddingX = 18;
  const paddingTop = 24;
  const paddingBottom = 42;
  const usableWidth = width - paddingX * 2;
  const usableHeight = height - paddingTop - paddingBottom;
  const zeroY = paddingTop + (1 - (0 - minValue) / range) * usableHeight;
  const groupWidth = usableWidth / years.length;
  const barWidth = Math.min(42, groupWidth - 24);

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="management-compare-chart">
        <svg class="management-compare-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
          <line class="management-zero-line" x1="${paddingX}" y1="${zeroY}" x2="${width - paddingX}" y2="${zeroY}"></line>
          ${years.map((year, groupIndex) => {
            const groupStart = paddingX + groupWidth * groupIndex;
            const value = getManagementMetricRecord(series, year, "중소기업")?.value ?? 0;
            const barHeight = Math.abs((value / range) * usableHeight);
            const x = groupStart + (groupWidth - barWidth) / 2;
            const y = value >= 0 ? zeroY - barHeight : zeroY;
            const labelY = value >= 0 ? Math.max(12, y - 6) : Math.min(height - 24, y + barHeight + 12);

            return `
              <g>
                <rect x="${x}" y="${y}" width="${barWidth}" height="${Math.max(2, barHeight)}" rx="6" ry="6" fill="#ff7a59"></rect>
                <text class="management-bar-value is-sme" x="${x + barWidth / 2}" y="${labelY}">${formatNumber(value, 2)}%</text>
                <text class="management-group-label" x="${groupStart + groupWidth / 2}" y="${height - 4}">${year}</text>
              </g>
            `;
          }).join("")}
        </svg>
      </div>
    </article>
  `;
}

function renderManagementMetricCompareChart(series, title) {
  const year = getManagementSelectedYear();
  if (!year) {
    return "";
  }

  const categories = [
    { key: "종합", label: "전산업", color: "#6b8db3" },
    { key: "대기업", label: "대기업", color: "#2c7be5" },
    { key: "중소기업", label: "중소기업", color: "#ff7a59" },
  ];
  const values = categories.map((category) => getManagementMetricRecord(series, year, category.key)?.value ?? 0);
  const minValue = Math.min(...values, 0);
  const maxValue = Math.max(...values, 0);
  const range = maxValue - minValue || 1;
  const width = 320;
  const height = 190;
  const paddingX = 18;
  const paddingTop = 24;
  const paddingBottom = 42;
  const usableWidth = width - paddingX * 2;
  const usableHeight = height - paddingTop - paddingBottom;
  const zeroY = paddingTop + (1 - (0 - minValue) / range) * usableHeight;
  const groupWidth = usableWidth / categories.length;
  const barWidth = Math.min(42, groupWidth - 24);

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="management-compare-chart">
        <svg class="management-compare-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
          <line class="management-zero-line" x1="${paddingX}" y1="${zeroY}" x2="${width - paddingX}" y2="${zeroY}"></line>
          ${categories.map((category, index) => {
            const value = getManagementMetricRecord(series, year, category.key)?.value ?? 0;
            const barHeight = Math.abs((value / range) * usableHeight);
            const groupStart = paddingX + groupWidth * index;
            const x = groupStart + (groupWidth - barWidth) / 2;
            const y = value >= 0 ? zeroY - barHeight : zeroY;
            const labelY = value >= 0 ? Math.max(12, y - 6) : Math.min(height - 24, y + barHeight + 12);

            return `
              <g>
                <rect x="${x}" y="${y}" width="${barWidth}" height="${Math.max(2, barHeight)}" rx="6" ry="6" fill="${category.color}"></rect>
                <text class="management-bar-value${category.key === "중소기업" ? " is-sme" : ""}" x="${x + barWidth / 2}" y="${labelY}">${formatNumber(value, 2)}%</text>
                <text class="management-group-label${category.key === "중소기업" ? " is-sme" : ""}" x="${groupStart + groupWidth / 2}" y="${height - 4}">${category.label}</text>
              </g>
            `;
          }).join("")}
        </svg>
      </div>
    </article>
  `;
}

function renderManagementProfitSummary() {
  renderManagementMetricSummary("management-profit-summary", managementProfitSeries);
}

function renderManagementProfitCharts() {
  const charts = document.getElementById("management-profit-charts");
  if (!charts) {
    return;
  }

  if (!managementProfitSeries.length) {
    charts.innerHTML = "";
    return;
  }

  charts.innerHTML = [
    renderManagementMetricSmeRecentChart(managementProfitSeries, "최근 3년 중소기업 추이"),
    renderManagementMetricCompareChart(managementProfitSeries, `${getManagementSelectedYear()} 전산업·대기업·중소기업 비교`),
  ].join("");
}

function renderManagementStabilitySummary() {
  renderManagementMetricSummary("management-stability-summary", managementStabilitySeries);
}

function renderManagementStabilityCharts() {
  const charts = document.getElementById("management-stability-charts");
  if (!charts) {
    return;
  }

  if (!managementStabilitySeries.length) {
    charts.innerHTML = "";
    return;
  }

  charts.innerHTML = [
    renderManagementMetricSmeRecentChart(managementStabilitySeries, "최근 3년 중소기업 추이"),
    renderManagementMetricCompareChart(managementStabilitySeries, `${getManagementSelectedYear()} 전산업·대기업·중소기업 비교`),
  ].join("");
}

async function refreshManagementData() {
  const button = document.getElementById("management-refresh-button");
  const previousText = button?.textContent || "새로고침";

  if (button) {
    button.disabled = true;
    button.textContent = "갱신 중";
  }

  try {
    managementIsLoading = true;
    managementLoadError = "";
    managementHasLoaded = false;
    const [growthRows, profitRows, stabilityRows] = await Promise.all([
      loadManagementGrowthData(),
      loadManagementProfitData(),
      loadManagementStabilityData(),
    ]);
    managementGrowthSeries = growthRows;
    managementProfitSeries = profitRows;
    managementStabilitySeries = stabilityRows;
    managementHasLoaded = true;
    initManagementYearSelect();
    initManagementControls();
    renderManagementSummary();
    renderManagementCharts();
    renderManagementProfitSummary();
    renderManagementProfitCharts();
    renderManagementStabilitySummary();
    renderManagementStabilityCharts();
  } catch (error) {
    managementGrowthSeries = [];
    managementProfitSeries = [];
    managementStabilitySeries = [];
    managementLoadError = `오류: ${error.message}`;
    managementHasLoaded = false;
    initManagementYearSelect();
    initManagementControls();
    renderManagementSummary();
    renderManagementCharts();
    renderManagementProfitSummary();
    renderManagementProfitCharts();
    renderManagementStabilitySummary();
    renderManagementStabilityCharts();
  } finally {
    managementIsLoading = false;
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
}

function renderLoanSummary() {
  const summary = document.getElementById("loan-summary");
  const delinquencySummary = document.getElementById("loan-delinquency-summary");
  if (!summary) {
    return;
  }

  if (!loanSeries.length && !delinquencySeries.length) {
    summary.innerHTML = `<div class="business-summary-empty">대출 데이터를 불러오지 못했습니다.</div>`;
    if (delinquencySummary) {
      delinquencySummary.innerHTML = `<div class="business-summary-empty">${loanLoadError || "구글 시트 대출 데이터 구성을 확인해 주세요."}</div>`;
    }
    return;
  }

  const filteredLoanSeries = getFilteredLoanSeries();
  const filteredDelinquencySeries = getFilteredDelinquencyMonthlySeries();
  const latest = filteredLoanSeries[filteredLoanSeries.length - 1] || loanSeries[loanSeries.length - 1] || null;
  if (!latest) {
    summary.innerHTML = "";
    return;
  }

  const previousSameMonth = getPreviousYearSameMonthLoanPoint(latest.date);
  const balanceGrowth = formatLoanYoYGrowth(latest.balance, previousSameMonth?.balance);
  const netIncreaseGrowth = formatLoanYoYGrowthWithDelta(latest.netIncrease, previousSameMonth?.netIncrease);
  const latestDelinquency = filteredDelinquencySeries[filteredDelinquencySeries.length - 1]
    || delinquencySeries[delinquencySeries.length - 1]
    || null;
  const previousDelinquency = getPreviousYearSameMonthDelinquencyPoint(latestDelinquency?.date);
  const delinquencyDelta = formatRateDelta(latestDelinquency?.smeRate, previousDelinquency?.smeRate);
  const corporateDelta = formatRateDelta(latestDelinquency?.corporateRate, previousDelinquency?.corporateRate);
  const solePropDelta = formatRateDelta(latestDelinquency?.solePropRate, previousDelinquency?.solePropRate);
  const delinquencyDateLabel = latestDelinquency?.date ? formatYearMonth(latestDelinquency.date) : "-";

  summary.innerHTML = `
    <div class="business-summary-caption">최신 수치</div>
    <div class="business-summary-inline-grid">
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatYearMonth(latest.date)} 은행권 중소기업대출잔액</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatLoanValue(latest.balance)}</div>
          ${balanceGrowth ? `<div class="business-inline-delta">${balanceGrowth}</div>` : ""}
        </div>
      </div>
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatYearMonth(latest.date)} 은행권 중소기업대출 순증</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatLoanValue(latest.netIncrease)}</div>
          ${netIncreaseGrowth ? `<div class="business-inline-delta">${netIncreaseGrowth}</div>` : ""}
        </div>
      </div>
    </div>
  `;

  if (delinquencySummary) {
    delinquencySummary.innerHTML = `
      <div class="business-summary-caption">최신 수치</div>
      <div class="business-summary-inline-grid">
        <div class="business-summary-inline-item">
          <div class="startup-kicker">${delinquencyDateLabel} 중소기업 대출 연체율</div>
          <div class="business-inline-value">
            <div class="business-inline-number">${formatRateValue(latestDelinquency?.smeRate)}</div>
            ${delinquencyDelta ? `<div class="business-inline-delta">${delinquencyDelta}</div>` : ""}
          </div>
        </div>
        <div class="business-summary-inline-item">
          <div class="startup-kicker">${delinquencyDateLabel} 중소법인 대출 연체율</div>
          <div class="business-inline-value">
            <div class="business-inline-number">${formatRateValue(latestDelinquency?.corporateRate)}</div>
            ${corporateDelta ? `<div class="business-inline-delta">${corporateDelta}</div>` : ""}
          </div>
        </div>
        <div class="business-summary-inline-item">
          <div class="startup-kicker">${delinquencyDateLabel} 개인사업자 대출 연체율</div>
          <div class="business-inline-value">
            <div class="business-inline-number">${formatRateValue(latestDelinquency?.solePropRate)}</div>
            ${solePropDelta ? `<div class="business-inline-delta">${solePropDelta}</div>` : ""}
          </div>
        </div>
      </div>
    `;
  }
}

function renderLoanBarChart({
  title,
  subtitle = "",
  labelMode,
  points,
  valueKey,
  colorValue,
  labelFormatter = null,
  valueFormatter = formatLoanValue,
}) {
  if (!points.length) {
    return `
      <article class="startup-chart-card">
        <div class="startup-chart-head">
          ${subtitle ? `<div class="startup-chart-subtitle startup-chart-subtitle--strong">${subtitle}</div>` : ""}
          <div class="startup-chart-title">${title}</div>
        </div>
        <div class="business-summary-empty">선택한 범위에 표시할 데이터가 없습니다.</div>
      </article>
    `;
  }

  const values = points.map((item) => item[valueKey] ?? 0);
  const maxValue = Math.max(...values, 1);

  return `
    <article class="startup-chart-card startup-chart-card--loan-bar">
      <div class="startup-chart-head">
        ${subtitle ? `<div class="startup-chart-subtitle startup-chart-subtitle--strong">${subtitle}</div>` : ""}
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="startup-bars" style="--bar-count:${points.length};">
        ${points
          .map((item) => {
            const value = item[valueKey] ?? 0;
            const barHeight = Math.max(8, Math.round((value / maxValue) * 120));
            const label = labelFormatter
              ? labelFormatter(item)
              : labelMode === "recent-month"
                ? `${item.year}.${item.month}월`
                : labelMode === "mixed"
                  ? `${item.year}.${item.month === 12 ? "12월" : `${item.month}월`}`
                  : `${item.year}.12월`;
            return `
              <div class="startup-bar-item">
                <div class="startup-bar-track">
                  <div class="startup-bar-value">${valueFormatter(value)}</div>
                  <div class="startup-bar" style="height:${barHeight}px; --bar-color:${colorValue};"></div>
                </div>
                <div class="startup-bar-label">${label}</div>
              </div>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderLoanMonthlyLineChart({ title, points, valueKey, color = "#2c7be5", unitFormatter = formatLoanValue, digits = 1 }) {
  if (!points.length) {
    return "";
  }

  const chartPoints = points
    .map((item) => ({
      key: getLoanMonthKey(item),
      value: item[valueKey],
    }))
    .filter((item) => item.value !== undefined && item.value !== null && !Number.isNaN(item.value));

  return renderBusinessLineChart({
    title,
    points: chartPoints,
    color,
    labelDigits: digits,
    summaryDigits: digits,
  }).replaceAll("기업심리지수", "");
}

function renderLoanLineChart({ title, seriesConfig, points }) {
  if (!points.length) {
    return "";
  }

  const allValues = points.flatMap((point) =>
    seriesConfig
      .map((series) => point[series.key])
      .filter((value) => value !== undefined && value !== null && !Number.isNaN(value)),
  );

  if (!allValues.length) {
    return "";
  }

  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  const range = maxValue - minValue || 1;
  const width = 320;
  const height = 150;
  const paddingLeft = 32;
  const paddingRight = 32;
  const paddingTop = 26;
  const paddingBottom = 28;
  const usableWidth = width - paddingLeft - paddingRight;
  const usableHeight = height - paddingTop - paddingBottom;

  const xForIndex = (index) =>
    points.length === 1
      ? width / 2
      : paddingLeft + (usableWidth / (points.length - 1)) * index;

  const yForValue = (value) =>
    paddingTop + (1 - (value - minValue) / range) * usableHeight;

  const pointKeys = points.map((point) => getLoanMonthKey(point));
  const seriesPoints = seriesConfig.map((series) => {
    const plotted = points
      .map((point, index) => {
        const value = point[series.key];
        if (value === undefined || value === null || Number.isNaN(value)) {
          return null;
        }

        return {
          x: xForIndex(index),
          y: yForValue(value),
          value,
          key: getLoanMonthKey(point),
          label: formatBusinessPeriod(getLoanMonthKey(point)),
        };
      })
      .filter(Boolean);

    return {
      ...series,
      plotted,
      minPoint: plotted.reduce((lowest, point) => (!lowest || point.value < lowest.value ? point : lowest), null),
      maxPoint: plotted.reduce((highest, point) => (!highest || point.value > highest.value ? point : highest), null),
      latestPoint: plotted[plotted.length - 1] || null,
      path: plotted
        .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
        .join(" "),
    };
  });

  const firstKey = pointKeys[0] || "";
  const lastKey = pointKeys[pointKeys.length - 1] || "";
  const firstYearFull = Number(String(firstKey).slice(0, 4));
  const yearSpan = getYearSpanFromKeys(firstKey, lastKey);
  const yearStep = yearSpan > 5 ? 2 : 1;
  const axisEntries = points
    .map((point, index) => {
      const key = getLoanMonthKey(point);
      const isLatest = index === points.length - 1;
      const pointYearFull = Number(String(key || "").slice(0, 4));
      const pointYearShort = String(key || "").slice(2, 4);
      const pointMonth = Number(String(key || "").slice(4, 6));
      let label = "";

      if (yearSpan > 5) {
        if (pointMonth === 1 && Number.isFinite(pointYearFull) && ((pointYearFull - firstYearFull) % yearStep === 0)) {
          label = pointYearShort;
        } else if (isLatest && pointMonth !== 1) {
          label = pointYearShort;
        }
      } else {
        const latestYear = String(lastKey).slice(0, 4);
        const pointYear = String(key).slice(0, 4);
        label = !isLatest && pointYear === latestYear
          ? ""
          : formatBusinessAxisLabel(key, isLatest);
      }

      if (!label) {
        return null;
      }

      return { x: xForIndex(index), label };
    })
    .filter(Boolean);
  const axisMarkup = buildAxisMarkup(axisEntries, height - paddingBottom, height - 4);
  const tooltipPoints = seriesPoints
    .flatMap((series) =>
      series.plotted.map((point) => `
        <circle
          class="startup-line-hit"
          cx="${point.x}"
          cy="${point.y}"
          r="8"
          tabindex="0"
          data-tooltip-label="${point.label} ${series.label}"
          data-tooltip-value="${formatNumber(point.value, 2)}%"
          aria-label="${point.label} ${series.label} ${formatNumber(point.value, 2)}%"
        ></circle>
      `),
    )
    .join("");

  return `
    <article class="startup-chart-card">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
        <div class="loan-line-legend">
          ${seriesPoints
            .map(
              (series) => `
                <div class="loan-line-legend-item">
                  <span class="loan-line-legend-swatch" style="--legend-color:${series.color};"></span>
                  <span>${series.label}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="startup-line-chart" style="--bar-count:${points.length};">
        <div class="startup-line-tooltip" hidden>
          <div class="startup-line-tooltip-label"></div>
          <div class="startup-line-tooltip-value"></div>
        </div>
        <svg class="startup-line-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <line class="startup-line-grid" x1="${paddingLeft}" y1="${height - paddingBottom}" x2="${width - paddingRight}" y2="${height - paddingBottom}"></line>
          ${seriesPoints
            .map(
              (series) => {
                const latest = series.latestPoint;
                const isNearRightEdge = latest ? latest.x > width - paddingRight - 28 : false;
                const latestLabelY = latest
                  ? isNearRightEdge
                    ? Math.max(12, latest.y - 10)
                    : Math.max(12, latest.y - 2)
                  : 0;
                const latestLabelDx = isNearRightEdge ? 0 : 8;
                const latestLabelAnchor = isNearRightEdge ? "middle" : "start";

                return `
                  <path d="${series.path}" fill="none" stroke="${series.color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                  ${latest
                    ? `
                        <text class="startup-line-value" x="${latest.x}" y="${latestLabelY}" dx="${latestLabelDx}" style="fill:${series.color};font-weight:800;text-anchor:${latestLabelAnchor};">${formatNumber(latest.value, 2)}%</text>
                        <circle class="startup-line-point" cx="${latest.x}" cy="${latest.y}" r="4.2" style="fill:${series.color};stroke-width:2;"></circle>
                      `
                    : ""}
                `;
              },
            )
            .join("")}
          ${tooltipPoints}
          ${axisMarkup}
        </svg>
      </div>
    </article>
  `;
}

function renderLoanCharts() {
  const charts = document.getElementById("loan-charts");
  const delinquencyCharts = document.getElementById("loan-delinquency-charts");
  if (!charts || !delinquencyCharts) {
    return;
  }

  const filteredLoanSeries = getFilteredLoanSeries();
  const filteredDelinquencySeries = getFilteredDelinquencyMonthlySeries();
  const yearEndNetIncreasePoints = getFilteredLoanAnnualSeries(getLoanAnnualNetIncreasePointsByYearEnd());
  const latestMonthNetIncreasePoints = getFilteredLoanAnnualSeries(getLoanAnnualNetIncreasePointsByLatestMonth());
  const annualNetIncreaseLatestPoint = latestMonthNetIncreasePoints[latestMonthNetIncreasePoints.length - 1] || null;
  const latestMonthLoanTitle = annualNetIncreaseLatestPoint
    ? `최근월(${annualNetIncreaseLatestPoint.month}월) 기준 대출 순증 (조원)`
    : "최근월 기준 대출 순증 (조원)";

  charts.innerHTML = [
    renderLoanMonthlyLineChart({
      title: "은행권 중소기업대출잔액 (조원)",
      points: filteredLoanSeries,
      valueKey: "balance",
      color: "#2c7be5",
      digits: 1,
    }),
    renderLoanBarChart({
      title: "연말 기준 대출 순증 (조원)",
      points: yearEndNetIncreasePoints,
      valueKey: "netIncrease",
      colorValue: "#2c7be5",
      labelFormatter: (item) => `${item.year}`,
      valueFormatter: formatLoanNumberOnly,
    }),
    renderLoanBarChart({
      title: latestMonthLoanTitle,
      points: latestMonthNetIncreasePoints,
      valueKey: "netIncrease",
      colorValue: "#59a7ff",
      labelFormatter: (item) => `${item.year}`,
      valueFormatter: formatLoanNumberOnly,
    }),
  ].filter(Boolean).join("");

  delinquencyCharts.innerHTML = [
    renderLoanLineChart({
      title: "대기업 및 중소기업 대출 연체율",
      points: filteredDelinquencySeries,
      seriesConfig: [
        { key: "largeCompanyRate", label: "대기업", color: "#2c7be5" },
        { key: "smeRate", label: "중소기업", color: "#ff675f" },
      ],
    }),
    renderLoanLineChart({
      title: "중소법인 및 개인사업자 대출 연체율",
      points: filteredDelinquencySeries,
      seriesConfig: [
        { key: "corporateRate", label: "중소법인", color: "#2f9e44" },
        { key: "solePropRate", label: "개인사업자", color: "#ffb347" },
      ],
    }),
  ].filter(Boolean).join("");

  bindLineChartTooltips(charts);
  bindLineChartTooltips(delinquencyCharts);
}

function renderInvestmentSummary() {
  const summary = document.getElementById("investment-summary");
  const charts = document.getElementById("investment-charts");
  const breakdown = document.getElementById("investment-breakdown");
  const breakdownCharts = document.getElementById("investment-breakdown-charts");
  const source = document.getElementById("investment-source");
  const sourceCharts = document.getElementById("investment-source-charts");

  if (!investmentSeries.length) {
    summary.innerHTML = `
      <article class="startup-summary-card">
        <div class="startup-value">투자 데이터를 불러오지 못했습니다.</div>
        <div class="startup-subvalue">${investmentLoadError || "구글 시트 투자 데이터 구성을 확인해 주세요."}</div>
      </article>
    `;
    if (charts) {
      charts.innerHTML = "";
    }
    if (breakdown) {
      breakdown.innerHTML = "";
    }
    if (breakdownCharts) {
      breakdownCharts.innerHTML = "";
    }
    if (source) {
      source.innerHTML = "";
    }
    if (sourceCharts) {
      sourceCharts.innerHTML = "";
    }
    return;
  }

  const pointLabel = formatInvestmentPointLabel();
  const currentOverview = getInvestmentRecord(investmentSeries);
  const previousOverview = getPreviousYearInvestmentRecord(investmentSeries);

  summary.innerHTML = `
    <article class="startup-summary-card investment-summary-card">
      <div class="business-summary-caption">최신 수치</div>
      <div class="startup-summary-grid startup-summary-grid--three-col investment-summary-grid">
        <div class="startup-metric investment-summary-metric">
          <div class="startup-kicker"><span class="investment-kicker-period">${pointLabel}</span><span class="investment-kicker-item">신규 벤처투자금액</span></div>
          <div class="startup-value">${formatInvestmentTrillionValue(currentOverview?.["신규 벤처투자금액"])}</div>
          <div class="startup-subvalue investment-summary-delta">${formatInvestmentDelta(currentOverview?.["신규 벤처투자금액"], previousOverview?.["신규 벤처투자금액"], "amount")}</div>
        </div>
        <div class="startup-metric investment-summary-metric">
          <div class="startup-kicker"><span class="investment-kicker-period">${pointLabel}</span><span class="investment-kicker-item">벤처펀드 결성금액</span></div>
          <div class="startup-value">${formatInvestmentTrillionValue(currentOverview?.["벤처펀드 결정금액"])}</div>
          <div class="startup-subvalue investment-summary-delta">${formatInvestmentDelta(currentOverview?.["벤처펀드 결정금액"], previousOverview?.["벤처펀드 결정금액"], "amount")}</div>
        </div>
        <div class="startup-metric investment-summary-metric">
          <div class="startup-kicker"><span class="investment-kicker-period">${pointLabel}</span><span class="investment-kicker-item">벤처펀드 결성 수</span></div>
          <div class="startup-value">${formatCountValue(currentOverview?.["벤처펀드 결성 수"])}</div>
          <div class="startup-subvalue investment-summary-delta">${formatInvestmentDelta(currentOverview?.["벤처펀드 결성 수"], previousOverview?.["벤처펀드 결성 수"], "count")}</div>
        </div>
      </div>
    </article>
  `;
}

function renderInvestmentBarChart({ title, points, key, type = "amount", colorValue, lineColor }) {
  if (!points.length) {
    return "";
  }

  const values = points.map((item) => item[key] ?? 0);
  const maxValue = Math.max(...values, 1);
  const chartHeight = 234;

  return `
    <article class="startup-chart-card investment-bar-card" style="--investment-line-color:${lineColor || colorValue};">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="startup-bars investment-bars" style="--bar-count:${points.length}; --investment-chart-height:${chartHeight}px;">
        <svg class="investment-bar-line-svg" aria-hidden="true">
          <polyline class="investment-bar-line" points=""></polyline>
        </svg>
        ${points
          .map((item) => {
            const value = item[key] ?? 0;
            const barHeight = Math.max(12, Math.round((value / maxValue) * chartHeight));
            const valueText = type === "count" ? formatCountValue(value) : formatInvestmentTrillionValue(value);
            return `
              <div class="startup-bar-item">
                <div class="startup-bar-value">${valueText}</div>
                <div class="startup-bar-track">
                  <div class="startup-bar" style="height:${barHeight}px; --bar-color:${colorValue};"></div>
                </div>
                <div class="startup-bar-label">${item.year}년</div>
              </div>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function syncInvestmentBarLines() {
  const cards = document.querySelectorAll(".investment-bar-card");
  cards.forEach((card) => {
    const bars = card.querySelector(".investment-bars");
    const svg = card.querySelector(".investment-bar-line-svg");
    const polyline = card.querySelector(".investment-bar-line");
    const barElements = card.querySelectorAll(".investment-bars .startup-bar");

    if (!bars || !svg || !polyline || !barElements.length) {
      return;
    }

    const barsRect = bars.getBoundingClientRect();
    const points = Array.from(barElements)
      .map((bar) => {
        const rect = bar.getBoundingClientRect();
        return {
          x: rect.left - barsRect.left + rect.width / 2,
          y: rect.top - barsRect.top,
        };
      });

    svg.setAttribute("viewBox", `0 0 ${barsRect.width} ${barsRect.height}`);
    svg.setAttribute("preserveAspectRatio", "none");
    polyline.setAttribute("points", points.map((point) => `${point.x},${point.y}`).join(" "));

    svg.querySelectorAll(".investment-bar-line-point").forEach((node) => node.remove());
    points.forEach((point) => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("class", "investment-bar-line-point");
      circle.setAttribute("cx", String(point.x));
      circle.setAttribute("cy", String(point.y));
      circle.setAttribute("r", "5");
      svg.appendChild(circle);
    });
  });
}

function renderInvestmentPieChart({
  title,
  items,
  totalLabel,
  denominatorValue,
  valueFormatter = (value) => `${formatNumber(value, 0)}억원`,
  legendClassName = "",
  cardClassName = "",
}) {
  const validItems = items.filter((item) => item.value !== undefined && item.value !== null && !Number.isNaN(item.value) && item.value > 0);
  if (!validItems.length) {
    return "";
  }

  const total = validItems.reduce((sum, item) => sum + item.value, 0);
  const baseTotal = denominatorValue && denominatorValue > 0 ? denominatorValue : total;
  const segments = [];
  let cursor = 0;

  validItems.forEach((item) => {
    const share = (item.value / total) * 100;
    const start = cursor;
    const end = cursor + share;
    segments.push(`${item.color} ${start}% ${end}%`);
    cursor = end;
  });

  return `
    <article class="startup-chart-card${cardClassName ? ` ${cardClassName}` : ""}">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
      </div>
      <div class="investment-pie-layout">
        <div class="investment-pie" style="--pie-fill:${segments.join(", ")};"></div>
        <div class="investment-pie-legend${legendClassName ? ` ${legendClassName}` : ""}">
          ${validItems
            .map(
              (item) => `
                <div class="investment-pie-legend-item">
                  <span class="investment-pie-legend-swatch" style="--legend-color:${item.color};"></span>
                  <span class="investment-pie-legend-name">${item.name}</span>
                  <span class="investment-pie-legend-value">${valueFormatter(item.value)} (${formatNumber((item.value / baseTotal) * 100, 1)}%)</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderInvestmentShareLineChart({
  title,
  seriesConfig,
  points,
  headRightHtml = "",
  cardClassName = "",
  shareFormatter = (value) => `${formatNumber(value, 1)}%`,
}) {
  if (!points.length || !seriesConfig.length) {
    return "";
  }

  const allValues = points.flatMap((point) =>
    seriesConfig
      .map((series) => point[series.key])
      .filter((value) => value !== undefined && value !== null && !Number.isNaN(value)),
  );
  if (!allValues.length) {
    return "";
  }

  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  const range = maxValue - minValue || 1;
  const width = 320;
  const height = 150;
  const paddingLeft = 32;
  const paddingRight = 32;
  const paddingTop = 26;
  const paddingBottom = 28;
  const usableWidth = width - paddingLeft - paddingRight;
  const usableHeight = height - paddingTop - paddingBottom;
  const xForIndex = (index) =>
    points.length === 1
      ? width / 2
      : paddingLeft + (usableWidth / (points.length - 1)) * index;
  const yForValue = (value) => paddingTop + (1 - (value - minValue) / range) * usableHeight;

  const seriesPoints = seriesConfig.map((series) => {
    const plotted = points
      .map((point, index) => {
        const value = point[series.key];
        if (value === undefined || value === null || Number.isNaN(value)) {
          return null;
        }
        return {
          x: xForIndex(index),
          y: yForValue(value),
          value,
          label: `${point.year}년`,
          amount: point[`${series.key}Amount`],
        };
      })
      .filter(Boolean);

    return {
      ...series,
      plotted,
      firstPoint: plotted[0] || null,
      latestPoint: plotted[plotted.length - 1] || null,
      path: plotted.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" "),
    };
  });

  const axisEntries = points.map((point, index) => ({ x: xForIndex(index), label: `${String(point.year).slice(2)}년` }));
  const axisMarkup = buildAxisMarkup(axisEntries, height - paddingBottom, height - 4);
  const tooltipPoints = seriesPoints
    .flatMap((series) =>
      series.plotted.map((point) => `
        <circle
          class="startup-line-hit"
          cx="${point.x}"
          cy="${point.y}"
          r="8"
          tabindex="0"
          data-tooltip-label="${point.label} ${series.label}"
          data-tooltip-value="${point.amount !== undefined && point.amount !== null && !Number.isNaN(point.amount) ? `${formatInvestmentTrillionValue(point.amount).replace(/<[^>]+>/g, "")} (${shareFormatter(point.value)})` : shareFormatter(point.value)}"
          aria-label="${point.label} ${series.label} ${point.amount !== undefined && point.amount !== null && !Number.isNaN(point.amount) ? `${formatInvestmentTrillionValue(point.amount).replace(/<[^>]+>/g, "")} ${shareFormatter(point.value)}` : shareFormatter(point.value)}"
        ></circle>
      `),
    )
    .join("");
  const edgeLabels = seriesPoints
    .flatMap((series) => {
      const labels = [];
      if (series.firstPoint) {
        labels.push(`
          <text
            class="startup-line-edge-label startup-line-edge-label--start"
            x="${series.firstPoint.x - 8}"
            y="${series.firstPoint.y - 3}"
            style="fill:${series.color};"
          >
            ${series.firstPoint.amount !== undefined && series.firstPoint.amount !== null && !Number.isNaN(series.firstPoint.amount)
              ? `<tspan x="${series.firstPoint.x - 8}" dy="0">${formatInvestmentTrillionValue(series.firstPoint.amount).replace(/<[^>]+>/g, "")}</tspan>
            <tspan x="${series.firstPoint.x - 8}" dy="11">(${shareFormatter(series.firstPoint.value)})</tspan>`
              : `<tspan x="${series.firstPoint.x - 8}" dy="0">${shareFormatter(series.firstPoint.value)}</tspan>`}
          </text>
        `);
      }
      if (series.latestPoint) {
        labels.push(`
          <text
            class="startup-line-edge-label startup-line-edge-label--end"
            x="${series.latestPoint.x + 8}"
            y="${series.latestPoint.y - 3}"
            style="fill:${series.color};"
          >
            ${series.latestPoint.amount !== undefined && series.latestPoint.amount !== null && !Number.isNaN(series.latestPoint.amount)
              ? `<tspan x="${series.latestPoint.x + 8}" dy="0">${formatInvestmentTrillionValue(series.latestPoint.amount).replace(/<[^>]+>/g, "")}</tspan>
            <tspan x="${series.latestPoint.x + 8}" dy="11">(${shareFormatter(series.latestPoint.value)})</tspan>`
              : `<tspan x="${series.latestPoint.x + 8}" dy="0">${shareFormatter(series.latestPoint.value)}</tspan>`}
          </text>
        `);
      }
      return labels;
    })
    .join("");

  return `
    <article class="startup-chart-card${cardClassName ? ` ${cardClassName}` : ""}">
      <div class="startup-chart-head">
        <div class="startup-chart-title">${title}</div>
        ${headRightHtml || `
          <div class="loan-line-legend">
            ${seriesPoints
              .map(
                (series) => `
                  <div class="loan-line-legend-item">
                    <span class="loan-line-legend-swatch" style="--legend-color:${series.color};"></span>
                    <span>${series.label}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
        `}
      </div>
      <div class="startup-line-chart" style="--bar-count:${points.length};">
        <div class="startup-line-tooltip" hidden>
          <div class="startup-line-tooltip-label"></div>
          <div class="startup-line-tooltip-value"></div>
        </div>
        <svg class="startup-line-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <line class="startup-line-grid" x1="${paddingLeft}" y1="${height - paddingBottom}" x2="${width - paddingRight}" y2="${height - paddingBottom}"></line>
          ${seriesPoints
            .map((series) => `
              <path class="startup-line-path" d="${series.path}" style="stroke:${series.color};"></path>
              ${series.plotted
                .map((point) => `
                  <circle class="startup-line-point" cx="${point.x}" cy="${point.y}" r="4.2" style="fill:#ffffff;stroke:${series.color};stroke-width:2.2;"></circle>
                `)
                .join("")}
            `)
            .join("")}
          ${edgeLabels}
          ${axisMarkup}
          ${tooltipPoints}
        </svg>
      </div>
    </article>
  `;
}

function renderInvestmentCharts() {
  const charts = document.getElementById("investment-charts");
  const breakdown = document.getElementById("investment-breakdown");
  const breakdownCharts = document.getElementById("investment-breakdown-charts");
  const source = document.getElementById("investment-source");
  const sourceCharts = document.getElementById("investment-source-charts");

  if (!investmentSeries.length) {
    charts.innerHTML = "";
    breakdown.innerHTML = "";
    breakdownCharts.innerHTML = "";
    source.innerHTML = "";
    sourceCharts.innerHTML = "";
    return;
  }

  const breakdownEndYear = investmentBreakdownRangeEnd || syncInvestmentBreakdownSelection()[0] || "";
  const currentStage = getInvestmentRecordByPeriodAndYear(investmentStageSeries, investmentBreakdownSelectedPeriod, breakdownEndYear);
  const currentSector = getInvestmentRecordByPeriodAndYear(investmentSectorSeries, investmentBreakdownSelectedPeriod, breakdownEndYear);
  const sourceEndYear = investmentSourceRangeEnd || syncInvestmentSourceSelection()[0] || "";
  const currentSource = getInvestmentRecordByPeriodAndYear(investmentSourceSeries, investmentSourceSelectedPeriod, sourceEndYear);
  const currentOverview = getInvestmentRecord(investmentSeries);
  const benchmarkTotal = currentOverview?.["신규 벤처투자금액"] ?? 0;
  const currentBreakdownOverview = getInvestmentRecordByPeriodAndYear(investmentSeries, investmentBreakdownSelectedPeriod, breakdownEndYear);
  const breakdownBenchmarkTotal = currentBreakdownOverview?.["신규 벤처투자금액"] ?? 0;
  const sourceTotal = (currentSource?.정책금융 ?? 0) + (currentSource?.민간부문 ?? 0);
  const stageTotal =
    (currentStage?.["초기 투자(3년 이내)"] ?? 0) +
    (currentStage?.["중기 투자(3~7년 이내)"] ?? 0) +
    (currentStage?.["후기 투자(7년 초과)"] ?? 0);
  const topSectors = [
    { name: "ICT서비스", value: currentSector?.["ICT서비스"] },
    { name: "바이오·의료", value: currentSector?.["바이오·의료"] },
    { name: "전기·기계·장비", value: currentSector?.["전기·기계·장비"] },
    { name: "ICT제조", value: currentSector?.["ICT제조"] },
    { name: "유통·서비스", value: currentSector?.["유통·서비스"] },
    { name: "화학·소재", value: currentSector?.["화학·소재"] },
    { name: "영상·공연·음반", value: currentSector?.["영상·공연·음반"] },
    { name: "게임", value: currentSector?.게임 },
    { name: "기타", value: currentSector?.기타 },
  ]
    .filter((item) => item.value !== undefined && item.value !== null && !Number.isNaN(item.value))
    .sort((a, b) => b.value - a.value)
    .slice(0, 3);
  const topSectorConfigs = topSectors.map((item, index) => ({
    key: `sector${index + 1}`,
    label: item.name,
    color: index === 0 ? "#2c7be5" : index === 1 ? "#ef7d32" : "#7a6ff0",
  }));
  const sectorPalette = ["#2c7be5", "#59a7ff", "#ef7d32", "#7a6ff0", "#8a7dff", "#00a6a6", "#ff6b6b", "#f4b942", "#94a3b8"];
  const sectorNames = getInvestmentSectorNames();
  if (!sectorNames.includes(investmentBreakdownSelectedIndustry)) {
    investmentBreakdownSelectedIndustry = topSectors[0]?.name || sectorNames[0] || "";
  }
  const overviewTrend = getInvestmentTrendSeries(investmentSeries);

  charts.innerHTML = [
    renderInvestmentBarChart({
      title: "신규 벤처투자금액 추이",
      points: overviewTrend,
      key: "신규 벤처투자금액",
      colorValue: "#2c7be5",
      lineColor: "#1f5fb8",
    }),
    renderInvestmentBarChart({
      title: "벤처펀드 결성금액 추이",
      points: overviewTrend,
      key: "벤처펀드 결정금액",
      colorValue: "#ef7d32",
      lineColor: "#c45f1b",
    }),
    renderInvestmentBarChart({
      title: "벤처펀드 결성 수 추이",
      points: overviewTrend,
      key: "벤처펀드 결성 수",
      type: "count",
      colorValue: "#7a6ff0",
      lineColor: "#5d50cb",
    }),
  ].filter(Boolean).join("");

  breakdown.innerHTML = `
    <article class="startup-summary-card">
      <div class="business-summary-caption">최신 수치</div>
      <div class="startup-summary-title">&lt; 업력별 투자 &gt;</div>
      <div class="startup-summary-grid startup-summary-grid--three-col">
        <div class="startup-metric investment-metric investment-metric--blue">
          <div class="startup-kicker investment-kicker investment-kicker--blue">초기(3년 이내)</div>
          <div class="startup-value investment-value investment-value--blue investment-value--compact">${formatInvestmentTrillionValue(currentStage?.["초기 투자(3년 이내)"])}</div>
          ${formatInvestmentShare(currentStage?.["초기 투자(3년 이내)"], stageTotal)}
        </div>
        <div class="startup-metric investment-metric investment-metric--orange">
          <div class="startup-kicker investment-kicker investment-kicker--orange">중기(3~7년 이내)</div>
          <div class="startup-value investment-value investment-value--orange investment-value--compact">${formatInvestmentTrillionValue(currentStage?.["중기 투자(3~7년 이내)"])}</div>
          ${formatInvestmentShare(currentStage?.["중기 투자(3~7년 이내)"], stageTotal)}
        </div>
        <div class="startup-metric investment-metric investment-metric--violet">
          <div class="startup-kicker investment-kicker investment-kicker--violet">후기(7년 초과)</div>
          <div class="startup-value investment-value investment-value--violet investment-value--compact">${formatInvestmentTrillionValue(currentStage?.["후기 투자(7년 초과)"])}</div>
          ${formatInvestmentShare(currentStage?.["후기 투자(7년 초과)"], stageTotal)}
        </div>
      </div>
    </article>
    <article class="startup-summary-card">
      <div class="business-summary-caption">최신 수치</div>
      <div class="investment-breakdown-card-head">
        <div class="startup-summary-title">&lt; 업종별 투자 &gt;</div>
        <div class="investment-breakdown-top-sectors">${topSectors.map((item, index) => `${index + 1}위 ${item.name}`).join(" · ")}</div>
      </div>
      <div class="startup-summary-grid startup-summary-grid--three-col">
        ${topSectors
          .map(
            (item, index) => `
              <div class="startup-metric investment-metric investment-metric--${index === 0 ? "blue" : index === 1 ? "orange" : "violet"}">
                <div class="startup-kicker investment-kicker investment-kicker--${index === 0 ? "blue" : index === 1 ? "orange" : "violet"}${item.name === "전기·기계·장비" ? " investment-kicker--compact" : ""}">${item.name}</div>
                <div class="startup-value investment-value investment-value--${index === 0 ? "blue" : index === 1 ? "orange" : "violet"} investment-value--compact">${formatInvestmentTrillionValue(item.value)}</div>
                ${formatInvestmentShare(item.value, breakdownBenchmarkTotal)}
              </div>
            `,
          )
          .join("")}
      </div>
    </article>
  `;

  breakdownCharts.innerHTML = [
    renderInvestmentShareLineChart({
      title: "업력별 투자 비중 추이",
      points: getInvestmentBreakdownTrendSeries(investmentStageSeries).map((item) => {
        const total =
          (item["초기 투자(3년 이내)"] ?? 0) +
          (item["중기 투자(3~7년 이내)"] ?? 0) +
          (item["후기 투자(7년 초과)"] ?? 0);
        return {
          year: item.year,
          early: total > 0 ? ((item["초기 투자(3년 이내)"] ?? 0) / total) * 100 : null,
          earlyAmount: item["초기 투자(3년 이내)"] ?? null,
          mid: total > 0 ? ((item["중기 투자(3~7년 이내)"] ?? 0) / total) * 100 : null,
          midAmount: item["중기 투자(3~7년 이내)"] ?? null,
          late: total > 0 ? ((item["후기 투자(7년 초과)"] ?? 0) / total) * 100 : null,
          lateAmount: item["후기 투자(7년 초과)"] ?? null,
        };
      }),
      seriesConfig: [
        { key: "early", label: "초기", color: "#2c7be5" },
        { key: "mid", label: "중기", color: "#ef7d32" },
        { key: "late", label: "후기", color: "#7a6ff0" },
      ],
      cardClassName: "investment-breakdown-chart-card investment-breakdown-chart-card--line",
    }),
    renderInvestmentShareLineChart({
      title: "업종별 투자 비중 추이",
      points: getInvestmentBreakdownTrendSeries(investmentSectorSeries).map((item) => ({
        year: item.year,
        selectedIndustry: (() => {
          const total = getInvestmentRecordByPeriodAndYear(investmentSeries, investmentBreakdownSelectedPeriod, item.year)?.["신규 벤처투자금액"] || 0;
          return total > 0 && investmentBreakdownSelectedIndustry ? ((item[investmentBreakdownSelectedIndustry] ?? 0) / total) * 100 : null;
        })(),
        selectedIndustryAmount: investmentBreakdownSelectedIndustry ? (item[investmentBreakdownSelectedIndustry] ?? null) : null,
      })),
      seriesConfig: investmentBreakdownSelectedIndustry
        ? [{ key: "selectedIndustry", label: investmentBreakdownSelectedIndustry, color: "#2c7be5" }]
        : [],
      headRightHtml: `
        <div class="investment-industry-select-wrap">
          <span class="inline-select-label">업종 선택</span>
          <select id="investment-industry-line-select" class="year-select year-select--wide">
            ${sectorNames.map((name) => `<option value="${name}" ${name === investmentBreakdownSelectedIndustry ? "selected" : ""}>${name}</option>`).join("")}
          </select>
        </div>
      `,
      cardClassName: "investment-breakdown-chart-card investment-breakdown-chart-card--line",
    }),
    renderInvestmentPieChart({
      title: `${breakdownEndYear}년 업력별 투자 비중`,
      denominatorValue: stageTotal,
      valueFormatter: (value) => formatInvestmentTrillionValue(value),
      items: [
        { name: "초기(3년 이내)", value: currentStage?.["초기 투자(3년 이내)"], color: "#2c7be5" },
        { name: "중기(3~7년 이내)", value: currentStage?.["중기 투자(3~7년 이내)"], color: "#ef7d32" },
        { name: "후기(7년 초과)", value: currentStage?.["후기 투자(7년 초과)"], color: "#7a6ff0" },
      ],
    }),
    renderInvestmentPieChart({
      title: `${breakdownEndYear}년 업종별 투자 비중`,
      denominatorValue: breakdownBenchmarkTotal,
      valueFormatter: (value) => formatInvestmentTrillionValue(value),
      legendClassName: "investment-pie-legend--three-col",
      items: sectorNames.map((name, index) => ({
        name,
        value: currentSector?.[name],
        color: sectorPalette[index % sectorPalette.length],
      })),
    }),
  ].filter(Boolean).join("");

  source.innerHTML = `
    <article class="startup-summary-card">
      <div class="business-summary-caption">최신 수치</div>
      <div class="startup-summary-title">&lt; 출자자별 출자금액 &gt;</div>
      <div class="startup-summary-grid startup-summary-grid--two-col">
        <div class="startup-metric investment-metric investment-metric--blue">
          <div class="startup-kicker investment-kicker investment-kicker--blue">정책금융</div>
          <div class="startup-value investment-value investment-value--blue">${formatInvestmentTrillionValue(currentSource?.정책금융)}</div>
          ${formatInvestmentShare(currentSource?.정책금융, sourceTotal)}
        </div>
        <div class="startup-metric investment-metric investment-metric--orange">
          <div class="startup-kicker investment-kicker investment-kicker--orange">민간부문</div>
          <div class="startup-value investment-value investment-value--orange">${formatInvestmentTrillionValue(currentSource?.민간부문)}</div>
          ${formatInvestmentShare(currentSource?.민간부문, sourceTotal)}
        </div>
      </div>
    </article>
  `;

  const sourcePolicySeries = [
    { key: "모태펀드", label: "모태펀드", color: "#2c7be5" },
    { key: "성장금융", label: "성장금융", color: "#59a7ff" },
    { key: "산업은행", label: "산업은행", color: "#8bd3ff" },
    { key: "기타 정책금융", label: "기타 정책금융", color: "#b8e4ff" },
  ];
  const sourcePrivateSeries = [
    { key: "개인", label: "개인", color: "#ff7b63" },
    { key: "일반법인", label: "일반법인", color: "#ff9c73" },
    { key: "금융기관(산은 제외)", label: "금융기관(산은 제외)", color: "#ffc857" },
    { key: "연기금 및 공제회", label: "연기금 및 공제회", color: "#9c89ff" },
    { key: "VC", label: "VC", color: "#7a6ff0" },
    { key: "기타단체 및 외국인", label: "기타단체 및 외국인", color: "#94a3b8" },
  ];
  if (!sourcePolicySeries.some((item) => item.key === investmentSourceSelectedPolicyDetail)) {
    investmentSourceSelectedPolicyDetail = sourcePolicySeries[0]?.key || "";
  }
  if (!sourcePrivateSeries.some((item) => item.key === investmentSourceSelectedPrivateDetail)) {
    investmentSourceSelectedPrivateDetail = sourcePrivateSeries[0]?.key || "";
  }
  const selectedPolicySeries = sourcePolicySeries.find((item) => item.key === investmentSourceSelectedPolicyDetail) || sourcePolicySeries[0];
  const selectedPrivateSeries = sourcePrivateSeries.find((item) => item.key === investmentSourceSelectedPrivateDetail) || sourcePrivateSeries[0];
  const sourceTrend = getInvestmentSourceTrendSeries(investmentSourceSeries);

  sourceCharts.innerHTML = [
    renderInvestmentShareLineChart({
      title: "정책금융 및 민간부문 출자 비중 추이",
      points: sourceTrend.map((item) => {
        const total = (item?.정책금융 ?? 0) + (item?.민간부문 ?? 0);
        return {
          year: item.year,
          policy: total > 0 ? ((item?.정책금융 ?? 0) / total) * 100 : null,
          policyAmount: item?.정책금융 ?? null,
          private: total > 0 ? ((item?.민간부문 ?? 0) / total) * 100 : null,
          privateAmount: item?.민간부문 ?? null,
        };
      }),
      seriesConfig: [
        { key: "policy", label: "정책금융", color: "#2c7be5" },
        { key: "private", label: "민간부문", color: "#ef7d32" },
      ],
      cardClassName: "investment-source-chart-card investment-source-chart-card--line",
    }),
    renderInvestmentShareLineChart({
      title: "정책금융 세부 출자 비중 추이",
      points: sourceTrend.map((item) => {
        const denominator = item?.정책금융 || 0;
        return {
          year: item.year,
          selectedPolicy: denominator > 0 ? ((item?.[investmentSourceSelectedPolicyDetail] ?? 0) / denominator) * 100 : null,
          selectedPolicyAmount: item?.[investmentSourceSelectedPolicyDetail] ?? null,
        };
      }),
      seriesConfig: selectedPolicySeries
        ? [{ key: "selectedPolicy", label: selectedPolicySeries.label, color: selectedPolicySeries.color }]
        : [],
      headRightHtml: `
        <div class="investment-industry-select-wrap">
          <span class="inline-select-label">세부 구분</span>
          <select id="investment-source-policy-select" class="year-select year-select--wide">
            ${sourcePolicySeries.map((item) => `<option value="${item.key}" ${item.key === investmentSourceSelectedPolicyDetail ? "selected" : ""}>${item.label}</option>`).join("")}
          </select>
        </div>
      `,
      cardClassName: "investment-source-chart-card investment-source-chart-card--line",
    }),
    renderInvestmentShareLineChart({
      title: "민간부문 세부 출자 비중 추이",
      points: sourceTrend.map((item) => {
        const denominator = item?.민간부문 || 0;
        return {
          year: item.year,
          selectedPrivate: denominator > 0 ? ((item?.[investmentSourceSelectedPrivateDetail] ?? 0) / denominator) * 100 : null,
          selectedPrivateAmount: item?.[investmentSourceSelectedPrivateDetail] ?? null,
        };
      }),
      seriesConfig: selectedPrivateSeries
        ? [{ key: "selectedPrivate", label: selectedPrivateSeries.label, color: selectedPrivateSeries.color }]
        : [],
      headRightHtml: `
        <div class="investment-industry-select-wrap">
          <span class="inline-select-label">세부 구분</span>
          <select id="investment-source-private-select" class="year-select year-select--wide">
            ${sourcePrivateSeries.map((item) => `<option value="${item.key}" ${item.key === investmentSourceSelectedPrivateDetail ? "selected" : ""}>${item.label}</option>`).join("")}
          </select>
        </div>
      `,
      cardClassName: "investment-source-chart-card investment-source-chart-card--line",
    }),
    renderInvestmentPieChart({
      title: `${sourceEndYear}년 정책금융 세부 출자 비중`,
      denominatorValue: currentSource?.정책금융,
      valueFormatter: (value) => formatInvestmentTrillionValue(value),
      legendClassName: "investment-pie-legend--two-col",
      items: sourcePolicySeries.map((series) => ({
        name: series.label,
        value: currentSource?.[series.key],
        color: series.color,
      })),
      cardClassName: "investment-source-chart-card investment-source-chart-card--pie",
    }),
    renderInvestmentPieChart({
      title: `${sourceEndYear}년 민간부문 세부 출자 비중`,
      denominatorValue: currentSource?.민간부문,
      valueFormatter: (value) => formatInvestmentTrillionValue(value),
      legendClassName: "investment-pie-legend--two-col",
      items: sourcePrivateSeries.map((series) => ({
        name: series.label,
        value: currentSource?.[series.key],
        color: series.color,
      })),
      cardClassName: "investment-source-chart-card investment-source-chart-card--pie",
    }),
  ].filter(Boolean).join("");

  window.requestAnimationFrame(() => {
    syncInvestmentBarLines();
    bindLineChartTooltips(breakdownCharts);
    bindLineChartTooltips(sourceCharts);
    const industrySelect = document.getElementById("investment-industry-line-select");
    if (industrySelect) {
      industrySelect.onchange = () => {
        investmentBreakdownSelectedIndustry = industrySelect.value;
        renderInvestmentCharts();
      };
    }
    const sourcePolicySelect = document.getElementById("investment-source-policy-select");
    if (sourcePolicySelect) {
      sourcePolicySelect.onchange = () => {
        investmentSourceSelectedPolicyDetail = sourcePolicySelect.value;
        renderInvestmentCharts();
      };
    }
    const sourcePrivateSelect = document.getElementById("investment-source-private-select");
    if (sourcePrivateSelect) {
      sourcePrivateSelect.onchange = () => {
        investmentSourceSelectedPrivateDetail = sourcePrivateSelect.value;
        renderInvestmentCharts();
      };
    }
  });
}

function renderExportSummary() {
  const summary = document.getElementById("export-summary");

  if (!summary) {
    return;
  }

  if (!exportSeries.length) {
    summary.innerHTML = `
      <div class="business-summary-empty">${exportLoadError || "수출 데이터를 불러오는 중입니다."}</div>
    `;
    return;
  }

  const current = getExportRecord();
  const previous = getPreviousYearExportRecord(exportSeries);
  const companyShare =
    current?.["전체 기업 수"] && current?.["중소기업 기업 수"] !== undefined
      ? (current["중소기업 기업 수"] / current["전체 기업 수"]) * 100
      : null;
  const exportShare =
    current?.["전체 수출금액"] && current?.["중소기업 수출금액"] !== undefined
      ? (current["중소기업 수출금액"] / current["전체 수출금액"]) * 100
      : null;

  summary.innerHTML = `
    <div class="business-summary-caption">최신 수치</div>
    <div class="business-summary-inline-grid">
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatExportPeriod(current?.date)} 수출 중소기업 수</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatExportCompanyCount(current?.["중소기업 기업 수"])}</div>
          <div class="startup-subvalue">(비중: <span class="startup-share-value">${companyShare === null ? "-" : `${formatNumber(companyShare, 1)}%`}</span>)</div>
          ${previous ? `<div class="business-inline-delta">${formatYoYGrowth(current?.["중소기업 기업 수"], previous?.["중소기업 기업 수"])}</div>` : ""}
        </div>
      </div>
      <div class="business-summary-inline-item">
        <div class="startup-kicker">${formatExportPeriod(current?.date)} 중소기업 수출금액</div>
        <div class="business-inline-value">
          <div class="business-inline-number">${formatExportAmount(current?.["중소기업 수출금액"])}</div>
          <div class="startup-subvalue">(비중: <span class="startup-share-value">${exportShare === null ? "-" : `${formatNumber(exportShare, 1)}%`}</span>)</div>
          ${previous ? `<div class="business-inline-delta">${formatYoYGrowth(current?.["중소기업 수출금액"], previous?.["중소기업 수출금액"])}</div>` : ""}
        </div>
      </div>
    </div>
  `;
}

function renderExportCharts() {
  const charts = document.getElementById("export-charts");
  if (!charts) {
    return;
  }

  if (!exportSeries.length) {
    charts.innerHTML = "";
    return;
  }

  const current = getExportRecord();
  const currentCountry = getExportCountryRecord();
  const previousCountry = getPreviousYearExportRecord(exportCountrySeries);
  const filteredExport = getExportChartSeries(exportSeries);
  const countryPalette = ["#d04a42", "#6f5bd3", "#2f8f6b", "#d4a72c", "#7d8796"];
  const excludedCountryNames = new Set(["EU27", "EU28", "동남아", "중동", "중남미", "그 외 지역"]);
  const countryTotal =
    currentCountry?.["계 수출금액"] ??
    current?.["중소기업 수출금액"] ??
    0;
  const topCountries = Object.entries(currentCountry || {})
    .filter(([key, value]) => key.endsWith(" 수출금액") && key !== "계 수출금액" && value !== undefined && value !== null && !Number.isNaN(value))
    .map(([key, value]) => ({
      name: key.replace(/ 수출금액$/, ""),
      key,
      value,
      previousValue: previousCountry?.[key],
      share: countryTotal > 0 ? (value / countryTotal) * 100 : null,
    }))
    .filter((item) => !excludedCountryNames.has(item.name))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)
    .map((item, index) => ({
      ...item,
      color: countryPalette[index % countryPalette.length],
    }));
  const otherCountryValue = Math.max(0, countryTotal - topCountries.reduce((sum, item) => sum + item.value, 0));
  const pieItems = [
    ...topCountries,
    ...(otherCountryValue > 0 ? [{ name: "기타", value: otherCountryValue, color: "#94a3b8" }] : []),
  ];

  charts.innerHTML = [
    renderExportBarChart({
      title: "수출 중소기업 수",
      points: filteredExport,
      key: "중소기업 기업 수",
      type: "count",
      colorValue: "#2c7be5",
    }),
    renderExportShareLineChart({
      title: "수출 중소기업 비중",
      points: filteredExport,
      valueKey: "중소기업 기업 수",
      totalKey: "전체 기업 수",
      colorValue: "#2c7be5",
    }),
    renderExportBarChart({
      title: "중소기업 수출금액",
      points: filteredExport,
      key: "중소기업 수출금액",
      type: "amount",
      colorValue: "#59a7ff",
    }),
    renderExportShareLineChart({
      title: "중소기업 수출금액 비중",
      points: filteredExport,
      valueKey: "중소기업 수출금액",
      totalKey: "전체 수출금액",
      colorValue: "#59a7ff",
    }),
    `
      <article class="startup-chart-card">
        <div class="startup-chart-head">
          <div class="startup-chart-title">중소기업 주요 수출국</div>
        </div>
        <div class="startup-summary-grid">
          ${topCountries
            .map(
              (item) => `
                <div class="startup-metric investment-metric" style="--investment-accent:${item.color};">
                  <div class="startup-kicker investment-kicker">${item.name}</div>
                  <div class="startup-value investment-value">${formatExportAmount(item.value)}${item.share === null ? "" : ` <span class="sme-value-unit">(비중: ${formatNumber(item.share, 1)}%)</span>`}</div>
                  <div class="startup-subvalue">${formatYoYGrowth(item.value, item.previousValue)}</div>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>
    `,
    renderExportCountryPieChart({
      title: "국가별 중소기업 수출비중",
      items: pieItems,
      totalValue: countryTotal,
    }),
  ]
    .filter(Boolean)
    .join("");
}

function initStartupYearSelect() {
  const select = document.getElementById("startup-year-select");
  if (!select) {
    return;
  }
  if (!startupSeries.length) {
    select.innerHTML = "";
    return;
  }

  select.innerHTML = startupSeries
    .map((item) => `<option value="${item.year}">${item.year}</option>`)
    .join("");
  select.value = startupSeries[startupSeries.length - 1].year;
}

function initBusinessDateSelect() {
  const select = document.getElementById("business-date-select");
  if (!select) {
    return;
  }
  if (!businessDates.length) {
    select.innerHTML = "";
    return;
  }

  select.innerHTML = businessDates
    .map((key) => `<option value="${key}">${formatBusinessPeriod(key)}</option>`)
    .join("");
  select.value = businessDates[businessDates.length - 1];
  select.onchange = () => {
    renderBusinessSummary();
    renderBusinessCharts();
  };
}

function initLoanYearSelect() {
  // Loan tab now uses monthly range sliders instead of a year dropdown.
}

function initInvestmentDateSelect() {
  const periodSelect = document.getElementById("investment-period-select");
  if (!periodSelect) {
    return;
  }

  periodSelect.innerHTML = INVESTMENT_PERIOD_OPTIONS
    .map((item) => `<option value="${item.value}">${item.label}</option>`)
    .join("");
  periodSelect.value = investmentSelectedPeriod;
  periodSelect.onchange = () => {
    investmentSelectedPeriod = periodSelect.value;
    syncInvestmentSelection();
    initInvestmentDateSelect();
    renderInvestmentSummary();
    renderInvestmentCharts();
  };

  const availableYears = syncInvestmentSelection();
  const yearKeys = availableYears.map(String);
  const normalized = syncRangeSliderPair({
    startId: "investment-year-range-start",
    endId: "investment-year-range-end",
    labelId: "investment-year-range-label",
    trackId: "investment-year-range-track",
    startTextId: "investment-year-range-start-text",
    endTextId: "investment-year-range-end-text",
    keys: yearKeys,
    startValue: investmentYearRangeStart,
    endValue: investmentYearRangeEnd,
    defaultCount: Math.max(yearKeys.length, 1),
    formatLabel: (key) => `${key}년`,
    onChange: (start, end) => {
      investmentYearRangeStart = start;
      investmentYearRangeEnd = end;
      const next = normalizeRangeSelection(yearKeys, investmentYearRangeStart, investmentYearRangeEnd, Math.max(yearKeys.length, 1));
      investmentYearRangeStart = next.start;
      investmentYearRangeEnd = next.end;
      initInvestmentDateSelect();
      renderInvestmentSummary();
      renderInvestmentCharts();
    },
  });
  investmentYearRangeStart = normalized.start;
  investmentYearRangeEnd = normalized.end;
}

function initInvestmentBreakdownControls() {
  const periodSelect = document.getElementById("investment-breakdown-period-select");
  if (!periodSelect) {
    return;
  }

  periodSelect.innerHTML = INVESTMENT_PERIOD_OPTIONS
    .map((item) => `<option value="${item.value}">${item.label}</option>`)
    .join("");
  periodSelect.value = investmentBreakdownSelectedPeriod;
  periodSelect.onchange = () => {
    investmentBreakdownSelectedPeriod = periodSelect.value;
    syncInvestmentBreakdownSelection();
    initInvestmentBreakdownControls();
    renderInvestmentCharts();
  };

  const availableYears = syncInvestmentBreakdownSelection();
  const yearKeys = availableYears.map(String);
  const normalized = syncRangeSliderPair({
    startId: "investment-breakdown-range-start",
    endId: "investment-breakdown-range-end",
    labelId: "investment-breakdown-range-label",
    trackId: "investment-breakdown-range-track",
    startTextId: "investment-breakdown-range-start-text",
    endTextId: "investment-breakdown-range-end-text",
    keys: yearKeys,
    startValue: investmentBreakdownRangeStart,
    endValue: investmentBreakdownRangeEnd,
    defaultCount: Math.max(yearKeys.length, 1),
    formatLabel: (key) => `${key}년`,
    onChange: (start, end) => {
      investmentBreakdownRangeStart = start;
      investmentBreakdownRangeEnd = end;
      const next = normalizeRangeSelection(yearKeys, investmentBreakdownRangeStart, investmentBreakdownRangeEnd, Math.max(yearKeys.length, 1));
      investmentBreakdownRangeStart = next.start;
      investmentBreakdownRangeEnd = next.end;
      initInvestmentBreakdownControls();
      renderInvestmentCharts();
    },
  });
  investmentBreakdownRangeStart = normalized.start;
  investmentBreakdownRangeEnd = normalized.end;
}

function initInvestmentSourceControls() {
  const periodSelect = document.getElementById("investment-source-period-select");
  if (!periodSelect) {
    return;
  }

  periodSelect.innerHTML = INVESTMENT_PERIOD_OPTIONS
    .map((item) => `<option value="${item.value}">${item.label}</option>`)
    .join("");
  periodSelect.value = investmentSourceSelectedPeriod;
  periodSelect.onchange = () => {
    investmentSourceSelectedPeriod = periodSelect.value;
    syncInvestmentSourceSelection();
    initInvestmentSourceControls();
    renderInvestmentCharts();
  };

  const availableYears = syncInvestmentSourceSelection();
  const yearKeys = availableYears.map(String);
  const normalized = syncRangeSliderPair({
    startId: "investment-source-range-start",
    endId: "investment-source-range-end",
    labelId: "investment-source-range-label",
    trackId: "investment-source-range-track",
    startTextId: "investment-source-range-start-text",
    endTextId: "investment-source-range-end-text",
    keys: yearKeys,
    startValue: investmentSourceRangeStart,
    endValue: investmentSourceRangeEnd,
    defaultCount: Math.max(yearKeys.length, 1),
    formatLabel: (key) => `${key}년`,
    onChange: (start, end) => {
      investmentSourceRangeStart = start;
      investmentSourceRangeEnd = end;
      const next = normalizeRangeSelection(yearKeys, investmentSourceRangeStart, investmentSourceRangeEnd, Math.max(yearKeys.length, 1));
      investmentSourceRangeStart = next.start;
      investmentSourceRangeEnd = next.end;
      initInvestmentSourceControls();
      renderInvestmentCharts();
    },
  });
  investmentSourceRangeStart = normalized.start;
  investmentSourceRangeEnd = normalized.end;
}

function initExportDateSelect() {
  const select = document.getElementById("export-date-select");
  if (!select) {
    return;
  }

  if (!exportDates.length) {
    select.innerHTML = "";
    return;
  }

  select.innerHTML = exportDates
    .map((key) => {
      const record = getExportRecord(key);
      return `<option value="${key}">${formatExportPeriod(record?.date)}</option>`;
    })
    .join("");
  const currentValue = getExportSelectedKey();
  select.value = exportDates.includes(currentValue) ? currentValue : exportDates[exportDates.length - 1];
  select.onchange = () => {
    const next = normalizeRangeSelection(exportDates, exportRangeStart, select.value, 5);
    exportRangeStart = next.start;
    exportRangeEnd = next.end;
    initExportDateSelect();
    renderExportSummary();
    renderExportCharts();
  };

  const normalized = syncRangeSliderPair({
    startId: "export-range-start",
    endId: "export-range-end",
    labelId: "export-range-label",
    trackId: "export-range-track",
    startTextId: "export-range-start-text",
    endTextId: "export-range-end-text",
    keys: exportDates,
    startValue: exportRangeStart,
    endValue: exportRangeEnd,
    defaultCount: 5,
    formatLabel: (key) => {
      const record = getExportRecord(key);
      return formatExportPeriod(record?.date);
    },
    onChange: (start, end) => {
      exportRangeStart = start;
      exportRangeEnd = end;
      const next = normalizeRangeSelection(exportDates, exportRangeStart, exportRangeEnd, 5);
      exportRangeStart = next.start;
      exportRangeEnd = next.end;
      const exportSelect = document.getElementById("export-date-select");
      if (exportSelect) {
        exportSelect.value = exportRangeEnd;
      }
      initExportDateSelect();
      renderExportSummary();
      renderExportCharts();
    },
  });

  exportRangeStart = normalized.start;
  exportRangeEnd = normalized.end;
  select.value = exportRangeEnd || select.value;
}

function initSmeYearSelect() {
  if (!smeYears.length) {
    smeSelectedYear = "";
    return;
  }
  if (!smeYears.includes(smeSelectedYear)) {
    smeSelectedYear = smeYears[smeYears.length - 1];
  }
}

function syncDashboardUi() {
  initSmeYearSelect();
  initStartupYearSelect();
  initBusinessDateSelect();
  initBusinessRangeSelects();
  initFeelingBsiSelect();
  initManagementYearSelect();
  initManagementControls();
  initLoanYearSelect();
  initLoanRangeControls();
  initInvestmentDateSelect();
  initInvestmentBreakdownControls();
  initInvestmentSourceControls();
  initExportDateSelect();

  const startupYearSelect = document.getElementById("startup-year-select");
  if (startupYearSelect) {
    startupYearSelect.onchange = () => {
      renderStartupSummary();
      renderStartupCharts();
    };
  }

  renderSmeData();
  renderSmeCharts();
  renderStartupSummary();
  renderStartupCharts();
  renderBusinessSummary();
  renderBusinessCharts();
  renderProductionSummary();
  renderProductionCharts();
  renderOperationSummary();
  renderOperationCharts();
  renderFeelingSummary();
  renderFeelingCharts();
  renderManagementSummary();
  renderManagementCharts();
  renderManagementProfitSummary();
  renderManagementProfitCharts();
  renderManagementStabilitySummary();
  renderManagementStabilityCharts();
  renderLoanSummary();
  renderLoanCharts();
  renderInvestmentSummary();
  renderInvestmentCharts();
  renderExportSummary();
  renderExportCharts();
}

function hydrateDashboardFromCache() {
  let hydrated = false;
  const cachedSmeProfileData = readCachedSmeProfileData();
  const cachedStartupRows = readStartupSnapshot();
  const cachedLoanData = readCachedLoanData();
  const cachedInvestmentData = readCachedInvestmentData();
  const cachedExportData = readCachedExportData();

  if (cachedSmeProfileData) {
    smeLoadError = "";
    smeData = cachedSmeProfileData.nextData;
    smeYears = cachedSmeProfileData.nextYears;
    hydrated = true;
  }

  if (cachedStartupRows.length) {
    startupLoadError = "";
    startupSeries = cachedStartupRows;
    hydrated = true;
  }

  if (cachedLoanData) {
    loanLoadError = "";
    loanSeries = cachedLoanData.loanSeries;
    delinquencySeries = cachedLoanData.delinquencySeries;
    loanYears = cachedLoanData.loanYears;
    hydrated = true;
  }

  if (cachedInvestmentData) {
    investmentLoadError = "";
    investmentSeries = cachedInvestmentData.investmentSeries;
    investmentStageSeries = cachedInvestmentData.investmentStageSeries;
    investmentSectorSeries = cachedInvestmentData.investmentSectorSeries;
    investmentSourceSeries = cachedInvestmentData.investmentSourceSeries;
    investmentDates = cachedInvestmentData.investmentDates;
    hydrated = true;
  }

  if (cachedExportData) {
    exportLoadError = "";
    exportSeries = cachedExportData.series;
    exportCountrySeries = cachedExportData.countrySeries;
    exportDates = exportSeries.map((item) => item.key);
    hydrated = true;
  }

  if (!hydrated) {
    return false;
  }

  syncDashboardUi();
  return true;
}

async function loadSmeData() {
  hydrateDashboardFromCache();

  try {
    smeLoadError = "";
    startupLoadError = "";
    loanLoadError = "";
    investmentLoadError = "";
    exportLoadError = "";
    businessLoadError = "";
    productionLoadError = "";
    operationLoadError = "";
    feelingLoadError = "";
    const [
      smeProfileData,
      startupRows,
      loanPayload,
      investmentPayload,
      exportPayload,
    ] = await Promise.all([
      loadSmeProfileData().catch((error) => {
        smeLoadError = `오류: ${error.message}`;
        return { nextData: smeData, nextYears: smeYears };
      }),
      loadStartupData().catch((error) => {
        startupLoadError = `오류: ${error.message}`;
        return [];
      }),
      loadLoanData().catch((error) => {
        loanLoadError = `오류: ${error.message}`;
        return {
          nextLoanSeries: [],
          nextDelinquencySeries: [],
          nextLoanYears: [],
        };
      }),
      loadInvestmentData().catch((error) => {
        investmentLoadError = `오류: ${error.message}`;
        return {
          investmentSeries: [],
          investmentStageSeries: [],
          investmentSectorSeries: [],
          investmentSourceSeries: [],
          investmentDates: [],
        };
      }),
      loadExportData().catch((error) => {
        exportLoadError = `오류: ${error.message}`;
        return null;
      }),
    ]);
    const { nextData, nextYears } = smeProfileData;
    startupSeries = startupRows;
    loanSeries = loanPayload.nextLoanSeries;
    delinquencySeries = loanPayload.nextDelinquencySeries;
    investmentSeries = investmentPayload.investmentSeries;
    investmentStageSeries = investmentPayload.investmentStageSeries;
    investmentSectorSeries = investmentPayload.investmentSectorSeries;
    investmentSourceSeries = investmentPayload.investmentSourceSeries;
    exportSeries = exportPayload?.series || [];
    exportCountrySeries = exportPayload?.countrySeries || [];
    loanYears = loanPayload.nextLoanYears;
    writeCachedLoanData();
    investmentDates = investmentPayload.investmentDates;
    writeCachedInvestmentData();
    exportDates = exportSeries.map((item) => item.key);
    smeData = nextData;
    smeYears = nextYears;
    writeCachedSmeProfileData(nextData, nextYears);
    syncDashboardUi();
  } catch (error) {
    smeLoadError = smeLoadError || `오류: ${error.message}`;
    startupLoadError = startupLoadError || `오류: ${error.message}`;
    loanLoadError = loanLoadError || `오류: ${error.message}`;
    investmentLoadError = investmentLoadError || `오류: ${error.message}`;
    exportLoadError = exportLoadError || `오류: ${error.message}`;
    businessLoadError = businessLoadError || `오류: ${error.message}`;
    productionLoadError = productionLoadError || `오류: ${error.message}`;
    operationLoadError = operationLoadError || `오류: ${error.message}`;
    businessHasLoaded = Boolean(
      businessCompositeSeries.length
      || businessSeries.length
      || productionSeries.length
      || serviceProductionSeries.length
      || operationRateSeries.length
    );
    syncDashboardUi();
    return;

    smeData = [];
    smeYears = [];
    smeSelectedYear = "";
    startupSeries = [];
    loanSeries = [];
    delinquencySeries = [];
    loanYears = [];
    investmentSeries = [];
    investmentStageSeries = [];
    investmentSectorSeries = [];
    investmentSourceSeries = [];
    investmentDates = [];
    exportSeries = [];
    exportCountrySeries = [];
    exportDates = [];
    businessCompositeSeries = [];
    businessSeries = [];
    businessDates = [];
    productionSeries = [];
    serviceProductionSeries = [];
    operationRateSeries = [];
    feelingActualSeries = [];
    feelingOutlookSeries = [];
    smeLoadError = `오류: ${error.message}`;
    startupLoadError = `오류: ${error.message}`;
    loanLoadError = `오류: ${error.message}`;
    investmentLoadError = `오류: ${error.message}`;
    exportLoadError = `오류: ${error.message}`;
    businessLoadError = `오류: ${error.message}`;
    productionLoadError = `오류: ${error.message}`;
    operationLoadError = `오류: ${error.message}`;
    businessHasLoaded = false;
    feelingLoadError = `오류: ${error.message}`;
    feelingHasLoaded = false;
    managementLoadError = `오류: ${error.message}`;
    managementHasLoaded = false;
    initSmeYearSelect();
    initStartupYearSelect();
    initBusinessDateSelect();
    initFeelingBsiSelect();
    initManagementYearSelect();
    initLoanYearSelect();
    initInvestmentDateSelect();
    initExportDateSelect();
    renderSmeData();
    renderSmeCharts();
    renderStartupSummary();
    renderStartupCharts();
    renderBusinessSummary();
    renderBusinessCharts();
    renderProductionSummary();
    renderProductionCharts();
    renderOperationSummary();
    renderOperationCharts();
    renderFeelingSummary();
    renderFeelingCharts();
    renderManagementSummary();
    renderManagementCharts();
    renderManagementProfitSummary();
    renderManagementProfitCharts();
    renderManagementStabilitySummary();
    renderManagementStabilityCharts();
    renderLoanSummary();
    renderLoanCharts();
    renderInvestmentSummary();
    renderInvestmentCharts();
    renderExportSummary();
    renderExportCharts();
  }
}

function bindTabs() {
  const buttons = document.querySelectorAll("[data-tab]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTab(button.dataset.tab);
    });
  });
}

function setActiveTab(tabName) {
  const buttons = document.querySelectorAll("[data-tab]");
  const panels = document.querySelectorAll("[data-panel]");

  buttons.forEach((item) => item.classList.toggle("is-active", item.dataset.tab === tabName));
  panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === tabName));

  try {
    window.localStorage.setItem(LAST_ACTIVE_TAB_KEY, tabName);
  } catch (error) {
    // Ignore storage errors.
  }

  if (tabName === "feeling" && !feelingHasLoaded) {
    hydrateFeelingFromCache();
    initFeelingBsiSelect();
    if (!feelingIsLoading) {
      refreshFeelingData();
    }
  }
  if (tabName === "management" && !managementHasLoaded) {
    hydrateManagementFromCache();
    if (!managementIsLoading) {
      refreshManagementData();
    }
  }
  if (tabName === "business" && !businessHasLoaded && !businessIsLoading) {
    refreshBusinessData();
  }
}

function initHomeScreen() {
  const appFrame = document.querySelector(".app-frame");
  const homeScreen = document.getElementById("home-screen");
  const homeButtons = document.querySelectorAll("[data-home-tab]");
  if (!appFrame || !homeScreen) {
    return;
  }

  let hasSeenHome = false;
  let lastTab = "sme";

  try {
    hasSeenHome = window.localStorage.getItem(HOME_SCREEN_SEEN_KEY) === "true";
    lastTab = window.localStorage.getItem(LAST_ACTIVE_TAB_KEY) || "sme";
  } catch (error) {
    hasSeenHome = false;
    lastTab = "sme";
  }

  if (!hasSeenHome) {
    appFrame.classList.add("is-home-mode");
  } else {
    appFrame.classList.remove("is-home-mode");
    setActiveTab(lastTab);
  }

  homeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabName = button.dataset.homeTab || "sme";
      try {
        window.localStorage.setItem(HOME_SCREEN_SEEN_KEY, "true");
      } catch (error) {
        // Ignore storage errors.
      }
      appFrame.classList.remove("is-home-mode");
      setActiveTab(tabName);
    });
  });
}

function bindHomeNavButton() {
  const button = document.getElementById("home-nav-button");
  const appFrame = document.querySelector(".app-frame");
  if (!button || !appFrame) {
    return;
  }

  button.addEventListener("click", () => {
    try {
      window.localStorage.removeItem(HOME_SCREEN_SEEN_KEY);
      window.localStorage.removeItem(LAST_ACTIVE_TAB_KEY);
    } catch (error) {
      // Ignore storage errors.
    }
    appFrame.classList.add("is-home-mode");
  });
}

async function loadMarketData() {
  const button = document.getElementById("refresh-button");
  const previousSnapshot = readSnapshot();

  button.disabled = true;
  button.textContent = "갱신 중";
  setStatus("시세 데이터를 다시 불러오는 중입니다.");

  try {
    const [kospiText, kosdaqText, marketText, goldPayload, silverPayload, bitcoinPayload] =
      await Promise.all([
        fetchText(NAVER_URLS.kospi),
        fetchText(NAVER_URLS.kosdaq),
        fetchText(NAVER_URLS.market),
        fetchJson(`${GOLD_API_BASE}/XAU`),
        fetchJson(`${GOLD_API_BASE}/XAG`),
        fetchJson(`${GOLD_API_BASE}/BTC`),
      ]);

    const merged = {
      kospi: parseIndexPage(kospiText, "KOSPI"),
      kosdaq: parseIndexPage(kosdaqText, "KOSDAQ"),
      ...parseMarketIndex(marketText),
      gold: parseAltAsset(goldPayload, previousSnapshot),
      silver: parseAltAsset(silverPayload, previousSnapshot),
      bitcoin: parseAltAsset(bitcoinPayload, previousSnapshot),
    };

    renderMarketList(merged);
    writeSnapshot({
      XAU: { price: merged.gold.rawPrice },
      XAG: { price: merged.silver.rawPrice },
      BTC: { price: merged.bitcoin.rawPrice },
    });
    setStatus("실시간 시세 반영 완료");
  } catch (error) {
    renderMarketList({});
    setStatus(`업데이트 실패: ${error.message}`);
  } finally {
    button.disabled = false;
    button.textContent = "새로고침";
  }
}

function bindRefresh() {
  const button = document.getElementById("refresh-button");
  if (button) {
    button.addEventListener("click", loadMarketData);
  }
}

function bindPageRefresh() {
  const button = document.getElementById("page-refresh-button");
  if (button) {
    button.addEventListener("click", () => {
      window.location.reload();
    });
  }
}

function bindBusinessRefresh() {
  const button = document.getElementById("business-refresh-button");
  if (button) {
    button.addEventListener("click", refreshBusinessData);
  }
}

function bindProductionRefresh() {
  const button = document.getElementById("production-refresh-button");
  if (button) {
    button.addEventListener("click", refreshBusinessData);
  }
}

function bindOperationRefresh() {
  const button = document.getElementById("operation-refresh-button");
  if (button) {
    button.addEventListener("click", refreshBusinessData);
  }
}

function bindFeelingRefresh() {
  const button = document.getElementById("feeling-refresh-button");
  if (button) {
    button.addEventListener("click", refreshFeelingData);
  }
}

function bindManagementRefresh() {
  const button = document.getElementById("management-refresh-button");
  if (button) {
    button.addEventListener("click", refreshManagementData);
  }
}

function bindLoanRefresh() {
  const button = document.getElementById("loan-refresh-button");
  if (button) {
    button.addEventListener("click", refreshLoanData);
  }
}

function bindInvestmentRefresh() {
  const button = document.getElementById("investment-refresh-button");
  if (button) {
    button.addEventListener("click", refreshInvestmentData);
  }
}

function bindExportRefresh() {
  const button = document.getElementById("export-refresh-button");
  if (button) {
    button.addEventListener("click", refreshExportData);
  }
}

function bindStartupRefresh() {
  const button = document.getElementById("startup-refresh-button");
  if (button) {
    button.addEventListener("click", refreshStartupData);
  }
}

function bindSmeRefresh() {
  // Rendered per SME section.
}

bindTabs();
initHomeScreen();
bindHomeNavButton();
bindRefresh();
bindPageRefresh();
bindSmeRefresh();
bindBusinessRefresh();
bindProductionRefresh();
bindOperationRefresh();
bindFeelingRefresh();
bindManagementRefresh();
bindLoanRefresh();
bindInvestmentRefresh();
bindExportRefresh();
bindStartupRefresh();
loadSmeData();
