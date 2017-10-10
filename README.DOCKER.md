# v1: Hello, World!

First, let's take a look at the code
```
cat index.js
```

Our startup is building the best greeting app, we are launching it today!
Everyone will be talking about it on Hacker News tomorrow, you bet.
We are all set to launch this app and we have picked the best tools. We will
be seeing millions of vistiors. The app is very simple right now, but we will
add more features next week. Right now, we just want to make sure we can run
it on Docker, as it's the way to go, and of course we are buidling it in JS.
We will be deploying dozens of microservices, and will probably add some AI
components to personalise the greetings without knowing up-front who the
user is.

There are `Dockerfile` and `docker-stack.yml` already written and checked-in
```
cat Dockerfile
cat docker-stack.yml
```

Let's build and deploy it
```
docker build -t myapp:v1 .
docker stack deploy --resolve-image=never --compose-file=docker-stack.yml demo
```

Manual QA step
```
curl localhost:8080
```

As millions of users will be visiting our app, let's throw some load at it and
make sure it can stand up to it
```
ab -n 1000 -c 20 http://localhost:8080/
```

That's great! But how are we going to know we provide good service and every user
sees a greeting very quickly?

Checkout next version of the app to find out more...
```
git checkout -q v2-hit-counter
cat README.DOCKER.md
```
