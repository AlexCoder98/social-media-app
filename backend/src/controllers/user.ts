import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

import { User } from '../models/user';
import CustomError from '../utils/error';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    try {
        const user = await User.findById(userId);
        if (!user) {
            const message = 'Failed to fetch the user';
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

export const getSettings = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    try {
        const user = await User.findById(userId);
        if (!user) {
            const message = 'Failed to fetch the user';
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

export const getProfileSettings = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    try {
        const user = await User.findById(userId);
        if (!user) {
            const message = 'User not found';
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

export const postProfileSettings = async (req: Request, res: Response, next: NextFunction) => {
    const { name, surname, status, bio } = req.body;
    const profileImage = req.file;
    console.log('PROFILE IMAGE');
    console.log(profileImage);
    console.log(req.body);

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
            const message = 'User not found';
            const error = new CustomError(message, 401);
            throw error;
        }

        user.name = name;
        user.surname = surname;
        // user.profileImage = profileImage;
        user.status = status;
        user.bio = bio;

        await user.save();

        res
            .status(200)
            .json({ "message": "Profile data has been updated" });
    } catch (err) {
        next(err);
    }
}

export const getAuthenticationSettings = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    try {
        const user = await User.findById(userId);
        if (!user) {
            const message = 'User not found';
            const error = new CustomError(message, 401);
            throw error;
        }

        res
            .status(200)
            .json(user.email);
    } catch (err) {
        next(err);
    }
}

export const postAuthenticationSettings = async (req: Request, res: Response, next: NextFunction) => {
    const { email, oldPassword, newPassword, newPasswordConfirmation } = req.body;
    const { userId } = req;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const message = errors.array()[0].msg;
            const error = new CustomError(message, 403);
            throw error;
        }

        const user = await User.findById(userId);

        if (!user) {
            const message = 'User not found';
            const error = new CustomError(message, 401);
            throw error;
        }

        if (email === user.email) {
            const filteredUsers = await User.find({ _id: { $ne: userId } });
            const doesEmailExist = filteredUsers.find(user => user.email === email);
            if (doesEmailExist) {
                const message = 'User with provided email address already exists';
                const error = new CustomError(message, 409);
                throw error;
            }
        } else {
            user.email = email;
        }

        if (oldPassword.length > 0) {
            const isPasswordEqual = await bcrypt.compare(oldPassword, user.password);
            if (!isPasswordEqual) {
                const message = 'Old password is not correct';
                const error = new CustomError(message, 403);
                throw error;
            }

            if (newPassword.length < 3) {
                const message = 'New password is too short';
                const error = new CustomError(message, 403);
                throw error;
            }

            if (newPasswordConfirmation !== newPassword) {
                const message = 'Password confirmation failed';
                const error = new CustomError(message, 403);
                throw error;
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
        }

        await user.save();

        res
            .status(200)
            .json({ "message": "Authentication data has been changed" });
    } catch (err) {
        next(err);
    }
}