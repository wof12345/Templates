import express from "express";
import { getAlldata } from "../controllers/indexController.js";
import { insertdata } from "../controllers/indexController.js";

const indexRouter = express.Router();

// indexRouter.route("/").get(generateBackendUI);

indexRouter.route("/data").get(getAlldata).post(insertdata);

export default indexRouter;
