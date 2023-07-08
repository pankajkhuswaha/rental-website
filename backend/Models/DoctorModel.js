const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  specialization: {
    type: String,
    required: [true, "specialization is require"],
  },
  experience: {
    type: Number,
    required: [true, "experience is required"],
  },
  feesPerCunsaltation: {
    type: Number,
    required: [true, "fee is required"],
  },
  status: {
    type: String,
    default: "pending",
  },
  // appointments: [
  //     {
  //       name: {
  //         type: String,
  //         required: true,
  //       },
  //       image: {
  //         type: String,
  //       },
  //       email: {
  //         type: String,
  //         required: true,
  //       },
  //       age: {
  //         type: Number,
  //         required: true,
  //       },
  //       gender: {
  //         type: String,
  //       },
  //       department: {
  //         type: String,
  //       },
  //       condition: {
  //         type: String,
  //       },
  //       date: {
  //         type: String,
  //       },
  //       time: {
  //         type: String,
  //       },
  //       status: {
  //         type: String,
  //         default: "pending",
  //       },
  //     }],
},{timestamps:true});

const doctor = mongoose.model("doctor", doctorSchema);

module.exports = doctor;

// TODO OLd model
// email: {
//   type: String,
//   unique: true,
//   required: true,
// },
// name:{
//   type:String
// },
// department: {
//   type: String,
//   required: true,
// },
// speciality: {
//   type: String,
// },
// fees: {
//   type: Number,
// },
// 