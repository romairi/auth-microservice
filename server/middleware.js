const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('../server/routes');
const {auth} = require('./user/auth');
const {validationError, logErrors, clientErrorHandler, errorHandler} = require('./services/errorHandling');

const middleware = app => {
    app.use(cookieParser());
    app.use(express.json());

    app.use('/', auth, routes);
    app.use(validationError);
    app.use(logErrors);
    app.use(clientErrorHandler);
    app.use(errorHandler);
};


module.exports = middleware;
