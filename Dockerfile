FROM node:18.17.0 as nd

RUN apt-get update \
 && apt-get install -y curl dnsutils

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g serve

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "sh", "-c", "npm run start" ]
