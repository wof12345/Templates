import express from "express";
import { getAlldata } from "../controllers/indexController.js";
import { insertdata } from "../controllers/indexController.js";
import { getSpecificData } from "../controllers/indexController.js";
import { updateSpecData } from "../controllers/indexController.js";
import { deleteSpecData } from "../controllers/indexController.js";

const indexRouter = express.Router();

// indexRouter.route("/").get(generateBackendUI);

indexRouter
  .route("/data")
  .get(getAlldata)
  .post(insertdata)
  .patch(updateSpecData)
  .delete(deleteSpecData);

indexRouter.route("/specData").post(getSpecificData);

export default indexRouter;
