const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patientEmail: {
      type: String,
      required: true,
    },
    doctorEmail: {
      type: String,
      required: true,
    },
    PatientInfo: [
        {
          department: {
            type: String,
          },
          condition: {
            type: String,
          },
        }],
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const appointmentModel = mongoose.model("appointments", appointmentSchema);

module.exports = appointmentModel;
