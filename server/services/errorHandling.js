import {StatusCodes, ReasonPhrases} from 'http-status-codes';
import {ValidationError} from "express-validation";


/**
 * An object details keyed by parameter, each containing an array of errors in joi format
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns by default will return errors in the following format,
 */
export function validationError(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }
    return next(err);
}

/**
 * This is generic function writes request and error information to stderr
 * @param err
 * @param req
 * @param res
 * @param next
 */
export function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

/**
 * The error is explicitly passed along to the next one.
 * @param err
 * @param req
 * @param res
 * @param next
 */
export function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: ReasonPhrases.INTERNAL_SERVER_ERROR});
    } else {
        next(err);
    }
}

/**
 * This function catches all errorHandlers
 * @param err
 * @param req
 * @param res
 * @param next
 */
export function errorHandler(err, req, res, next) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(ReasonPhrases.INTERNAL_SERVER_ERROR);
}
