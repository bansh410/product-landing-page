const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.use(express.json());

app.post("/contact", (req, res) => {
  console.log("Contact form submitted:", req.body);
  res.json({ message: "Thanks for reaching out! We'll get back to you soon." });
});

app.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
});
