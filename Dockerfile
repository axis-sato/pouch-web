FROM node:8.9.3

WORKDIR /usr/src/app
COPY . .

RUN  npm i yarn -g \
  && yarn install
# If you are building your code for production
# RUN yann install --prod

EXPOSE 3000

CMD [ "yarn", "run", "dev" ]