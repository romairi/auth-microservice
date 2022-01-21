const envVar = process.env;
import path from 'path';

export const serverConfig = {
  port: envVar.PORT || 3030,
  staticFolder: path.join("../", "client", "build"),
  microserviceLoginHost: envVar.MICROSERVICE_LOGIN_HOST  || 'http://localhost:8000',
};
