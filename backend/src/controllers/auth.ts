import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import { User } from '../models/user';

import CustomError from '../utils/error';

export const postSignUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const message = errors.array()[0].msg;
            const error = new CustomError(message, 409);
            throw error;
        }

        const { name, surname, email, password } = req.body;
        const user = new User({
            name: name,
            surname: surname,
            email: email,
            password: password,
            status: '',
            profileImage: '',
            aboutMe: '',
        });

        await user.save();
        res
            .status(201)
            .json({
                message: 'Registration succedeed',
                userId: user._id.toString()
            });
    } catch (err) {
        next(err);
    }
}

export const postSignIn = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
        console.log(email, password);
        const user = await User.findOne({ email: email });
        if (!user) {
            const message = 'User with provided email does not exist.';
            const error = new CustomError(message, 401);
            throw error;
        }
        if (password !== user.password) {
            const message = 'Invalid password provided.';
            const error = new CustomError(message, 401);
            throw error;
        }

        const accessToken = jwt.sign({
            email: user.email,
            userId: user._id.toString(),
        }, 'supersecretstring');
        res
            .status(200)
            .json({
                accessToken: accessToken,
                userId: user._id.toString()
            });
    } catch (err) {
        next(err);
    }
}