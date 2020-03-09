const mongoose = require("mongoose");
const Streets = require("../schema/streetsSchema");

const getAllStreets = () =>
  mongoose
    .find({})
    .lean()
    .exec();


module.exports = {
  getAllStreets
};
