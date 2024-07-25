import { Request, Response, NextFunction } from 'express';

import { User } from '../models/user';

export const postSignUp = async (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, email, password } = req.body;

    console.log(req.body);

    const user = new User({
        name: name,
        surname: surname,
        email: email,
        password: password,
        status: '',
        profileImage: '',
        aboutMe: '',
    });

    console.log('User');
    console.log(user);

    await user.save();
    res.status(200).send({ "Message": "Registration succedeed." });
}