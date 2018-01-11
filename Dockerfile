FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Open port, that have been listened by an app server
EXPOSE 80

# Build application through webpack
RUN [ "npm", "build" ]

# Start a server (node+express)
CMD [ "npm", "start" ]
