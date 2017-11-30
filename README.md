# v1: Hello, World!

First, let's take a look at the code
```
cat index.js
```

Our startup is building the best greeting app, we are launching it today!
Everyone will be talking about it on Hacker News tomorrow, you bet.
We are all set to launch this app and we have picked the best tools. We will
be seeing millions of visitors. The app is very simple right now, but we will
add more features next week. Right now, we just want to make sure we can run
it on Kubernetes, as it's the way to go, and of course we are building it in JS.
We will be deploying dozens of microservices, and will probably add some AI
components to personalise the greetings without knowing up-front who the
user is.

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

As millions of users will be visiting our app, let's throw some load at it and
make sure it can stand up to it
```
ab -n 300 -c 100 http://`kubectl get svc nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`/
```

That's great! But how are we going to know we provide good service and every user
sees a greeting very quickly?

Checkout next version of the app to find out more...
```
git checkout -q v2-hit-counter
cat README.md
```
