import express from 'express';

import { isAuthenticated } from '../middleware/auth';

const router = express.Router();

router.get('/profile', isAuthenticated);

router.get('/edit', isAuthenticated);

router.post('/edit', isAuthenticated);

export default router;