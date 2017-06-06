Install Weave Cloud agents using Helm

```
helm install --name weave-cloud --namespace kube-system --set ServiceToken=7dhiomxfmsur8gurmhay67o8rom3g683 ~/Code/charts/stable/weave-cloud/
```

Install Draft chart
```
helm install --name draft --namespace kube-system ~/Code/draft/src/github.com/Azure/draft/chart
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

