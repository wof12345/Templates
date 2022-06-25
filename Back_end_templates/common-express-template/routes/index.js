import express from "express";
import { generateBackendUI } from "../controllers/main.js";
import { getAllData } from "../controllers/indexController.js";
import { getSpecificData } from "../controllers/indexController.js";
import { deleteForm } from "../controllers/indexController.js";
import { updateData } from "../controllers/indexController.js";
import { uploadData } from "../controllers/indexController.js";

const indexRouter = express.Router();

indexRouter.route("/").get(generateBackendUI);

indexRouter
  .route("/data")
  .get(getSpecificData)
  .post(updateData)
  .delete(deleteForm);

indexRouter.route("/getAllData").get(getAllData).post(uploadData);

export default indexRouter;
