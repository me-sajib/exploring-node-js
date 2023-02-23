const router = require("express").Router();

router.get("/users", (req, res) => {
    res.statusCode = 200;
    res.send("<h1>Users pages</h1>")
})

module.exports = router;