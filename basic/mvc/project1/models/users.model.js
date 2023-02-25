const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema);