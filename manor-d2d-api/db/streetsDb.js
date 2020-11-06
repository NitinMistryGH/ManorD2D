const mongoose = require("mongoose");
const streetsSchema = require("../schema/streetsSchema");

const getAllStreets = () =>
  mongoose
    .model("streets", streetsSchema)
    .find({})
    .lean()
    .exec();

const createStreet = newStreet => 
mongoose.model("streets", streetsSchema).create(newStreet)

module.exports = {
  getAllStreets,
  createStreet
};
