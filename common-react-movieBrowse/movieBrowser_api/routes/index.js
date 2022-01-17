import express from "express";
import getMovieData from "../controllers/getMovieData.js";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.route('/').post(getMovieData)

export default indexRouter;