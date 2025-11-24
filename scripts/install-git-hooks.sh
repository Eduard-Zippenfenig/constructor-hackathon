#!/bin/sh
# Installs the repository hooks by setting Git's core.hooksPath to the tracked `githooks` folder
set -e
ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
echo "Installing git hooks from: $ROOT_DIR/githooks"

git config core.hooksPath "$ROOT_DIR/githooks"
chmod +x "$ROOT_DIR/githooks/pre-push" || true
echo "Hooks installed. To undo, run: git config --unset core.hooksPath"
