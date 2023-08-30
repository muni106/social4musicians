FROM node:18-alpine
WORKDIR /api 
COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 6060
CMD ["npm", "start"]