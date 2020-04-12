FROM node:13.12.0
WORKDIR /usr/src/app
ADD . .
RUN yarn
RUN yarn run test

RUN yarn run build

CMD node dist/index.js



