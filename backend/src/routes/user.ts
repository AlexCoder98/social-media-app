import express from 'express';

const router = express.Router();

router.get('sign-in');

router.post('/sign-in');

router.get('/sign-up');

router.post('/sign-up');

router.get('/reset-password');

router.post('/reset-password');

export default router;