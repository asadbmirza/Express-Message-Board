const { Router } = require("express");
const path = require("node:path");

const msgController = require(path.join(__dirname, "..", "controllers", "msgController"));
const msgRouter = Router();

msgRouter.get("/:id", msgController.get);

module.exports = msgRouter;
