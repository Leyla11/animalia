const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  place: { type: String, required: true, unique: true },
  adress: { type: String, required: true },
  contactNumber: { type: String, required: true },
  longitud: { type: String, required: true },
  latitud: { type: String, required: true }
});

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;
