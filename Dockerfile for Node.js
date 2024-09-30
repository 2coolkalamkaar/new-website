# Node.js Dockerfile
FROM node:18 AS builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .

# Expose port for the Node.js app
EXPOSE 3001

CMD ["node", "index.js"]
