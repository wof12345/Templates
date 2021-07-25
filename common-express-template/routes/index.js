import express from 'express';

const indexRouter = express.Router();

import hello from '../controllers/main.js';

indexRouter.get('/', hello);

export default indexRouter;