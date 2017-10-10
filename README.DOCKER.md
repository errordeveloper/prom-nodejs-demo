# v2: Hit Counter

First, let's take a look at the new version of the code
```
cat index.js
```

Build and deploy this new version
```
docker build -t myapp:v2 .
docker stack deploy --resolve-image=never --compose-file=docker-stack.yml demo
```

Check out what it does now
```
curl localhost:8080
curl localhost:8080/hits
```

Scale up and throw some load at it once again
```
docker service scale --detach=false demo_myapp=3
ab -n 10000 -c 20 http://localhost:8080/
```
And have a look at the count
```
curl localhost:8080/hits
```

Now let's run our load test in another terminal for a longer period...

And we can also write a simple script to sample hit counts and store those in a CSV file.
Of course, we don't have time to look mess around with JMeter or anything like that, we
will write this in bash!
```
cat collect_samples_docker.sh
```

LGTM; run it!

```
./collect_samples_docker.sh
```

So what could possibly go wrong?

```
less samples.csv
```

Hm... may be there is a better way to do this on Kubernetes?

Checkout v3 to see what this would look like!

```
git checkout -q v3-prom-metrics
cat README.DOCKER.md
```
