FROM nginx:alpine

# Create required directories and set permissions
RUN mkdir -p /var/cache/nginx && \
    chown -R nginx:nginx /var/cache/nginx /var/run /usr/share/nginx/html

# Copy files after setting permissions
COPY . /usr/share/nginx/html/

# Switch to non-root user
USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]