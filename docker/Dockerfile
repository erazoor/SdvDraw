FROM ubuntu:jammy as dev

RUN apt-get update
RUN mkdir -p /appang 
RUN mkdir -p /opt/nodejs
COPY node-v20.12.0-linux-x64.tar.xz /opt/nodejs

WORKDIR /opt/nodejs
RUN unxz node-v20.12.0-linux-x64.tar.xz
RUN tar -xf node-v20.12.0-linux-x64.tar
RUN rm node-v20.12.0-linux-x64.tar
WORKDIR /appang

COPY dist/ .

