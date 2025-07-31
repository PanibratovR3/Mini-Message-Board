const { Router } = require("express");

const messages = [
  {
    text: "That's, what she said!",
    user: "Michael",
    added: new Date(),
  },
  {
    text: "How you doin'?",
    user: "Joey",
    added: new Date(),
  },
  {
    text: "I am the Danger!!!",
    user: "Walter",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (request, response) => {
  response.send("Main page.");
});

module.exports = indexRouter;
