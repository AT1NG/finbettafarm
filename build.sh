#!/bin/sh
set -e
rm -rf dist && mkdir -p dist
npx tailwindcss -i input.css -o dist/styles.css --minify
cp index.html 404.html data.js app.js favicon.svg robots.txt sitemap.xml dist/
