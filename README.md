# v3: Basic Prometheus Metrics

First, let's take a look at the new version of the code
```
cat index.js
```

We've added `/metrics` for Prometheus to scrape. As you can see the format is very simple.

Draft is running in another shell, so this should get deployed.

Grab the IP
```
ip="$(kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
```

Check out what `/metrics` does
```
curl "http://${ip}/metrics"
```

Throw some load at it once again
```
ab -n 300 -c 100 "http://${ip}/"
```

And have a look at the count
```
curl "http://${ip}/metrics"
```

Try scaling it up a bit
```
kubectl scale deployment nodejs-demo --replicas 3
```

Observe that scale being reflected in `sum(up{job="default/nodejs-demo"}) by (job)` graph.

Well, our hit counter is really really basic. Prometheus does add-up these number and we don't have to
care about persistence, but we have no idea which requests may be failing with an error 500 or something,
and which may be taking too long.

Next we will add a Prometheus client library, which will get us more decent metrics
```
git checkout -q v4-prom-client
cat README.md
```
