# MicroServices

1. Sample Application.
  
  * Create react app
   
   `npx create-react-app client`

   http://localhost:4001/posts/554e526c/comments

   http://localhost:4001/posts/123/comments

2. Docker
  
  * Create image post image

   docker build -t gins/posts:0.0.1 .

   docker build -t gins/comment:latest .

  * Run post image
   
   docker run gins/post:latest

  * Command to run docker container in shell

    docker run -it gins/post sh


2. Kubectl commands

   * Command to delete all running pods

   kubectl delete --all pods --namespace=foo

   * Command to delete all deployments

   kubectl delete --all deployments --namespace=foo

   
