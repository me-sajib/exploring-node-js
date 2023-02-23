const router = require("express").Router();

router.post("/registration", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    res.send(`<h2>Hey user, your name = ${name} and age ${age} </h2>`);
})

module.exports = router;