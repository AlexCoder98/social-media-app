import express from 'express';

import { isAuthenticated } from '../middleware/auth';

import { getUser, getEditProfile, postEditProfile } from '../controllers/user';

const router = express.Router();

router.get('/profile/:userId', isAuthenticated, getUser);

router.get('/profile/:userId/edit', isAuthenticated, getEditProfile);

router.put('/profile/:userId/edit', isAuthenticated, postEditProfile);

export default router;