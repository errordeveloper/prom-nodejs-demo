#!/bin/bash -eu

addr="$(kubectl get svc java-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"

echo > samples.csv

while true ; do
  gtimeout 0.5 curl --write-out ",%{time_total},$(date +%s)\n" --silent --connect-timeout 1 "http://${addr}/hits" >> samples.csv || true
  printf .
  sleep 0.5
done
