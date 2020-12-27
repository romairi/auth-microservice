# BASE IMAGE
FROM node:14.15.1-alpine AS base
#ARG WORKDIR_PATH=/usr/src/app
#WORKDIR ${WORKDIR_PATH}
WORKDIR /usr/src/app
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

COPY --chown=${USER} --from=build-stage /usr/src/app/build /usr/src/app/build

#RUN npm i --production && npm cache clean --force
#COPY --chown=${USER} . .

EXPOSE ${PORT}
CMD ["node", "build"]
