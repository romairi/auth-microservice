# BASE IMAGE
FROM node:14.15.1-alpine AS base
ARG WORKDIR_PATH=/usr/src/app
WORKDIR ${WORKDIR_PATH}
ENV PORT=8080
ENV USER=node

RUN chown ${USER}:${USER} -R .
USER ${USER}
COPY --chown=${USER} package*.json ./

# BUILD STAGE IMAGE
FROM base AS build-stage
RUN npm i
COPY --chown=${USER} . .
RUN npm run build

# PROD IMAGE
FROM base

COPY --chown=${USER} --from=build-stage ${WORKDIR_PATH}/build ./build

#RUN npm i --production && npm cache clean --force
#COPY --chown=${USER} . .

EXPOSE ${PORT}
CMD ["node", "index.js"]
