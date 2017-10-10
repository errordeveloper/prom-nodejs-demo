# v3: Basic Prometheus Metrics

First, let's take a look at the new version of the code
```
cat index.js
```

We've added `/metrics` for Prometheus to scrape. As you can see the format is very simple.

Also, we've upated `docker-stack.yml` to add Prometheus. We use an image that generates
config file with `remote_write` setting for Weave Cloud Monitor.

Let's build and deploy it
```
docker build -t myapp:v3 .
docker stack deploy --resolve-image=never --compose-file=docker-stack.yml demo
```

Check out what `/metrics` does
```
curl http://localhost:8080/metrics
```

Throw some load at it once again
```
ab -n 300 -c 100 http://localhost:8080/
```

And have a look at the count
```
curl http://localhost:8080/metrics
```

Try scaling it up a bit
```
docker service scale --detach=false demo_myapp=6
```

Observe that scale being reflected in `sum(up{job="myapp"}) by (job)` graph.

Well, our hit counter is really really basic. Prometheus does add-up these number and we don't have to
care about persistance, but we have no idea which requests may be failing with an error 500 or soemthing,
and which may be taking too long.

Next we will add a Prometheus client library, which will get us more decent metrics
```
git checkout -q v4-prom-client
cat README.DOCKER.md
```
