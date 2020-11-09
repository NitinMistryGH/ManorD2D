const mongoose = require("mongoose");
const Street = require("../models/streetsModel");

const getAllStreets = () =>
  Street
    .find({})
    .lean()
    .exec();

const createStreet = newStreet =>
  Street.create(newStreet);

module.exports = {
  getAllStreets,
  createStreet
};
