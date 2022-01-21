import express from "express";
import path from "path";
import userRoutes from "./user/routes";
import {
  logErrors,
  clientErrorHandler,
  errorHandler,
} from "./services/errorHandling";
import { serverConfig } from "./config/serverConfig";

/**
 * Application-Level Middleware
 * @param app
 * @param logger
 */
export const middleware = (app) => {
  app.use(express.json());
  app.use(
    "/public",
    express.static(path.join(__dirname, serverConfig.staticFolder))
  );
  app.use("/auth", userRoutes);
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, serverConfig.staticFolder, "index.html"));
  });
  app.use(logErrors(console));
  app.use(clientErrorHandler);
  app.use(errorHandler);
};
