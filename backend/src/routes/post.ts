import express from 'express';

const router = express.Router();

router.get('/posts');

router.post('/posts');

router.get('/posts/create-new');

router.post('/posts/create-new');

router.get('/posts/:postId');

router.get('/posts/:postId/edit');

router.post('/posts/:postId');

export default router;