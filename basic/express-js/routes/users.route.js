const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("user login route");
});

router.get("/register", (req, res) => {
  res.send("user register router");
});

router.get("/about", (req, res) => {
  res.send("how to you know about me");
});

module.exports = router;
