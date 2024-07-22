import express, { Express } from 'express';

const app: Express = express();
const port = 8080;

app.get('/users', (req, res, next) => {
    res.json({ "users": ["user 1", "user 2", "user 3"] });
})

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`)
});