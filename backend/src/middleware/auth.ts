import { Request, Response, NextFunction } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    console.log('Req Body in isAuth middleware');
    console.log(req.body);
    const authHeader = req.get('Authorization');
    console.log('Auth header ' + authHeader);

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
    console.log('Req Body in isAuth middleware - BOTTOM');
    console.log(req.body);
    next();
}