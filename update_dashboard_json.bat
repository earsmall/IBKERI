@echo off
setlocal

cd /d "%~dp0"

echo ============================================================
echo  SME dashboard data update
echo ============================================================
echo.
echo This runs update_openapi_dashboard.py.
echo It updates data/dashboard-data.js and index.html when new data exists.
echo.

set "SCRIPT=update_openapi_dashboard.py"
set "PYTHON_EXE=%USERPROFILE%\anaconda3\python.exe"

if exist "%PYTHON_EXE%" (
  "%PYTHON_EXE%" "%SCRIPT%"
) else (
  python "%SCRIPT%"
)

set "RESULT=%ERRORLEVEL%"
echo.
if not "%RESULT%"=="0" (
  echo Update failed. Please check the messages above.
) else (
  echo Finished. Please check the update result above.
)
echo.
echo Press any key to close this window.
pause >nul
exit /b %RESULT%
