const router = require("express").Router();

router.get("/registration", (req, res) => {
    res.send("<h2>Hey user, register first</h2>");
})

module.exports = router;