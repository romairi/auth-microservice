const express = require('express');
const userRoutes = require('./user/routes');

const router = express.Router();

// API routes
router.use('/api/auth', userRoutes);


module.exports = router;
