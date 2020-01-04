FROM node:8.11.2-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN apk update && \
    npm install -g npm && \
    npm install -g @vue/cli@3.8.4 \
    npm install

CMD ["/bin/sh"]
