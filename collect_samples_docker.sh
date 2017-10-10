#!/bin/bash -eu

addr="localhost:8080"

echo > samples.csv

while true ; do
  curl -w ",%{time_total},$(date +%s)\n" -s http://${addr}/hits >> samples.csv
done
