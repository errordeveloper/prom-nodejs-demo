#!/bin/bash -x
helm delete --purge draft
helm delete --purge nodejs-demo
kubectl delete -f load-test
