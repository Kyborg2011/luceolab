FROM node:carbon

# Open port, that have been listened by an app server
EXPOSE 80
# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY . .
# Install app dependencies && Build app through webpack
RUN npm install && \
    npm run build

# Start a server (node+express)
CMD [ "npm", "start" ]
