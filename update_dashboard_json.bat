@echo off
setlocal

cd /d "%~dp0"
echo Updating dashboard JSON files...
python update_dashboard_json.py
if errorlevel 1 (
  echo.
  echo Update failed.
  pause
  exit /b %errorlevel%
)

echo.
echo Done.
pause
