import { Request, Response, NextFunction } from "express";
import { ErrorWithStatus } from "../types/error";

export const errorHandler = (err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'fail';
    res.status(err.statusCode).send({
        statusCode: err.statusCode,
        status: err.status,
        message: err.message
    });
}