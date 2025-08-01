const { Router } = require("express");
const EmptyTextError = require("../errors/EmptyTextError");
const EmptyUserError = require("../errors/EmptyUserError");

const messages = [
  {
    id: crypto.randomUUID(),
    text: "That's, what she said!",
    user: "Michael",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "How you doin'?",
    user: "Joey",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
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

indexRouter.get("/message/:messageId", (request, response) => {
  const { messageId } = request.params;
  const message = messages.find((messageItem) => messageItem.id === messageId);
  response.render("info", { message: message });
});

indexRouter.post("/new", (request, response) => {
  const newText = request.body.messageText.trim();
  const newUser = request.body.userName.trim();
  if (newUser.length === 0 || !newUser) {
    throw new EmptyUserError("User was not defined.");
  }
  if (newText.length === 0 || !newText) {
    throw new EmptyTextError("Text was not entered.");
  }

  messages.push({
    id: crypto.randomUUID(),
    text: newText,
    user: newUser,
    added: new Date(),
  });
  response.redirect("/");
});

module.exports = indexRouter;
