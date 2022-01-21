# BASE IMAGE
FROM node:16-buster-slim AS base
WORKDIR /usr/src/app
ENV PORT=8080
ENV USER=node

RUN chown ${USER}:${USER} -R .
USER ${USER}
COPY --chown=${USER} package*.json ./

# BUILD Stage image
FROM base AS build-stage
RUN npm i
COPY --chown=${USER} . .

## build server code
RUN npm run build

## build client code
RUN npm run build_client

# PROD image
FROM base
RUN mkdir -p /usr/src/app/client/build

COPY --chown=${USER} --from=build-stage /usr/src/app/build /usr/src/app/build
RUN npm i --production && npm cache clean --force

COPY --chown=${USER} --from=build-stage /usr/src/app/client/build /usr/src/app/client/build

EXPOSE ${PORT}
CMD ["node", "build"]
