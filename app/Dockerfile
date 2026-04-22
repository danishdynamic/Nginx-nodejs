# Use the official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# We will define the port at runtime
EXPOSE 3001
EXPOSE 3002

CMD ["node", "server.js"]