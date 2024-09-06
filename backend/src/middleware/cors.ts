import { Request, Response, NextFunction } from 'express';

export const allowCrossDomain = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
    res.setHeader('Access-Control-Request-Method', ['POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']);
    res.setHeader('Access-Control-Allow-Methods', ['POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']);
    next();
}