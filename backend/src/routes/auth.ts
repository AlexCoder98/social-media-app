import express from 'express';
import { body } from 'express-validator';

import { User } from '../models/user';
import {
    postSignUp,
    postSignIn,
    postResetPassword
} from '../controllers/auth';

const router = express.Router();

router.post(
    '/sign-up',
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name field cannot be empty')
        .isLength({ min: 2 })
        .withMessage('Invalid name'),
    body('surname')
        .trim()
        .notEmpty()
        .withMessage('Surname field cannot be empty')
        .isLength({ min: 2 })
        .withMessage('Invalid surname'),
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
    body('passwordConfirmation')
        .trim()
        .custom(async (value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password confirmation failed');
            }
        }),
    postSignUp
);

router.post(
    '/sign-in',
    body('email')
        .trim()
        .isEmail()
        .withMessage('Invalid email'),
    body('password')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Invalid password'),
    postSignIn);

router.post(
    '/reset-password',
    body('email')
        .trim()
        .isEmail()
        .withMessage('Invalid email'),
    body('newPassword')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Invalid password'),
    body('newPasswordConfirmation')
        .custom(async (value, { req }) => {
            if (value !== req.body.newPassword) {
                throw new Error('Password confirmation failed');
            }
        }),
    postResetPassword);

export default router;