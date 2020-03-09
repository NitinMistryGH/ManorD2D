const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const streetsSchema = new Schema({
  postcode: { type: String, required: true },
  streetName: { type: String, required: true },
  lastVisited: { type: String, required: true }
});

const Streets = mongoose.model('Streets', streetsSchema)

module.exports = Streets;