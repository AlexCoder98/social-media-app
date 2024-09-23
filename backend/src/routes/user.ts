import express from 'express';

import { body } from 'express-validator';

import { User } from '../models/user';
import { isAuthenticated } from '../middleware/auth';

import {
    getUser,
    getEditProfile,
    postEditProfile,
    getSettings,
    getGeneralSettings,
    postGeneralSettings
} from '../controllers/user';

const router = express.Router();

router.get('/profile', isAuthenticated, getUser);

router.get('/settings', isAuthenticated, getSettings);

router.get('/settings/general', isAuthenticated, getGeneralSettings);

router.put(
    '/settings/general',
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
    postGeneralSettings);

router.get('/profile/:userId/edit', isAuthenticated, getEditProfile);

router.put(
    '/profile/:userId/edit',
    isAuthenticated,
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name field cannot be empty')
        .isLength({ min: 2 })
        .withMessage('Invalid name'),
    body('surname')
        .trim()
        .notEmpty()
        .withMessage('Name field cannot be empty')
        .isLength({ min: 2 })
        .withMessage('Invalid name'),
    body('email')
        .trim()
        .isEmail()
        .withMessage('Invalid email')
        .custom(async value => {
            const user = await User.findOne({ email: value });
            if (user) {
                throw new Error('E-mail already in use');
            }
        }),
    body('password')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Invalid password'),
    body('confirmPassword')
        .trim()
        .custom(async (value, { req }) => {
            if (value != req.body.password) {
                throw new Error('Password confirmation failed');
            }
        }),
    postEditProfile);

export default router;