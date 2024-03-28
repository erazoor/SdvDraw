# SDVDraw Project

## Overview

SDVDraw est un projet Angular accompagné d'un serveur JSON pour fournir une interface de dessin simplifiée et la possibilité de sauvegarder ces dessins dans une base de données locale. Ce README fournit toutes les instructions nécessaires pour configurer, exécuter et utiliser l'application dans un environnement Docker.

## Prerequisites

Avant de commencer, assurez-vous que les logiciels suivants sont installés sur votre machine :

- Docker

## Project Structure

Le projet est organisé comme suit :
```arduino
project/
│
├── src/
│   └── app/
│       └── ...
├── server/
│   ├── server.js
│   └── public/
├── db.json
├── docker/
│   ├── Dockerfile
│   └── Dockerfile.server
└── docker-compose.yml
```

## Setup

### Building the Docker Images

Nous avons deux Dockerfiles dans le projet : un pour l'application Angular (Dockerfile) et un autre pour le serveur JSON (Dockerfile.server). Voici comment les construire et les exécuter :

1. Angular Application Dockerfile

```Dockerfile
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
```

2. JSON Server Dockerfile

```Dockerfile
FROM node:16-slim

WORKDIR /usr/src/app

RUN mkdir -p /database

COPY db.json /database/db.json

RUN npm install -g json-server

EXPOSE 3000

VOLUME /database

CMD ["json-server", "--watch", "/database/db.json"]
```

3. Docker Compose
Pour simplifier le processus de démarrage, utilisez Docker Compose :

```yaml
version: "3.8"

services:
  angular:
    build:
      context: ../
      dockerfile: docker/Dockerfile
    ports:
      - "4000:4000"
    volumes:
      - ../src:/app/src
      - ../dist:/app/dist
    depends_on:
      - json-server

  json-server:
    build:
      context: ../
      dockerfile: docker/Dockerfile.server
    ports:
      - "3000:3000"
    volumes:
      - ../db.json:/database/db.json

```

## Running the Application

Pour démarrer l'application et le serveur JSON, exécutez la commande suivante depuis le répertoire racine du projet :

```bash
docker-compose -f docker/docker-compose.yml up --build
```

Cela construira et démarrera les conteneurs Docker pour l'application Angular et le serveur JSON.

## Accessing the Application
Une fois les conteneurs en cours d'exécution, vous pouvez accéder à :

L'application Angular à http://localhost:4000
Le serveur JSON à http://localhost:3000
Vous pouvez maintenant utiliser l'application pour dessiner et sauvegarder vos créations, qui seront stockées localement dans db.json.