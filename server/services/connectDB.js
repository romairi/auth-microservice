import mongoose from "mongoose";
import {serverConfig} from "../config/serverConfig";

export const connectDB = () => {
    mongoose.connect(serverConfig.mongo.hostURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => {
            console.log("MONGO ERROR");
            console.error(err.message);
            process.exit(1);
        })
};
