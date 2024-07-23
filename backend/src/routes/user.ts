import express from 'express';

const router = express.Router();

router.get('/profile');

router.get('/edit');

router.post('/edit');

export default router;