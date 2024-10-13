import path from 'path';

import express, { Express, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

import { allowCrossDomain } from './middleware/cors';
import { isAuthenticated } from './middleware/auth';

import { PORT, MONGODB_NAME, MONGODB_PASSWORD, MONGODB_COLLECTION_NAME } from './credentials/credentials';

import { errorHandler } from './controllers/error';

import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import postRoutes from './routes/post';

import { uploadFile } from './middleware/multer';
import { deleteFile } from './utils/deleteFile';

const app: Express = express();

const MONGODB_URI = `mongodb+srv://${MONGODB_NAME}:${MONGODB_PASSWORD}@cluster0.940kmdl.mongodb.net/${MONGODB_COLLECTION_NAME}`;


app.use(express.json());
app.use(uploadFile.single('profileImage'));

app.use('/images/users_images', express.static(path.join(__dirname, '..', 'images', 'users_images')));

app.use(allowCrossDomain);
app.use(isAuthenticated);

app.put(
    '/upload',
    (req: Request, res: Response, next: NextFunction) => {
        if (!req.isAuth) {
            throw new Error('Not authorized');
        }
        if (!req.file) {
            return res.status(200).json({ message: 'No file provided' });
        }
        if (req.body.oldProfileImage) {
            deleteFile(req.body.oldProfileImage);
        };
        return res.status(200).json({
            message: 'Image has been uploaded',
            path: req.file.path
        });
    })

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