import { Request, Response, NextFunction } from 'express';

import { User } from '../models/user';
import CustomError from '../utils/error';

import { ReqBodyUserType } from '../types/user';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    try {
        const user = await User.findById(userId);
        if (!user) {
            const message = 'Error. Failed to fetch user';
            const error = new CustomError(message, 401);
            throw error;
        }

        const userObj = {
            name: user.name,
            surname: user.surname,
            profileImage: user.profileImage,
            status: user.status,
            aboutMe: user.aboutMe
        };

        res
            .status(200)
            .json(userObj);
    } catch (err) {
        next();
    }
}

export const getEditProfile = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    try {
        const user = await User.findById(userId);
        if (!user) {
            const message = 'Error. Failed to fetch user data';
            const error = new CustomError(message, 401);
            throw error;
        }

        const userObj = {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password,
            profileImage: user.profileImage,
            status: user.status,
            aboutMe: user.aboutMe,
        }

        res
            .status(200)
            .json(userObj)
    } catch (err) {
        next();
    }
}

export const postEditProfile = async (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, email, password, status, profileImage, aboutMe } = req.body as ReqBodyUserType;
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            const message = 'Error. User not found.';
            const error = new CustomError(message, 401);
            throw error;
        }

        await user.updateOne({
            name: name,
            surname: surname,
            email: email,
            password: password,
            status: status,
            profileImage: profileImage,
            aboutMe: aboutMe,
        });

        await user.save();

        res
            .status(200)
            .json({ "message": "Profile has been updated successfully!" });
    } catch (err) {
        next();
    }
}