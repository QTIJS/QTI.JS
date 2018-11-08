#!/bin/bash
# Simple javascript "bundler".  Just concatenates javascript files in
# src to make a single file, which is output on stdout.  Any order
# would work but for debugging convenience in the browser we try to
# create a consistent and somewhat logical order.

BINDIR=$(dirname $0)

cd $BINDIR/../src

cat \
 constants.js \
 logging.js \
 executors.js \
 extensions.js \
 transform.js \
 selection_ordering.js \
 shuffle.js \
 setup_assessment_item.js \
 input_interactions.js \
 dragdrop_interactions.js \
 graphic_interactions.js \
 custom_interaction.js \
 media_interaction.js \
 session.js \
 validate.js \
 declarations.js \
 processing.js \
 operators.js \
 rptemplates.js \
 durations.js \
 results.js \
 utils.js \
 graphic_utils.js \
 keydown.js \
 xhr.js \
 main.js

