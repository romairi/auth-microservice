import express from 'express';
import {validate} from 'express-validation';
import {login, register, checkAuth} from './controller';
import {loginValidation, registerValidation} from './validation';

const router = express.Router();

router.post('/login', validate(loginValidation), login);
router.post('/register', validate(registerValidation), register);
router.get('/check_auth', checkAuth);

export default router;
