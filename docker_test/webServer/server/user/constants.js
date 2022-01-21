import { serverConfig } from "../config/serverConfig";

// routes
export const LOGIN_ROUTE = "/login";
export const REGISTRATION_ROUTE = "/registration";
export const AUTHENTICATION_ROUTE = "/authentication";

// auth microservice apis
export const LOGIN_API = `${serverConfig.microserviceLoginHost}/login`;
export const REGISTRATION_API = `${serverConfig.microserviceLoginHost}/registration`;
export const AUTHENTICATION_API = `${serverConfig.microserviceLoginHost}/authentication`;