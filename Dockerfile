# Use a lightweight web server
FROM nginx:alpine

# Copy all project files into NGINX's default HTML folder
COPY . /usr/share/nginx/html

