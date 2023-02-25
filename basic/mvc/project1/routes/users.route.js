const { getUser, createUser } = require('../controllers/users.controller');

const router = require('express').Router();

router.get("/", getUser);
router.post("/", createUser);


module.exports = router;