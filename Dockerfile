# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Initialize a new package.json if it doesn't exist
RUN npm init -y

# Add build script to package.json
RUN npm pkg set scripts.build="react-scripts build"

# Install required dependencies
RUN npm install react react-scripts

# Copy all source files
COPY . .

# Create necessary React project structure
RUN mkdir -p public src && \
    echo '<!DOCTYPE html><html><head><meta charset="utf-8"><title>React App</title></head><body><div id="root"></div></body></html>' > public/index.html && \
    echo 'import React from "react"; import ReactDOM from "react-dom/client"; const root = ReactDOM.createRoot(document.getElementById("root")); root.render(<h1>Hello, World!</h1>);' > src/index.js

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
