import express from 'express';
import { body } from 'express-validator';

import { User } from '../models/user';
import { postSignUp } from '../controllers/auth';

const router = express.Router();

router.get('/sign-up');

router.post(
    '/sign-up',
    body('name')
        .trim()
        .notEmpty()
        .isLength({ min: 2 }),
    body('surname')
        .trim()
        .notEmpty()
        .isLength({ min: 2 }),
    body('email')
        .trim()
        .isEmail()
        .custom(async value => {
            const user = await User.findOne({ email: value });
            if (user) {
                throw new Error('E-mail already in use');
            }
        }),
    body('password')
        .trim()
        .isLength({ min: 8 }),
    body('passwordConfirmation')
        .trim()
        .custom(async (value, { req }) => {
            if (value != req.body.password) {
                throw new Error('Password confirmation failed.');
            }
        }),
    postSignUp
);

router.get('/sign-in');

router.post('/sign-in');

router.get('/reset-password');

router.post('/reset-password');

export default router;