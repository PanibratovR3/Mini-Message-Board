const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getMessages);
indexRouter.get("/message/:messageId", indexController.getMessage);
indexRouter.get("/new", indexController.createMessageGet);
indexRouter.post("/new", indexController.createMessagePost);

module.exports = indexRouter;
