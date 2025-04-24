# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Initialize a new package.json if it doesn't exist
RUN npm init -y

# Install required dependencies
RUN npm install react react-dom react-scripts

# Copy all source files
COPY . .

# Create a src directory and copy source files into it
RUN mkdir -p src && \
    find . -maxdepth 1 -type f -name "*.js" -exec mv {} src/ \; || true

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
