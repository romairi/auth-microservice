const {StatusCodes, ReasonPhrases} = require('http-status-codes');
const {ValidationError} = require("express-validation");

function validationError(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }

    return next(err);
}

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: ReasonPhrases.INTERNAL_SERVER_ERROR});
    } else {
        next(err);
    }
}

function errorHandler(err, req, res, next) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ReasonPhrases.INTERNAL_SERVER_ERROR);
}

module.exports = {validationError, logErrors, clientErrorHandler, errorHandler};
