const router = require('express').Router();
const path = require('path');
const { getUser, saveUser } = require('../controllers/users.controller');

router.get("/users", getUser);
router.post("/user", saveUser);

module.exports = router;