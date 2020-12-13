# Auth Module

- Install dependencies

```
 npm install typescript ts-node-dev express @types/express

```

- Create docker image

```
 docker build -t ginsp/ticket-auth:authModule .

 docker push ginsp/ticket-auth:authModule

* Client

docker build -t ginsp/ticket-auth:client .

docker push ginsp/ticket-auth:client


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

* Client


helm create client


helm install client ./client

helm upgrade client ./client

* Ingress


helm upgrade client ./client





# Minikube

minikube start --driver=kvm2

minikube addons enable ingress

kubectl expose deployment auth --type=NodePort --port=3000

helm install mongo bitnami/mongodb

# Creating secret

kubectl create secret generic jet-secret --from-literal=JWT_KEY=qwwert


* Bypass chrome
Thisisunsafe

