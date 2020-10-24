# MicroServices

1. Sample Application.
  
  * Create react app
   
   `npx create-react-app client`

   http://localhost:4001/posts/554e526c/comments

   http://localhost:4001/posts/123/comments

2. Docker
  
  * Create image post image

   docker build -t ginsp/events:latest .
   docker push ginsp/events:latest

   docker build -t ginsp/posts:latest .
   docker push ginsp/posts:latest


   docker build -t ginsp/comment:latest .
   docker push ginsp/comment:latest


   docker build -t ginsp/events:latest .
   docker push ginsp/events:latest


  * Run post image
   
   docker run ginsp/post:latest

  * Command to run docker container in shell

    docker run -it ginsp/post sh


2. Kubectl commands

   * Command to delete all running pods

   kubectl delete --all pods --namespace=foo

   * Command to delete all deployments

   kubectl delete --all deployments --namespace=foo

   * commad to restart images

   kubectl rollout restart deployment event
   kubectl rollout restart deployment post


    * delete all pods
    kubectl delete --all pods --namespace=default

    * deete all deployments
    kubectl delete --all deployments --namespace=default
 
   * delete all services
    kubectl delete --all services --namespace=default

   
