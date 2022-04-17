FROM node:alpine
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm i mysql2
CMD ["node", "server_api.js"]