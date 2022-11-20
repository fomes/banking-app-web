FROM node:16-alpine3.16

WORKDIR /ng-web

COPY . .

RUN npm run build

CMD [ "npm", "dev" ]
