Install Weave Cloud agents using Helm

```
helm install --name weave-cloud --namespace kube-system --set ServiceToken=${WEAVE_CLOUD_DEMO_TOKEN} vendor/weave-cloud
```

Install Draft chart
```
helm install --name draft --namespace kube-system vendor/draftd
```

Take a loot at the code
```
cat index.js
```

Deploy it to Kubernetes
```
draft up
```

Check it out
```
curl http://`kubectl get svc --namespace default nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`
```

Throw some load at it
```
ab -n b00000 -c 100 http://`kubectl get svc --namespace default nodejs-demo -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`
```

