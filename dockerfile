FROM node:16-alpine3.16

WORKDIR /web

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
