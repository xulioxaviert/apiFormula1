const GrandPrixRoutes = require("express").Router();
const { isAuth } = require("../../middlewares/auth.middlewares");
const upload = require("../../middlewares/updateFiles.middleware");

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./grandPrix.controller");

GrandPrixRoutes.get("/", getAll);
GrandPrixRoutes.get("/:id", getOne);
GrandPrixRoutes.post("/", [isAuth], postOne);
GrandPrixRoutes.patch("/:id" ,[isAuth],  patchOne);
GrandPrixRoutes.delete("/:id" ,[isAuth],  deleteOne);

module.exports = GrandPrixRoutes;
