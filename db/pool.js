const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config({ quiet: true });

module.exports = new Pool({
  connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:5432/${process.env.DATABASE}`,
});
