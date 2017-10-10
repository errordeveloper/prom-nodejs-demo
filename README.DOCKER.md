# v0: Start

Get the code
```
git clone https://github.com/errordeveloper/prom-nodejs-demo
cd prom-nodejs-demo
cat README.DOCKER.md
```

Setup Swarm on local Docker:
```
docker swarm init
```

Get Weave Cloud token and set `WEAVE_CLOUD_DEMO_TOKEN` environment variable
```
export WEAVE_CLOUD_DEMO_TOKEN=<token>
```

Now, checkout the first version of the app
```
git checkout -q v1-hello-world
cat README.DOCKER.md
```
