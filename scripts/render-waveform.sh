#!/bin/sh
set -eu
ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
cd "$ROOT/scripts/waveform-data"
gmt begin "$ROOT/public/research/waveform" png E150
gmt set PS_PAGE_COLOR white MAP_FRAME_PEN 0p FONT_ANNOT_PRIMARY 10p,Helvetica,gray
gmt basemap -R-60/70/0/4 -JX32c/18c -B0
gmt plot channel1.tsv -W0.7p,100/119/117
gmt plot channel2.tsv -W0.7p,100/119/117
gmt plot channel3.tsv -W0.7p,100/119/117
gmt end
