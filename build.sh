#!/bin/sh
set -e
rm -rf dist && mkdir -p dist
F=node_modules/@fontsource
cp $F/bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff2 dist/bricolage-700.woff2
cp $F/bricolage-grotesque/files/bricolage-grotesque-latin-800-normal.woff2 dist/bricolage-800.woff2
cp $F/figtree/files/figtree-latin-400-normal.woff2 dist/figtree-400.woff2
cp $F/figtree/files/figtree-latin-600-normal.woff2 dist/figtree-600.woff2
cp $F/figtree/files/figtree-latin-700-normal.woff2 dist/figtree-700.woff2
npx tailwindcss -i input.css -o dist/styles.css --minify
cp index.html 404.html data.js app.js favicon.svg robots.txt sitemap.xml dist/
[ -f og.png ] && cp og.png dist/ || true
[ -d foto ] && cp -r foto dist/ || true
