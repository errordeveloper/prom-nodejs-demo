# v4: Prometheus Client

First, new version of the code
```
cat index.js
```

We have added to NPM packages – `restify` & `restify-prom-bundle`.

Draft is running in another shell, so this should get deployed.

Check out what it does now
```
curl http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/metrics
```

Try scaling it up a bit more
```
kubectl scale deployment nodejs-demo --replicas 6
```

Throw even load at it once again
```
ab -n 300 -c 100 http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

And have a look at the count
```
curl http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/metrics
```

Find new metrics with request tags in Weave Cloud notebook.

That's it
```
git checkout -q v5-finish
./cleanup.sh
```
