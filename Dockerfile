FROM node:carbon

# Open port, that have been listened by an app server
EXPOSE 80
# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY . .
# Install app dependencies
RUN npm install

# Start a server (node+express)
CMD [ "npm", "start" ]
