# v2: Hit Counter

First, let's take a look at the new version of the code
```
cat index.js
```

Deploy it to Kubernetes and keep draft running
```
draft up
```

In another shell...

Check out what it does now
```
curl http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

Throw some load at it once again
```
ab -n 300 -c 100 http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

And have a look at the count
```
curl http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

Next we will add Prometheus `/metrics` code
```
git checkout v2-basic-prom-metrics
cat README.md
```
