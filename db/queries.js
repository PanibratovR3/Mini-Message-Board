const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows;
}

async function insertMessage(username, text) {
  await pool.query(
    "INSERT INTO messages(username, message_text, message_date) VALUES ($1, $2, current_date)",
    [username, text]
  );
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage,
};
