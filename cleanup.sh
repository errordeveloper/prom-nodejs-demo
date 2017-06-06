#!/bin/bash -eux
helm delete --purge draft
helm delete --purge nodejs-demo
helm delete --purge weave-cloud
