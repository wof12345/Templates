import express from "express";
import { getMovieData } from "../controllers/getMovieData.js";
import { readMovieData } from "../controllers/getMovieData.js";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.route("/search").get(readMovieData).post(getMovieData);

export default indexRouter;
