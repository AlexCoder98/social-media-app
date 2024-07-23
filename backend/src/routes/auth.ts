import express from 'express';

import { postSignUp } from '../controllers/auth';

const router = express.Router();

router.get('/sign-in');

router.post('/sign-in');

router.get('/sign-up');

router.post('/sign-up', postSignUp);

router.get('/reset-password');

router.post('/reset-password');

export default router;