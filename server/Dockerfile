FROM node:8

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]