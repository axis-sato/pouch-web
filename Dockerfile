FROM node:8.9.3

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN  npm i yarn -g \
  && yarn install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "run", "dev" ]