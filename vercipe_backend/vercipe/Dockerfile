FROM node

MAINTAINER Yuze Ma <yuze.bob.ma@gmail.com>

RUN npm install --global nodemon



ENV SRC_PATH /usr/src/vercipe_backend

RUN mkdir -p $SRC_PATH

WORKDIR $SRC_PATH
COPY . $SRC_PATH

RUN npm install

# ENTRYPOINT ["npm", "install", "-g", "nodemon"]
# ENTRYPOINT ["npm","install"]

# npm install -g nodemon

# ENTRYPOINT ["npm","start"]

ENTRYPOINT ["nodemon"]
# CMD ["nodemon"]