FROM ubuntu:jammy as dev

RUN apt-get update && apt-get install -y xz-utils && apt-get install -y iputils-ping
RUN mkdir -p /appang 
RUN mkdir -p /opt/nodejs

COPY docker/node-v20.12.0-linux-x64.tar.xz /opt/nodejs/
RUN tar -xvf /opt/nodejs/node-v20.12.0-linux-x64.tar.xz -C /opt/nodejs/ --strip-components=1

ENV PATH="$PATH:/opt/nodejs/bin"

WORKDIR /appang
COPY server/package.json .
COPY server/server.js .
COPY server/public public/

RUN npm install

EXPOSE 4000
CMD ["node", "server.js"]
