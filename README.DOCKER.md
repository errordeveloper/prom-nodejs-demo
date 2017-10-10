# v4: Prometheus Client

First, new version of the code
```
cat index.js
```

We have added to NPM packages – `restify` & `restify-prom-bundle`.

Build and deploy new version
```
docker build -t myapp:v4 .
docker stack deploy --resolve-image=never --compose-file=docker-stack.yml demo
```

Scale it up even more
```
docker service scale --detach=false demo_myapp=12
```

And have a look at the count
```
curl http://localhost:8080/metrics
```

Throw even more load at it once again
```
ab -n 300 -c 100 http://localhost/
```

And have a look at the metrics
```
curl http://localhost:8080/metrics
```

Find new metrics with HTTP request lables in Weave Cloud notebook.

That's it
```
docker stack rm demo
docker image rm myapp:v1 myapp:v2 myapp:v3 myapp:v4
```
