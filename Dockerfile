FROM node:16.13.2 as build-stage

WORKDIR /app

COPY . /app

RUN npm install && npm run build

FROM nginx:1.21.5-alpine

COPY --from=build-stage /app/dist/ /usr/share/nginx/html