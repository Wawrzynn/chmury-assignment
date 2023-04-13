FROM node

WORKDIR /app

COPY package.json .

RUN npm install

RUN apt-get update && apt-get install dnsutils -y

COPY . .

COPY data.csv ./


EXPOSE 3001

CMD ["node", "index.js"]