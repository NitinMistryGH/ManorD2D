const mongoose = require("mongoose");
const User = require("../models/userModel");

const findByEmail = userEmail =>
    User
        .findOne({ email: userEmail })
        .exec();

const createUser = user => User.create(user);

module.exports = {
    findByEmail,
    createUser
};
