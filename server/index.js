import express from 'express';

import serverConfig from "./config/serverConfig";
import connectDB from './config/dbConfig';
import middleware from './middleware';

const app = express();

connectDB();

middleware(app);

app.listen(serverConfig.port, () => console.log(`server listening on the port ${serverConfig.port}!`));
