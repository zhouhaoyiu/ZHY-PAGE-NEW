#!/bin/sh
set -eu
ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
FILE="$ROOT/scripts/waveform-data/20110221_235142_RHSC.V2A"
URL='https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/seismic-products/strong-motion/volume-products/2011/02_Christchurch_mainshock_extended_pass_band/Vol2/data/20110221_235142_RHSC.V2A'
if [ ! -f "$FILE" ]; then
  curl --fail --location --max-time 60 "$URL" -o "$FILE.download"
  mv "$FILE.download" "$FILE"
fi
printf '%s  %s\n' 'e3f68f134c4fb7d554f79665d102f3a649e2a94830e8eef2b94850437e4c5f0c' "$FILE" | shasum -a 256 -c -
