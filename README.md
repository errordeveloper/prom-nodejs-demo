# v4: Prometheus Client

First, new version of the code
```
cat index.js
```

We have added to NPM packages – `restify` & `restify-prom-bundle`.

Draft is running in another shell, so this should get deployed.

Check out what it does now
```
curl http://${ip}/metrics
```

Try scaling it up a bit more
```
kubectl scale deployment nodejs-demo --replicas 6
```

Throw even more load at it once again, this time we will run `ab` inside the cluster
```
kubectl apply -f ./load-test
```

And have a look at the metrics
```
curl http://${ip}/metrics
```

Find new metrics with HTTP request labels in Weave Cloud notebook.

That's it
```
git checkout -q v5-finish
./cleanup.sh
```
