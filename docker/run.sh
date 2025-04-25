#!/usr/bin/env sh
git fetch --all
git reset --hard origin/main

npm install && npm run main

git add .
if [[ -n "$(git status --porcelain)" ]]; then
    git commit -m "Import episode of $(date +"%d %B")"
    git push
fi
