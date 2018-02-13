FROM node:latest

MAINTAINER Yuze Ma <yuze.bob.ma@gmail.com>

RUN npm install --global nodemon

RUN npm install --global express

ENV SRC_PATH /usr/src/vercipe_backend

RUN mkdir -p $SRC_PATH

WORKDIR $SRC_PATH
COPY . $SRC_PATH

RUN npm install

CMD ["nodemon"]
