import express from 'express';
import hello from '../controllers/main.js';
import hello1 from '../controllers/data.js';
import hello2 from '../controllers/activeConnections.js';
import hello4 from '../controllers/uploaddata.js';

const indexRouter = express.Router();

indexRouter.get('/', hello);

indexRouter.get('/data', hello1);

indexRouter.get('/activeConnections', hello2);

indexRouter.post('/uploaddata', hello4);


export default indexRouter;