const { Router } = require("express");
const path = require("node:path");

const indexRouter = Router();
const indexController = require(path.join(__dirname, "..", "controllers", "indexController.js"));

indexRouter.get("/", indexController.get);

module.exports = indexRouter;
