import { Request, Response, NextFunction } from 'express';

export const postSignUp = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req);
    console.log(req.body);
    res.send({ "Message": "Form submitted" });
}