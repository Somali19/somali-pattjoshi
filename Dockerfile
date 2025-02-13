# Dockerfile
FROM node:14

WORKDIR /app

COPY package*.json ./

# Use the --legacy-peer-deps flag with npm install
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
