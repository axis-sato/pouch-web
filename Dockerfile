FROM node:8.9.3

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm i
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "run", "dev" ]