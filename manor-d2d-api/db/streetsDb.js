const mongoose = require("mongoose");
const streetsSchema = require("../schema/streetsSchema");

const getAllStreets = () =>
  mongoose
    .model("streets", streetsSchema)
    .find({})
    .lean()
    .exec();

module.exports = {
  getAllStreets
};
