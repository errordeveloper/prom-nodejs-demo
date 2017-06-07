#!/bin/bash -x
helm delete --purge draft
helm delete --purge nodejs-demo
helm delete --purge weave-cloud
