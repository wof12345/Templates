import express, { json, urlencoded } from 'express';

import morgan from 'morgan';
import cors from 'cors';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var app = express();
app.use(
    cors({
        origin: "*",
    })
)

app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const port = 3000;
app.listen(port, () => {
    console.log(`App tarted on port ${port}.`);
})