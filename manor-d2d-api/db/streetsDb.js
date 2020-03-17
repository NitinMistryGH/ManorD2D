const mongoose = require("mongoose");
const streetsSchema = require("../schema/streetsSchema");
const testData = require("./streets-test-data");

const getAllStreets = () =>
  mongoose
    .model("streets", streetsSchema)
    .find({})
    .lean()
    .exec();

const populateStreetsTestData = () =>
  mongoose
    .model("streets", streetsSchema)
    .remove({})
    .insertMany(testData)
    .exec();

module.exports = {
  getAllStreets,
  populateStreetsTestData
};
