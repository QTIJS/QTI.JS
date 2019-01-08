#!/bin/bash
# Builds the QTI.JS package and test/preview files

rm -rf package
mkdir -p package docroot
cp LICENSE package/
cp src/VERSION package/
cp src/index.html package/
tools/bundle.sh > package/qti.js
cp -a themes/basic package/theme
rm qtijs.package.zip -f
(cd package; zip ../qtijs.package.zip -r ./ >/dev/null 2>&1)
rsync -av -o -g -L  ./test/ ./docroot/
