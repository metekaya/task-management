FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV VUE_APP_API_BASE_URL "http://localhost:5000"

CMD ["npm", "run", "serve"]
