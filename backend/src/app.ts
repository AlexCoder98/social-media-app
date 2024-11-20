import path from 'path';

import express, { Express, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { allowCrossDomain } from './middleware/cors';
import { isAuthenticated } from './middleware/auth';
import { uploadFile } from './middleware/multer';

import { errorHandler } from './controllers/error';

import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import postRoutes from './routes/post';

import { deleteFile } from './utils/deleteFile';

dotenv.config();

const { PORT, MONGODB_NAME, MONGODB_PASSWORD, MONGODB_COLLECTION_NAME } = process.env;

const app: Express = express();

const MONGODB_URI = `mongodb+srv://${MONGODB_NAME}:${MONGODB_PASSWORD}@cluster0.940kmdl.mongodb.net/${MONGODB_COLLECTION_NAME}`;

app.use(express.json());
app.use(uploadFile.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'postImage' }
]));

app.use('/public/images/users', express.static(path.join(__dirname, '..', 'public', 'images', 'users')));
app.use('/public/images/posts', express.static(path.join(__dirname, '..', 'public', 'images', 'posts')));

app.use(allowCrossDomain);
app.use(isAuthenticated);

app.post(
    '/upload',
    (req: Request, res: Response, next: NextFunction) => {
        const fieldName = req.fieldName;
        const files = req.files as { [fieldname: string]: Express.Multer.File[] };

        try {
            if (!req.isAuth) {
                throw new Error('Not authorized');
            }
            if (!files[fieldName]) {
                return res.status(200).json({ message: 'No file provided' });
            }
            if (req.body.oldImagePath) {
                deleteFile(req.body.oldImagePath);
            };

            const imagePath = files[fieldName][0].path;
            return res.status(200).json({
                message: 'Image has been uploaded',
                path: imagePath
            });
        } catch (err) {
            next(err);
        }
    });

app.use(authRoutes);
app.use(userRoutes);
app.use(postRoutes);

app.use(errorHandler);

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        app.listen(PORT);
        console.log('Connected');
    })
    .catch(err => {
        console.log('Something went wrong. Not able to connect :(');
        console.log(err);
    })