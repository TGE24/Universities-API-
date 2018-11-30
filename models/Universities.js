const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
  name: String,
  type: String,
  location: String
});

module.exports = mongoose.model("Universities", UniversitySchema);
