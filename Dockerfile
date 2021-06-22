#FROM nginx:stable-alpine
#
#ENV NGINX_ENTRYPOINT_QUIET_LOGS 1
#
#COPY --chown=root:root ./nginx.conf /etc/nginx/nginx.conf
#COPY --chown=nginx:nginx ./web/ /usr/share/nginx/dist/

FROM node:16-alpine


WORKDIR /app

COPY ./ ./

# install npm packages
RUN npm install --no-package-lock

EXPOSE 3000

CMD ["node", "server.js"]
