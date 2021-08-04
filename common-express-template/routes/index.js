import express from 'express';
import hello from '../controllers/main.js';
import hello1 from '../controllers/user.js';
import path from 'path';

const indexRouter = express.Router();


const filepath = path.join('../Templates/common-portfolio/mainpage/index.html');
console.log(filepath);

indexRouter.get('/', hello);

indexRouter.get(filepath, hello1);

export default indexRouter;