import express from 'express';
import {middleware} from './middleware';
import {serverConfig} from "./config/serverConfig";
import {connectDB} from "./services/connectDB";
import Logger from "./services/logger";

const app = express();
const logger = new Logger();

connectDB();

middleware(app, logger);

app.listen(serverConfig.port, () => logger.log(`server listening on the port ${serverConfig.port}!`));
