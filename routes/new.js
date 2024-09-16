const { Router } = require("express");
const path = require("node:path");

const newRouter = Router();
const newController = require(path.join(__dirname, "..", "controllers", "newController.js"));


newRouter.get("/", newController.get);
newRouter.post("/", newController.post);

module.exports = newRouter;
