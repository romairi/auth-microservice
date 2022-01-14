export const serverConfig = {
  port: process.env.PORT || 8080,
  mongo: {
    hostURI: process.env.MONGO_HOST_URI,
  },
  jwt: {
    secret: process.env.SECRET || "myDSdsaaaaaaaaaaaa3gfdgfdgfd",
  },
};
