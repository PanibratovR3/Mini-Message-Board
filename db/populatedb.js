const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const SQL = `
    CREATE TABLE IF NOT EXISTS messages(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(255),
        message_text VARCHAR(255),
        message_date DATE
    );
    INSERT INTO messages (username, message_text, message_date)
    VALUES
        ('Michael', 'That''s what she said.', current_date),
        ('Joey', 'How you doin''?', current_date),
        ('Walter', 'I''m the danger!', current_date);
`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:5432/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Finished!");
}

main();
