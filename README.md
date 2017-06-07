# v3: Basic Prometheus Metrics

First, let's take a look at the new version of the code
```
cat index.js
```

There will be the same human readable message when someone hits `/`, but `/metrics` is for Prometheus to scrape.

Draft is running in another shell, so this should get deployed.

Check out what it does now
```
curl http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/metrics
```

Throw some load at it once again
```
ab -n 300 -c 100 http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

And have a look at the count
```
curl http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/metrics
```

Well, our hit counter is really really basic. Prometheus does add-up these number and we don't have to
care about persistance, but we have no idea which requests may be failing with an error 500 or soemthing,
and which may be taking too long.

Next we will add a Prometheus client library, which will get us more decent metrics
```
git checkout v3-using-prom-lib
cat README.md
```
