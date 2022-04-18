# FROM node:14-alpine
# WORKDIR /app
# COPY package.json ./
# COPY yarn.lock ./
# RUN yarn
# RUN yarn build
# RUN yarn start

FROM node:alpine3.11
WORKDIR /app
COPY . .
RUN yarn
CMD ["yarn","start"]