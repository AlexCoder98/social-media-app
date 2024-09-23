import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

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
            bio: user.bio
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
            profileImage: user.profileImage,
            status: user.status,
            bio: user.bio,
        }

        res
            .status(200)
            .json(userObj)
    } catch (err) {
        next();
    }
}

export const postEditProfile = async (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, email, password, status, profileImage, bio } = req.body as ReqBodyUserType;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const message = errors.array()[0].msg;
            const error = new CustomError(message, 409);
            throw error;
        }

        const user = await User.findById(req.userId);
        if (!user) {
            const message = 'Error. User not found.';
            const error = new CustomError(message, 401);
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await user.updateOne({
            name: name,
            surname: surname,
            email: email,
            password: hashedPassword,
            status: status,
            profileImage: profileImage,
            bio: bio,
        });

        await user.save();

        res
            .status(200)
            .json({ "message": "Profile has been updated successfully!" });
    } catch (err) {
        next(err);
    }
}

export const getSettings = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    try {
        const user = await User.findById(userId);
        if (!user) {
            const message = 'Error. Failed to fetch user!';
            const error = new CustomError(message, 404);
            throw error;
        }

        const resObj = {
            name: user.name,
            surname: user.surname,
            profileImage: user.profileImage
        };

        res
            .status(200)
            .json(resObj);

    } catch (err) {
        next(err);
    }
}

export const getGeneralSettings = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    try {
        const user = await User.findById(userId);
        if (!user) {
            const message = 'Error. User not found';
            const error = new CustomError(message, 401);
            throw error;
        }

        const userObj = {
            name: user.name,
            surname: user.surname,
            profileImage: user.profileImage,
            status: user.status,
            bio: user.bio,
        }

        res
            .status(200)
            .json(userObj);

    } catch (err) {
        next(err);
    }
}

export const postGeneralSettings = async (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, profileImage, status, bio } = req.body;
    const { userId } = req;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const message = errors.array()[0].msg;
            const error = new CustomError(message, 409);
            throw error;
        }

        const user = await User.findById(userId);
        if (!user) {
            const message = 'Error. User not found';
            const error = new CustomError(message, 401);
            throw error;
        }

        user.name = name;
        user.surname = surname;
        user.profileImage = profileImage;
        user.status = status;
        user.bio = bio;

        await user.save();

        res
            .status(200)
            .json({ "message": "Profile has been updated successfully" })
    } catch (err) {
        next(err);
    }
}