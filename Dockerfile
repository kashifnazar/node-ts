FROM node:10

WORKDIR /usr/app-server

COPY package.json ./
COPY tsconfig.json ./

COPY src ./src

RUN npm i
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
