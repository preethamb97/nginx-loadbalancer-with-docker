# nginx-loadbalancer-with-docker

to run nginx docker

sudo docker build -t nginxapp .
sudo docker run -it -p 8080:8080 nginxapp

to run express docker

sudo docker build -t expressapp .
sudo docker run -it -p 5000:5000 expressapp


to spin up all the containers run below docker-compose command
sudo docker-compose up
