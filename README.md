# v2: Request Counter

First, let's take a look at the new version of the code
```
cat index.js
```

There are other files, like `draft.toml`, stuff in `chart/` and a `Dockerfile`.

Deploy it to Kubernetes
```
draft up
```

Check it out
```
curl http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

Throw some load at it
```
ab -n 300 -c 100 http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

And have a look at the count
```
curl http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

Add Prometheus `/metrics` code
```
git checkout v2-basic-prom-metrics
cat README.md
```
