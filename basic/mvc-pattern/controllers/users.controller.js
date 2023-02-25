const path = require('path');
const { users } = require('../models/users.model');

exports.getUser = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
}

exports.saveUser = (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    users.push({ name, age })
    res.status(200).send({
        status: "Success",
        users
    })
}