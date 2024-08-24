import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { User } from '../models/user';
import CustomError from '../utils/error';

type JwtExtendedTokenType = {
    userId: string
} & JwtPayload;

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('Authorization');
    try {
        if (!authHeader) {
            const message = 'Error. Failed to fetch user!';
            const error = new CustomError(message, 403);
            throw error;
        }
        const token = authHeader.split(' ')[1];
        const decodedToken = jwt.verify(token, 'supersecretstring') as JwtExtendedTokenType;

        const user = await User.findById(decodedToken.userId);
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