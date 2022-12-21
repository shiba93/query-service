FROM node:16

# Create app directory
WORKDIR /query-service-app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY query-service/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY query-service/. .

EXPOSE 3000
CMD [ "node", "index.js" ]