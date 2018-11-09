#!/bin/bash
# Builds the QTI.JS package and test/preview files

DIR=$(dirname $0)

DOCROOT=$(realpath $DIR/../docroot)
mkdir -p $DOCROOT

cd $DIR/..
rm -rf package
mkdir -p package/qtijs
cp LICENSE package/qtijs/LICENSE
cp src/VERSION package/qtijs/VERSION
cp src/index.html package/
$DIR/bundle.sh > package/qti.js
cp -a themes/basic package/theme

rm qtijs.package.zip -f
(cd package; zip ../qtijs.package.zip -r ./ >/dev/null 2>&1)

cd test
touch dummy~; rm $(find . -name '*~')
rsync -av -o -g -L --delete --exclude work ./ $DOCROOT/
