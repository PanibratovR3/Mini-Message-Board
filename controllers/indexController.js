const queries = require("../db/queries");

async function getMessages(request, response) {
  const messages = await queries.getAllMessages();
  response.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
}

module.exports = {
  getMessages,
};
