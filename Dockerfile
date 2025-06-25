# Use Node.js Alpine image
FROM node:18-alpine

# Install MySQL client for RDS connection
RUN apk add --no-cache mysql-client

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the project files
COPY . .

# Expose port
EXPOSE 5000

# Start the server
#CMD ["npm", "start"]
CMD ["sh", "-c", "npm start"]
