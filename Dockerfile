# Use the official Nginx image
FROM nginx:alpine

# Copy your static files into the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
