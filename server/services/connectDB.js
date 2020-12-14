import mongoose from "mongoose";
import {serverConfig} from "../config/serverConfig";
import Logger from "./logger";

/**
 * Connection to MongoDB with specifying several more parameters in the URI
 */
export const connectDB = (logger = new Logger(), {process: _process} = globalThis) => {
    return mongoose.connect(serverConfig.mongo.hostURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
        .then(() => logger.log('MongoDB Connected...'))
        .catch(err => {
            logger.log("MONGO ERROR");
            logger.error(err.message);
            _process.exit(1);
        })
};
