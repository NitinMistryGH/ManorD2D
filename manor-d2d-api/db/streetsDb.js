const mongoose = require("mongoose");
const streetsSchema = require("../schema/streetsSchema");
const testData = require("./streets-test-data");

const getAllStreets = () =>
  mongoose
    .model("streets", streetsSchema)
    .find({})
    .lean()
    .exec();

const populateStreetsTestData = async () => {
  await mongoose
    .model("streets", streetsSchema)
    .remove({});

  return mongoose
    .model("streets", streetsSchema)
    .insertMany(testData);
}

module.exports = {
  getAllStreets,
  populateStreetsTestData
};
