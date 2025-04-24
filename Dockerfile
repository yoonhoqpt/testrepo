# Use the official Nginx image as the base
FROM nginx:alpine

# Create the directory structure if it doesn't exist
RUN mkdir -p /usr/share/nginx/html

# Copy files individually to ensure proper placement
COPY src/* /usr/share/nginx/html/

# Expose port 80 (optional, for documentation)
EXPOSE 80