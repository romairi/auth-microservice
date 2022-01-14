# BASE IMAGE
FROM node:16-buster-slim AS base
# WORKDIR /usr/src/app
ENV PORT=8080
ENV USER=node
ENV MONGO_HOST_URI="mongodb+srv://roman:12345@registration.jj7es.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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
