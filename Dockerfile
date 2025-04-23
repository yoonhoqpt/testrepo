FROM nginx:alpine

# Remove the default nginx user directive that requires non-root
RUN sed -i '/user  nginx;/d' /etc/nginx/nginx.conf

# Copy your HTML and CSS into the correct location
COPY . /usr/share/nginx/html

EXPOSE 80