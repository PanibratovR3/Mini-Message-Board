const queries = require("../db/queries");

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

module.exports = {
  getMessages,
  getMessage,
};
