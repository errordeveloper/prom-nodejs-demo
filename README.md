
# v0: Start

Get the code
```
git clone https://github.com/errordeveloper/nodejs-prometheus-demo
cd nodejs-prometheus-demo
cat README.md
```

> This demo requires a Kubernetes cluster with functional external load balancing and ingress, e.g. GKE. 
> You also need to have `kubectl`, `draft` and `helm` commands in your shell's search path.

Install Weave Cloud agents using Helm

```
helm install --name weave-cloud --namespace kube-system --set ServiceToken=${WEAVE_CLOUD_DEMO_TOKEN} vendor/weave-cloud
```

Install Draft chart
```
helm install --name draft --namespace kube-system vendor/draftd
```

Now, checkout the first version of the app
```
git checkout v1-hello-world
cat README.md
```
