import { StatusCodes, ReasonPhrases } from "http-status-codes";

/**
 * This is generic function writes request and error information to stderr
 * @param logger
 * @returns {Function}
 */
export const logErrors = (logger) => (err, req, res, next) => {
  logger.error(err.stack);
  next(err);
};

/**
 * The error is explicitly passed along to the next one.
 * @param err
 * @param req
 * @param res
 * @param next
 */
export function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: ReasonPhrases.INTERNAL_SERVER_ERROR });
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
