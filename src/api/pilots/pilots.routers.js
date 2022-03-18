const PilotRouter = require("express").Router();
const { isAuth } = require("../../middlewares/auth.middlewares");
const { upload } = require("../../middlewares/updateFiles.middleware");
const { deleteImgCloudinary } =require ("../../middlewares/deleteFile.middleware")


const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./pilots.controller");

PilotRouter.get("/", getAll);
PilotRouter.get("/:id", getOne);
PilotRouter.post("/", [isAuth], upload.single("img"), postOne);
PilotRouter.patch("/:id", [isAuth], upload.single('img'), patchOne);
PilotRouter.delete("/:id", [isAuth], deleteOne);
 
module.exports = PilotRouter;
