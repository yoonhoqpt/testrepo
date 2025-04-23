FROM nginx:alpine

# Remove 'user nginx;' line from the config (which causes permission issues)
RUN sed -i '/user\s\+nginx;/d' /etc/nginx/nginx.conf

# Copy your static site
COPY . /usr/share/nginx/html

# Ensure Nginx can write where it needs
RUN mkdir -p /var/cache/nginx/client_temp

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]