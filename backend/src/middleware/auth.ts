import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }
    const token = req.get('Authorization')!.split(' ')[1];

    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'supersecretstring');
    } catch (err) {
        req.isAuth = false;
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        next();
    }
    req.userId = (decodedToken as JwtPayload).userId;
    req.isAuth = true;
    next();
}