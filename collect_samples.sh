#!/bin/bash -eu

addr="$(kubectl get svc java-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"

echo > samples.csv

while true ; do
  curl -w ",%{time_total},$(date +%s)\n" -s http://${addr}/hits >> samples.csv
done
