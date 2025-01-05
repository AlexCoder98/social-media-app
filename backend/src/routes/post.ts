import express from 'express';

import { body } from 'express-validator';

import { isAuthenticated } from '../middleware/auth';

import { postCreatePost, getUserPosts, getAllPosts, getPost, deletePost, getEditPost, postEditPost } from '../controllers/post';

import { messages } from '../helpers/messages';

const router = express.Router();

router.get('/home', isAuthenticated, getAllPosts);

router.get('/my-posts', isAuthenticated, getUserPosts);

router.delete('/my-posts', isAuthenticated, deletePost);

router.post(
    '/my-posts/create-new',
    isAuthenticated,
    body('title')
        .trim()
        .notEmpty()
        .withMessage(messages.emptyPostTitle)
        .isLength({ min: 3, max: 50 })
        .withMessage(messages.postTitleLength),
    body('description')
        .trim()
        .notEmpty()
        .withMessage(messages.emptyPostDesc)
        .isLength({ min: 5 })
        .withMessage(messages.postDescLength),
    postCreatePost
);

router.get('/my-posts/:postId', isAuthenticated, getPost);

router.delete('/my-posts/:postId', isAuthenticated, deletePost);

router.get('/my-posts/:postId/edit', isAuthenticated, getEditPost);

router.put(
    '/my-posts/:postId/edit',
    isAuthenticated,
    body('title')
        .trim()
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage(messages.postTitleLength),
    body('description')
        .trim()
        .notEmpty()
        .isLength({ min: 5 })
        .withMessage(messages.postDescLength),
    postEditPost
);


export default router;