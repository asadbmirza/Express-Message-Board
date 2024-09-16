const { Router } = require("express");
const path = require("node:path");

const msgRouter = Router();
const msgController = require(path.join(__dirname, "..", "controllers", "newController.js"));


msgRouter.get("/", msgController.get);
msgRouter.post("/", msgController.post);

module.exports = msgRouter;
