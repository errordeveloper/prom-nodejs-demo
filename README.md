# v1: Hello, World!

First, let's take a look at the code
```
cat index.js
```

There are other files, like `draft.toml`, stuff in `chart/` and a `Dockerfile`.

Deploy it to Kubernetes
```
draft up
```

Wait for external IP address
```
kubectl get svc nodejs-demo --watch
```

Handy command to grab the IP
```
kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

Check it out
```
curl http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

Throw some load at it
```
ab -n 300 -c 100 http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

Next, let's try to count how many hits do we get
```
git checkout -q v2-hit-counter
cat README.md
```
