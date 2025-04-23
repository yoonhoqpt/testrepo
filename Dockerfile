FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy HTML and CSS files
COPY *.html .
COPY *.css .

# Use nginx with non-root user for better security
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Switch to non-root user
USER nginx

# Nginx runs on port 80 by default
EXPOSE 80

# Use default nginx command
CMD ["nginx", "-g", "daemon off;"]