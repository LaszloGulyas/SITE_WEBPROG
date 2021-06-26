#!/bin/bash

CONTAINER_NAME=$1
IMAGE_NAME=$2

docker build -t $IMAGE_NAME .
docker run -dit --name $CONTAINER_NAME -p 80:80 $IMAGE_NAME
