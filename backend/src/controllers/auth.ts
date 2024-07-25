import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { User } from '../models/user';

export const postSignUp = async (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);

    console.log('Result');
    console.log(result.array());

    if (result.array().length > 0) {
        const errorMsg = result.array()[0].msg;
        res.status(404).send({ "Message": "Bad bad" });
        throw new Error(errorMsg);
    } else {
        console.log('XDDDDD');

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

        try {
            await user.save();
            return res
                .status(200)
                .send({ "Message": "Registration succedeed." })
        } catch (err) {
            const msg = 'Error. No valid data provided.';
            const error = new Error(msg);
            next(error);
        }
    }
}