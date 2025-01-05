import express from 'express';
import { body } from 'express-validator';

import { User } from '../models/user';
import {
    postSignUp,
    postSignIn,
    postResetPassword
} from '../controllers/auth';

import { passwordRegex } from '../utils/regex';
import { messages } from '../helpers/messages';

const router = express.Router();

router.post(
    '/sign-up',
    body('name')
        .trim()
        .notEmpty()
        .withMessage(messages.emptyName)
        .isLength({ min: 2 })
        .withMessage(messages.shortName),
    body('surname')
        .trim()
        .notEmpty()
        .withMessage(messages.emptySurname)
        .isLength({ min: 2 })
        .withMessage(messages.shortSurname),
    body('email')
        .trim()
        .isEmail()
        .withMessage(messages.invalidEmail)
        .custom(async value => {
            const user = await User.findOne({ email: value });
            if (user) {
                throw new Error(messages.emailInUse);
            }
        }),
    body('password')
        .trim()
        .custom(async (value) => {
            if (!(value as string).match(passwordRegex)) {
                throw new Error(messages.notPassedPasswordRegex);
            }
        }),
    body('passwordConfirmation')
        .trim()
        .custom(async (value, { req }) => {
            if (value !== req.body.password) {
                throw new Error(messages.failedPasswordConfirmation);
            }
        }),
    postSignUp
);

router.post(
    '/sign-in',
    body('email')
        .trim()
        .notEmpty()
        .withMessage(messages.emptyEmail)
        .isEmail()
        .withMessage(messages.invalidEmail),
    body('password')
        .trim()
        .isLength({ min: 3 })
        .withMessage(messages.invalidPassword),
    postSignIn);

router.post(
    '/reset-password',
    body('email')
        .trim()
        .isEmail()
        .withMessage(messages.invalidEmail)
        .custom(async (value) => {
            const user = await User.exists({ email: value });
            if (!user) {
                throw new Error(messages.emailNotInDb);
            }
        }),
    body('newPassword')
        .trim()
        .custom(async (value) => {
            if (!(value as string).match(passwordRegex)) {
                throw new Error(messages.notPassedPasswordRegex);
            }
        }),
    body('newPasswordConfirmation')
        .custom(async (value, { req }) => {
            if (value !== req.body.newPassword) {
                throw new Error(messages.failedPasswordConfirmation);
            }
        }),
    postResetPassword);

export default router;