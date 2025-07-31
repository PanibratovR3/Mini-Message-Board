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
  response.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (request, response) => {
  response.render("form", { title: "Add new message" });
});

indexRouter.post("/new", (request, response) => {
  messages.push({
    text: request.body.messageText,
    user: request.body.userName,
    added: new Date(),
  });
  response.redirect("/");
});

module.exports = indexRouter;
