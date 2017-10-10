# v0: Start

Get the code
```
git clone https://github.com/errordeveloper/prom-nodejs-demo
cd prom-nodejs-demo
cat README.md
```

> This demo requires a Kubernetes cluster with functional external load balancing and ingress, e.g. GKE. 
> You also need to have `kubectl`, `draft` and `helm` commands in your shell's search path.

Get Weave Cloud token and set `WEAVE_CLOUD_DEMO_TOKEN` environment variable
```
export WEAVE_CLOUD_DEMO_TOKEN=<token>
```
Install Weave Cloud agents using Helm

```
helm install --name weave-cloud --namespace kube-system --set ServiceToken=${WEAVE_CLOUD_DEMO_TOKEN} vendor/weave-cloud
```

Install Draft chart
```
helm install --name draft --namespace kube-system vendor/draft
```

Now, checkout the first version of the app
```
git checkout -q v1-hello-world
cat README.md
```
