const express = require('express');
const {validate} = require('express-validation');
const {login, register, logout} = require('./controller');
const paramValidation = require('./validation');

const router = express.Router();

router.get('/login', validate(paramValidation.login), login);
router.get('/register', validate(paramValidation.register), register);
router.get('/logout', logout);

module.exports = router;
