FROM node:20-alpine

WORKDIR /app

# Copy package.json at package-lock.json
COPY package*.json ./

# Install npm packages
RUN npm install

# Copy the frontend code
COPY . .

EXPOSE 5173

# Start Vite server
CMD ["npm", "run", "dev", "--", "--host"]