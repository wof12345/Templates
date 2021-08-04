import logger from 'morgan';
import express from 'express';
import indexRouter from './routes/index.js';



const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT} `);

})

export default app;