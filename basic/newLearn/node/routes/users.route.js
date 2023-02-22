const router = require("express").Router();

router.get("/users", (req, res) => {
    res.send("All user show, wow your user <h1>300M +</h1>");
})

module.exports = router;