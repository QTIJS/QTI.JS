#!/bin/bash
# Repackage QTI content package as a QTI.JS content package

TOOLSDIR=$(dirname $0)
SRCDIR=$TOOLSDIR/../src
PKGDIR=$TOOLSDIR/../package
TMPDIR=$(mktemp -d)
TMPFILE=$(mktemp)
IN=$(realpath $1)
OUT=$(realpath $2)

# echo TOOLSDIR=$TOOLSDIR
# echo SRCDIR=$SRCDIR
# echo TMPDIR=$TMPDIR
# echo TMPFILE=$TMPFILE
# echo IN=$IN
# echo OUT=$OUT

unzip -q $IN -d $TMPDIR
sed -rn '/<(\/?resource[^s]>?|file )/p' $SRCDIR/MANIFEST > $TMPFILE
sed -i "/<resources>/r $TMPFILE" $TMPDIR/imsmanifest.xml
cp -a $PKGDIR/* $TMPDIR
cd $TMPDIR
zip -q -r $OUT .



