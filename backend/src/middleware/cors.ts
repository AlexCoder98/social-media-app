import { Request, Response, NextFunction } from 'express';

export const allowCrossDomain = (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
    res.header('Access-Control-Request-Method', 'POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, DELETE, OPTIONS');
    next();
}