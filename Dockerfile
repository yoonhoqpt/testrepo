# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files from the root of the project
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project (including MLB All Day directory)
COPY . ./

# Build the React app
RUN npm run build

# Serve stage
FROM nginx:alpine

# Copy the built files from build stage to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Optional: Copy custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80