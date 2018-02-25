FROM node:8

WORKDIR /usr/src/app
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .

CMD [ "yarn", "start" ]
