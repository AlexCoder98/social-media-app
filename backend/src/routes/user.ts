import express from 'express';

import { body } from 'express-validator';

import { isAuthenticated } from '../middleware/auth';

import {
    getUser,
    getSettings,
    getProfileSettings,
    postProfileSettings,
    getAuthenticationSettings,
    postAuthenticationSettings
} from '../controllers/user';

const router = express.Router();

router.get('/profile', isAuthenticated, getUser);

router.get('/settings', isAuthenticated, getSettings);

router.get('/settings/profile', isAuthenticated, getProfileSettings);

router.put(
    '/settings/profile',
    isAuthenticated,
    body('name')
        .trim()
        .notEmpty()
        .isLength({ min: 2 })
        .withMessage('Name is too short'),
    body('surname')
        .trim()
        .notEmpty()
        .isLength({ min: 2 })
        .withMessage('Surname is too short'),
    postProfileSettings);

router.get('/settings/authentication', isAuthenticated, getAuthenticationSettings);

router.put(
    '/settings/authentication',
    isAuthenticated,
    body('email')
        .trim()
        .notEmpty()
        .isEmail()
        .withMessage('Invalid email.'),
    postAuthenticationSettings);

export default router;