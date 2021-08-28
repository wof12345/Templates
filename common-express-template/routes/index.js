import express from 'express';
import hello from '../controllers/main.js';
import hello1 from '../controllers/user.js';

const indexRouter = express.Router();

indexRouter.get('/', hello);

indexRouter.get('/data', hello1);


export default indexRouter;