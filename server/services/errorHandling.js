import {StatusCodes, ReasonPhrases} from 'http-status-codes';
import {ValidationError} from "express-validation";

export function validationError(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }

    return next(err);
}

export function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

export function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: ReasonPhrases.INTERNAL_SERVER_ERROR});
    } else {
        next(err);
    }
}

export function errorHandler(err, req, res, next) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ReasonPhrases.INTERNAL_SERVER_ERROR);
}
