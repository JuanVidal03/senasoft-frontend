FROM node:latest as build

WORKDIR /usr/src/app

COPY package*.json ./
COPY package-lock*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 3000

CMD [ "nginx", "-g", "deamon off;" ]