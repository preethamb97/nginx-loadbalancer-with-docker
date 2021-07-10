# nginx-loadbalancer-with-docker

## to run nginx docker

sudo docker build -t nginxapp .
sudo docker run -it -p 8080:8080 nginxapp

## to run express docker

sudo docker build -t expressapp .
sudo docker run -it -p 5000:5000 expressapp


to spin up all the containers run below docker-compose command
sudo docker-compose up

## to recreate build of all containers

sudo docker-compose down && sudo docker-compose up --build --force-recreate


## bonus commands:
### to delete all docker images
sudo docker rmi -f $(sudo docker images -a -q)

### to delete all docker containers
sudo docker rm -f $(sudo docker ps -a -q)

## this basic nginx loadbalancer uses round robin for load balancing
