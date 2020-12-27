import express from 'express';
import {middleware} from './middleware';
import {serverConfig} from "./config/serverConfig";
import {connectDB} from "./services/connectDB";

const app = express();

connectDB();

middleware(app);

app.listen(serverConfig.port, () => console.log(`server listening on the port ${serverConfig.port}!`));
