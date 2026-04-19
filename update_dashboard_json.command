#!/bin/zsh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

echo "Updating dashboard JSON files..."
python3 update_dashboard_json.py
STATUS=$?

echo
if [ "$STATUS" -eq 0 ]; then
  echo "Done."
else
  echo "Update failed with exit code $STATUS."
fi

echo
read -k 1 "?Press any key to close..."
echo
exit "$STATUS"
