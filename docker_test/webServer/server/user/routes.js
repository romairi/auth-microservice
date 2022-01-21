import express from "express";
import {
  AUTHENTICATION_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "./constants";
import { login, register, checkAuth } from "./controller";

const router = express.Router();

router.post(LOGIN_ROUTE, login);
router.post(REGISTRATION_ROUTE, register);
router.get(AUTHENTICATION_ROUTE, checkAuth);

export default router;
