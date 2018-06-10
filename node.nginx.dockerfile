# stage 1
FROM node:latest as node
LABEL author="Houssem Dellai"
WORKDIR /app
COPY . .
RUN npm install
ARG env=prod
RUN npm run build -- --prod --environment $env

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist /usr/share/nginx/html