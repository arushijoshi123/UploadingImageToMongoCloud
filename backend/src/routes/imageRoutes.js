const express = require("express");
const imageController = require("../controllers/imageController");
const imageRouter = express.Router();
imageRouter.post("/upload", imageController.uploadimage);
imageRouter.get("/:id", imageController.getimage);

module.exports = imageRouter;
