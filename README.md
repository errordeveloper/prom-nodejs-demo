# v2: Hit Counter

First, let's take a look at the new version of the code
```
cat index.js
```

We've added a counter for visitors who hit `/`, and we can view it at `/hits`. Awesome!

Deploy it to Kubernetes and keep draft running in a new terminal window
```
draft up
```

Check out what it does now
```
curl "http://${ip}/reverse?string=banana"
```

Same thing!

Throw some load at it once again
```
ab -n 300 -c 100 http://${ip}/
```

And have a look at the count
```
curl "http://${ip}/hits"
```

Now let's run our load test in another terminal window for a longer period...

And we can also write a simple script to sample hit counts and store those in a CSV file.
Of course, we don't have time to look mess around with JMeter or anything like that, we
will write this in bash!
```
cat collect_samples.sh
```

LGTM; run it!

```
./collect_samples.sh
```

So what could possibly go wrong?

```
less samples.csv
```

Hm... may be there is a better way to do this on Kubernetes?

Checkout v3 to see what this would look like!

```
git checkout -q v3-basic-prom-metrics
cat README.md
```
