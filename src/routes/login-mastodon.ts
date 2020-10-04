import {Router} from 'express';

let app = Router();

app.get('/', (req, res) => {
    res.json({foo: 'bar'});
});

export default app;
