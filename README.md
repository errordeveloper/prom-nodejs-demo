# v1: Hello, World!

First, let's take a loot at the code
```
cat index.js
```

There are other files, like `draft.toml`, stuff in `chart/` and a `Dockerfile`.

Deploy it to Kubernetes
```
draft up
```

Get external IP address
```
kubectl get svc nodejs-demo
```

Check it out
```
curl http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`
```

Throw some load at it
```
ab -n 300 -c 100 http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`
```

Add metrics code
```
git checkout v2-request-counter
cat README.md
```
