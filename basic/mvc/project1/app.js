const express = require('express');
const app = express();
const cors = require('cors');
require("./config/db");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

module.exports = app;