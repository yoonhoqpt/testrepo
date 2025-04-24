# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Initialize a new package.json
RUN npm init -y

# Install only the necessary dependency (React)
RUN npm install react

# Copy your JS and CSS files
COPY . .

# Production stage
FROM nginx:alpine

# Copy all static files to nginx
COPY --from=build /app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
