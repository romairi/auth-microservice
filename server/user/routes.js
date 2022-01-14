import express from "express";
import { validate } from "express-validation";

import {
  AUTHENTICATION_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "./constants";
import { login, register, checkAuth } from "./controller";
import { loginValidation, registerValidation } from "./validation";

const router = express.Router();

router.post(LOGIN_ROUTE, validate(loginValidation), login);
router.post(REGISTRATION_ROUTE, validate(registerValidation), register);
router.get(AUTHENTICATION_ROUTE, checkAuth);

export default router;
