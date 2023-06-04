const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    job: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model("users", userSchema);