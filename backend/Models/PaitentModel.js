const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
  },
  medicalHistory: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
  },
},{timestamps:true});

const patient = mongoose.model("patient", patientSchema);

module.exports = patient;
