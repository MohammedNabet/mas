const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./db"); // Import the pool from your PostgreSQL configuration file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post("/api/login", async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO login (username, password, email) VALUES ($1, $2, $3) RETURNING id",
      [username, password, email]
    );
    const userId = result.rows[0].id;
    res.status(201).json({ id: userId });
  } catch (error) {
    console.error("Error inserting login:", error);
    res.status(500).json({ message: "Failed to create login." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
