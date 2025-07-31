const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (request, response) => {
  response.send("Main page.");
});

module.exports = indexRouter;
