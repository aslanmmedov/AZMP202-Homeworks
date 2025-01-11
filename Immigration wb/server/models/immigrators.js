const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImmigratorsSchema = new Schema({
  image: String,
  country: String,
  title: String,
  description: String,
},{versionKey: false, timestamps: true});

const ImmigrationsModel = mongoose.model('Immigrators',ImmigratorsSchema);

module.exports = ImmigrationsModel;