FROM node:7.1.0

ENV APP_HOME /usr/src/app
ENV APP_DIR /app

RUN mkdir -p $APP_HOME
RUN mkdir -p $APP_DIR
WORKDIR $APP_HOME

COPY package.json $APP_HOME
COPY deploy/ $APP_DIR

RUN npm install

COPY . /usr/src/app

RUN npm run build && \
    npm cache clean && \
    NODE_ENV=production npm prune && \
    wget https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64.deb && \
    dpkg -i dumb-init_*.deb

EXPOSE 3000

CMD ["dumb-init", "npm", "run", "start:server"]
