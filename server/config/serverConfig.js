const envVar = process.env;

const mongoConfig = {
  username: envVar.MONGO_USERNAME,
  password: envVar.MONGO_PASSWORD,
  host: envVar.MONGO_HOST,
};

mongoConfig.hostURI = mongoConfig.username
  ? `mongodb://${mongoConfig.username}:${mongoConfig.password}@${mongoConfig.host}`
  : "mongodb+srv://roman:12345@registration.jj7es.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export const serverConfig = {
  port: envVar.PORT || 8000,
  mongo: mongoConfig,
  jwt: {
    secret: envVar.SECRET || "adsdasdjshdkdjshfjksdhfjksdhfkjsdhkjfsa",
  },
};
