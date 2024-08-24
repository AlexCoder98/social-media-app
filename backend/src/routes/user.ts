import express from 'express';

import { isAuthenticated } from '../middleware/auth';

import { getUser } from '../controllers/user';

const router = express.Router();

router.get('/profile/:userId', isAuthenticated, getUser);

router.get('/edit', isAuthenticated);

router.post('/edit', isAuthenticated);

export default router;