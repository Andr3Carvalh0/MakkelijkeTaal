#!/usr/bin/env sh
echo "$(date)"

git fetch --all
git reset --hard origin/main

rm -rf node_modules

npm install
npm run main

git add podcast.rss
if [[ -n "$(git status --porcelain)" ]]; then
    git commit -m "Import episode of $(date +"%d %B")"
    git push
fi
