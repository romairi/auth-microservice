import express from 'express';
import cookieParser from 'cookie-parser';
import routes from '../server/routes';
import {auth} from './user/auth';
import {validationError, logErrors, clientErrorHandler, errorHandler} from './services/errorHandling';


export const middleware = app => {
    app.use(cookieParser());
    app.use(express.json());

    app.use('/', auth, routes);
    app.use(validationError);
    app.use(logErrors);
    app.use(clientErrorHandler);
    app.use(errorHandler);
};
