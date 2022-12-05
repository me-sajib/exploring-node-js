const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Admin Login first");
});

router.get("/register", (req, res) => {
  res.send("Admin register now");
});

module.exports = router;
