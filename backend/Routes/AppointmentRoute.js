const express = require("express");
const { addAppointment, checkAppointment, getAppointmentDetails } = require("../Controller/AppointmentController");
const router = new express.Router();

router.post("/addappointment",addAppointment)
router.post("/checkappointment",checkAppointment)
router.post("/getappointments",getAppointmentDetails)

module.exports = router