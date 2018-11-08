#!/bin/bash
# Builds the QTI.JS package and test/preview files

DIR=$(dirname $0)

DOCROOT=$(realpath $DIR/../docroot)
mkdir -p $DOCROOT

cd $DIR/..
rm -rf package
mkdir -p package 
$DIR/bundle.sh > package/qti.js
cp src/index.html package/
cp src/qtijs-manifest.xml package/
cp src/favicon.ico package/
cp -a themes/basic package/theme
(cd package; zip qtijs.zip -r -b /tmp ./ >/dev/null 2>&1)

cd test
touch dummy~; rm $(find . -name '*~')
rsync -av -o -g -L --delete --exclude work ./ $DOCROOT/
