FROM node:10.19.0-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE ${PORT}


CMD ["node", "index.js"]
