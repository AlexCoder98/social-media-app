import express from 'express';
import { body } from 'express-validator';

import { User } from '../models/user';
import {
    postSignUp,
    postSignIn,
    postResetPassword
} from '../controllers/auth';

import { passwordRegex } from '../utils/regex';

const router = express.Router();

router.post(
    '/sign-up',
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name field cannot be empty')
        .isLength({ min: 2 })
        .withMessage('Name is too short'),
    body('surname')
        .trim()
        .notEmpty()
        .withMessage('Surname field cannot be empty')
        .isLength({ min: 2 })
        .withMessage('Surname is too short'),
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
        .custom(async (value) => {
            if (!(value as string).match(passwordRegex)) {
                const message = 'Password has to be at least 7 characters long, must contain at least one upper and lower case letter, digit and special sign';
                throw new Error(message);
            }
        }),
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
        .notEmpty()
        .withMessage('Email field cannot be empty')
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
        .withMessage('Invalid email')
        .custom(async (value) => {
            const user = await User.exists({ email: value });
            if (!user) {
                const message = 'User with provided email does not exist';
                throw new Error(message);
            }
        }),
    body('newPassword')
        .trim()
        .custom(async (value) => {
            if (!(value as string).match(passwordRegex)) {
                const message = 'Password has to be at least 7 characters long, must contain at least one upper and lower case letter, digit and special sign';
                throw new Error(message);
            }
        }),
    body('newPasswordConfirmation')
        .custom(async (value, { req }) => {
            if (value !== req.body.newPassword) {
                throw new Error('Password confirmation failed');
            }
        }),
    postResetPassword);

export default router;