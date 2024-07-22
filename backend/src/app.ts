import express, { Express } from 'express';

const app: Express = express();
const port = 8080;

app.get('/', (req, res, next) => {
    res.send('Change now');
})

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`)
});