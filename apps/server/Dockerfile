# Common build stage
FROM node:14.14.0-alpine3.12 as common-build-stage

RUN apk update \ 
    && apk add bash \
    && rm -rf /var/cache/apk/*

COPY . ./app

WORKDIR /app

RUN npm install

RUN npx prisma generate --schema=./src/prisma/schema.prisma

EXPOSE 5000

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start"]
FROM node:12.18.0-alpine3.11 AS base
WORKDIR /usr/src/app


# COPY . . 
# RUN yarn install --frozen-lockfile
# RUN yarn prisma:generate