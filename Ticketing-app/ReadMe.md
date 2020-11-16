# Auth Module

- Install dependencies

```
 npm install typescript ts-node-dev express @types/express

```

- Create docker image

```
 docker build -t ginsp/ticket-auth:api-error .

 docker push ginsp/ticket-auth:api-error



 docker run ginsp/ticket-auth:api-error
```

# Helm

* Auth

helm create auth

helm install auth ./auth

helm uninstall auth

helm uninstall auth 

helm get manifest auth

helm upgrade auth ./auth

* MongoDB

helm create auth-mongo







# Minikube

minikube start --driver=kvm2

minikube addons enable ingress

kubectl expose deployment auth --type=NodePort --port=3000

helm install mongo bitnami/mongodb

