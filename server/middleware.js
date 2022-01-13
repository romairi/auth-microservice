import express from "express";

import userRoutes from "./user/routes";
import {
  validationError,
  logErrors,
  clientErrorHandler,
  errorHandler,
} from "./services/errorHandling";

/**
 * Application-Level Middleware
 * @param app
 * @param logger
 */
export const middleware = (app, logger) => {
  app.use(express.json());
  app.use("/", userRoutes);
  app.use(validationError);
  app.use(logErrors(logger));
  app.use(clientErrorHandler);
  app.use(errorHandler);
};
