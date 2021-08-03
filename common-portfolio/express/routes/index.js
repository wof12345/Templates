import express from 'express';
import hello from '../controllers/main.js';

const indexRouter = express.Router();



indexRouter.get('/', hello);

export default indexRouter;