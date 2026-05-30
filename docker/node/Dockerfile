FROM node:22.14.0-alpine3.21

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN apk add --no-cache shadow

RUN usermod -u $USER_ID node && groupmod -g $GROUP_ID node

WORKDIR /app

USER node
