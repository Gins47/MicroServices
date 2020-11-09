# Auth Module

- Install dependencies

```
 npm install typescript ts-node-dev express @types/express

```

- Create docker image

```
 docker build -t ginsp/ticket-auth:test .

 docker push ginsp/ticket-auth:test
```

- Helm

helm create auth

helm install auth ./auth

helm uninstall auth

helm uninstall auth 

helm get manifest auth

minikube start --driver=virtualbox

minikube start --driver=kvm2

minikube addons enable ingress

kubectl expose deployment auth --type=NodePort --port=3000

