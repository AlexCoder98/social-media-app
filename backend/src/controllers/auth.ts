import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

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
        return res
            .status(201)
            .send({ "message": "Registration succedeed" })
    } catch (err) {
        next(err);
    }
}

export const postSignIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        // const user = await User.findOne({email: email});
        // if(user) {

        // }

    } catch (err) {
        next(err);
    }
}