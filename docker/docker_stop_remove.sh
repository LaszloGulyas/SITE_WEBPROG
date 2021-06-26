#!/bin/bash

CONTAINER_NAME=$1
IMAGE_NAME=$2

if [ $(docker ps -a | grep -o apache-server-webprog | wc -l) -gt 0 ];
	then docker stop $CONTAINER_NAME;docker rm $CONTAINER_NAME;echo "container stopped and/or removed";
	else echo "no container found";
fi

if [ $(docker images | grep -o my-apache2-webprog | wc -l) -gt 0 ];
	then docker image remove $IMAGE_NAME:latest;echo "docker image removed"; 
	else echo "no docker image found";
fi
