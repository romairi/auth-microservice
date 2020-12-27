import express from 'express';
import userRoutes from './user/routes';
import {validationError, logErrors, clientErrorHandler, errorHandler} from './services/errorHandling';
import Logger from "./services/logger";

/**
 * Application-Level Middleware
 * @param app
 */
export const middleware = app => {
    const logger = new Logger();
    app.use(express.json());

    app.use('/', userRoutes);
    app.use(validationError);
    app.use(logErrors(logger));
    app.use(clientErrorHandler);
    app.use(errorHandler);
};
