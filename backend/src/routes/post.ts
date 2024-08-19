import express from 'express';

import { isAuthenticated } from '../middleware/auth';

const router = express.Router();

router.get('/main-page', isAuthenticated);

router.get('/posts', isAuthenticated);

router.post('/posts');

router.get('/posts/create-new', isAuthenticated);

router.post('/posts/create-new', isAuthenticated);

router.get('/posts/:postId');

router.get('/posts/:postId/edit', isAuthenticated);

router.post('/posts/:postId', isAuthenticated);

export default router;