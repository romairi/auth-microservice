import express from "express";
import { serverConfig } from "./config/serverConfig";
import { middleware } from "./middleware";

const app = express();

middleware(app);

app.listen(serverConfig.port, () =>
  console.log(`server listening on the port ${serverConfig.port}!`)
);
