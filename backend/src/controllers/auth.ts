import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { User } from '../models/user';

import CustomError from '../utils/error';

export const postSignUp = async (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, email, password } = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const message = errors.array()[0].msg;
            const error = new CustomError(message, 409);
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name: name,
            surname: surname,
            email: email,
            password: hashedPassword,
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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const message = errors.array()[0].msg;
            const error = new CustomError(message, 401);
            throw error;
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            const message = 'User with provided email does not exist';
            const error = new CustomError(message, 401);
            throw error;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            const message = 'Invalid password provided';
            const error = new CustomError(message, 401);
            throw error;
        }

        const accessToken = jwt.sign({
            email: user.email,
            userId: user._id.toString(),
        }, process.env.JWT_SECRET!);

        res
            .status(200)
            .json({
                accessToken: accessToken,
                userId: user._id.toString(),
                isAuth: 'true'
            });
    } catch (err) {
        next(err);
    }
}

export const postResetPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { email, newPassword } = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const message = errors.array()[0].msg;
            const error = new CustomError(message, 400);
            throw error;
        };

        const user = await User.findOne({ email: email });
        if (!user) {
            const message = 'User with provided email does not exist!';
            const error = new CustomError(message, 404);
            throw error;
        };

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;

        await user.save();

        res
            .status(200)
            .json({ "message": "Password has been changed successfully" });
    } catch (err) {
        next(err);
    }
}