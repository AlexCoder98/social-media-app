import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { User } from '../models/user';

import CustomError from '../utils/error';

export const postSignUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const placeOfError = Object.keys(errors.mapped())[0];
            const message = `${errors.array()[0].msg} in ${placeOfError} field.`;
            const error = new CustomError(message, 404);
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
            .status(200)
            .send({ "Message": "Registration succedeed." })
    } catch (err) {
        next(err);
    }




}
