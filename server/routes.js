import express from 'express';
import userRoutes from './user/routes';

const router = express.Router();

// AUTH routes
router.use('/auth', userRoutes);

export default router;
