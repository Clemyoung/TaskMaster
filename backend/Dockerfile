FROM node:21.6.1
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4003
CMD ["nodemon", "index.js"]