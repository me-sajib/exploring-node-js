const mongoose = require('mongoose');
const config = require("./config");

const dbURL = config.db.url;
mongoose.set('strictQuery', true);
mongoose.connect(dbURL)
    .then(() => { console.log("database connection successfully") })
    .catch(e => {
        console.log(e);
        process.exit(1);
    })