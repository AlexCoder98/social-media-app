import express from 'express';

import { body } from 'express-validator';

import { isAuthenticated } from '../middleware/auth';

import { postCreatePost, getUserPosts, getAllPosts, getPost, deletePost, getEditPost, postEditPost } from '../controllers/post';

const router = express.Router();

router.get('/main-page', isAuthenticated, getAllPosts);

router.get('/posts', isAuthenticated, getUserPosts);

router.delete('/posts', isAuthenticated, deletePost);

router.post(
    '/posts/create-new',
    isAuthenticated,
    body('title')
        .trim()
        .notEmpty()
        .withMessage('Post title cannot be empty')
        .isLength({ min: 3, max: 50 })
        .withMessage('Post title has to be at least 3 and max 50 characters long'),
    body('description')
        .trim()
        .notEmpty()
        .withMessage('Post description cannot be empty')
        .isLength({ min: 5 })
        .withMessage('Post description has to have at least 5 characters.'),
    postCreatePost
);

router.get('/posts/:postId', isAuthenticated, getPost);

router.delete('/posts/:postId', isAuthenticated, deletePost);

router.get('/posts/:postId/edit', isAuthenticated, getEditPost);

router.put(
    '/posts/:postId/edit',
    isAuthenticated,
    body('title')
        .trim()
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('Post title has to have at least 3 characters.'),
    body('description')
        .trim()
        .notEmpty()
        .isLength({ min: 5 })
        .withMessage('Post description has to have at least 5 characters.'),
    postEditPost
);


export default router;