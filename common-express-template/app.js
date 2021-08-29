import express from 'express';
import indexRouter from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: "*",
    })
)

app.use(express.json())

app.use('/', indexRouter);


app.all('*', (req, res) => {
    res.status(404).send('<h1>not found</h1>')
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT} `);

})

export default app;