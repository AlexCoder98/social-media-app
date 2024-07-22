import express, { Express } from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user';

const app: Express = express();
const port = 8080;

const MONGODB_URI = 'mongodb+srv://alex:Gg8gb40I1HQYEcYZ@cluster0.940kmdl.mongodb.net/social-media';




app.get('/users', (req, res, next) => {
    res.json({ "users": ["user 1", "user 2", "user 3"] });
})

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        app.listen(port);
        console.log('Connected');
    });