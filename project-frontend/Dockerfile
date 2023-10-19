FROM node:18-alpine as build 
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build  

FROM node:18-alpine AS prod
WORKDIR /app
COPY --from=build ./app/dist ./dist
COPY package*.json server.js ./ 
RUN npm install --production 
USER node
EXPOSE 3000 
CMD ["node", "server.js"]