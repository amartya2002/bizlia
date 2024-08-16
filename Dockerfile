FROM node:alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN npm run build

EXPOSE 3000

# Start the app
CMD ["npm", "start"]