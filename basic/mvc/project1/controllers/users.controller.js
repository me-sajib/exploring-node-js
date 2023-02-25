const { v4: uuiv4 } = require("uuid");
const usersModel = require("../models/users.model");
// const User = require('./../models/users.model');

const getUser = (req, res) => {
    res.send({
        message: "get data success",
    })
};

const createUser = async (req, res) => {
    try {
        const newUser = new usersModel({
            id: uuiv4(),
            name: req.body.name,
            age: req.body.age
        })
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports = { getUser, createUser }