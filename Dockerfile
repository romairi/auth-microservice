# BASE IMAGE
FROM node:14.15.1-alpine AS base
ENV PORT=8080
ENV USER=node

RUN chown ${USER}:${USER} -R .
USER ${USER}
COPY --chown=${USER} package*.json ./

# BUILD Stage image
FROM base AS build-stage
RUN npm i
COPY --chown=${USER} . .
RUN npm run build

# PROD image
FROM base

COPY --chown=${USER} --from=build-stage /usr/src/app/build /usr/src/app/build

#RUN npm i --production && npm cache clean --force
#COPY --chown=${USER} . .

EXPOSE ${PORT}
CMD ["node", "build"]
