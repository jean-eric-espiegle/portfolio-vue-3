FROM node:lts-alpine as develop-stage
WORKDIR /var/www/html/app
COPY package*.json ./
RUN npm i
EXPOSE 3000
CMD npm run dev