# Use the official Nginx image as the base
FROM nginx:alpine

# Copy your HTML and CSS files into the default nginx public folder
COPY . /usr/share/nginx/html

# Expose port 80 (optional, for documentation)
EXPOSE 80