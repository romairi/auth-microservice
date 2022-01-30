const envVar = process.env;
import path from 'path';

export const serverConfig = {
  port: envVar.PORT || 3030,
  staticFolder: path.join("../", "client", "build"),
  microserviceAuthHost: envVar.MICROSERVICE_AUTH_HOST  || 'http://localhost:8000',
};
