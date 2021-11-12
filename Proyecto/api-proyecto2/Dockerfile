FROM node:12-alpine

ARG API_PORT

ENV API_PORT $API_PORT

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${API_PORT}

CMD ["npm", "run", "start"]
