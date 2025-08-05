const queries = require("../db/queries");
const EmptyTextError = require("../errors/EmptyTextError");
const EmptyUserError = require("../errors/EmptyUserError");

async function getMessages(request, response) {
  const messages = await queries.getAllMessages();
  response.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
}

async function getMessage(request, response) {
  const { messageId } = request.params;
  const message = await queries.getMessageById(Number(messageId));
  response.render("info", {
    message: message[0],
  });
}

async function createMessageGet(request, response) {
  response.render("form", {
    title: "Add New Message",
  });
}

async function createMessagePost(request, response) {
  const newUser = request.body.userName.trim();
  const newMessageText = request.body.messageText.trim();
  if (newUser.length === 0 || !newUser) {
    throw new EmptyUserError("User was not defined.");
  }
  if (newMessageText.length === 0 || !newMessageText) {
    throw new EmptyTextError("Text was not entered.");
  }
  await queries.insertMessage(newUser, newMessageText);
  response.redirect("/");
}

module.exports = {
  getMessages,
  getMessage,
  createMessageGet,
  createMessagePost,
};
