import express from 'express';

import { body } from 'express-validator';

import { isAuthenticated } from '../middleware/auth';

import { postCreatePost, getPosts } from '../controllers/post';

const router = express.Router();

router.get('/main-page', isAuthenticated);

router.get('/posts', isAuthenticated, getPosts);

router.post('/posts', isAuthenticated);

router.get('/posts/create-new', isAuthenticated);

router.post('/posts/create-new', isAuthenticated, postCreatePost);

router.get('/posts/:postId', isAuthenticated);

router.get('/posts/:postId/edit', isAuthenticated);

router.post('/posts/:postId', isAuthenticated);

export default router;