# Auth Module

- Install dependencies

```
 npm install typescript ts-node-dev express @types/express

```

- Create docker image

```
 docker build -t ginsp/ticket-auth:jwt1 .

 docker push ginsp/ticket-auth:jwt1



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

helm install auth-mongo --values auth-mongo-values.yaml bitnami/mongodb

helm uninstall auth-mongo

helm install auth-mongo ./auth-mongo

helm upgrade auth-mongo ./auth-mongo

* Find a way to enable auth and authenticate with the mongo pod








# Minikube

minikube start --driver=kvm2

minikube addons enable ingress

kubectl expose deployment auth --type=NodePort --port=3000

helm install mongo bitnami/mongodb

# Creating secret

kubectl create secret generic jet-secret --from-literal=JWT_KEY=qwwert

