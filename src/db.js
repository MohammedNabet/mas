const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432, // default PostgreSQL port
  ssl: {
    rejectUnauthorized: false, // Use if you need to connect with SSL
  },
});

module.exports = pool;
