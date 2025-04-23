# Use the official Nginx image as the base
FROM nginx:alpine

# Copy files from the specified source directory into the default nginx public folder
COPY src/ /usr/share/nginx/html/

# Expose port 80 (optional, for documentation)
EXPOSE 80