import express from 'express';

import { body } from 'express-validator';

import { isAuthenticated } from '../middleware/auth';

import {
    getUser,
    getSettings,
    getProfileSettings,
    postProfileSettings,
    getAuthenticationSettings,
    postAuthenticationSettings,
    postLocationSettings
} from '../controllers/user';

import { messages } from '../helpers/messages';

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
        .withMessage(messages.shortName),
    body('surname')
        .trim()
        .notEmpty()
        .isLength({ min: 2 })
        .withMessage(messages.shortSurname),
    body('status')
        .isLength({ max: 30 })
        .withMessage(messages.longStatus),
    body('bio')
        .isLength({ max: 900 })
        .withMessage(messages.longBio),
    postProfileSettings);

router.get('/settings/authentication', isAuthenticated, getAuthenticationSettings);

router.put(
    '/settings/authentication',
    isAuthenticated,
    body('email')
        .trim()
        .notEmpty()
        .withMessage(messages.emptyEmail)
        .isEmail()
        .withMessage(messages.invalidEmail),
    postAuthenticationSettings);

router.get('/settings/location', isAuthenticated);

router.put('/settings/location', isAuthenticated, postLocationSettings);

export default router;