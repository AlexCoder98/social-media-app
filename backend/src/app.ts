import express, { Express } from 'express';
import mongoose from 'mongoose';

import { PORT, MONGODB_NAME, MONGODB_PASSWORD, MONGODB_COLLECTION_NAME } from './credentials/credentials';

import userRoutes from './routes/user';
import authRoutes from './routes/auth';
import postRoutes from './routes/post';

const app: Express = express();

const MONGODB_URI = `mongodb+srv://${MONGODB_NAME}:${MONGODB_PASSWORD}@cluster0.940kmdl.mongodb.net/${MONGODB_COLLECTION_NAME}`;

app.use(express.json());

app.use(userRoutes);
app.use(authRoutes);
app.use(postRoutes);

app.get('/users', (req, res, next) => {
    res.json({ "users": ["user 1", "user 2", "user 3"] });
})

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