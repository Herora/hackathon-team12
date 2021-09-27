FROM nginx:alpine
LABEL Autor="David Leandro Zuluaga Martinez"
ADD nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=linuxalpine /app/dist/out/ .
CMD ["nginx", "-g", "daemon off;"]