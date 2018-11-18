FROM node:8.6.0-alpine

##Make Sure You run 'npm transpile' before building the docker image.

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && \
    apk upgrade && \
    apk add git

# Install app dependencies
COPY dist /usr/src/app
COPY .sailsrc /usr/src/app/.sailsrc
RUN npm install --production

EXPOSE 80

CMD PORT=80 NODE_ENV=$NODE_ENV node /usr/src/app/app.js
