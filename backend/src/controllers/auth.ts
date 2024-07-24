import { Request, Response, NextFunction } from 'express';

export const postSignUp = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ "Message": "Form submitted" });
    console.log(req.body);
}