const express = require("express");
const { addNewDoctor, addAppointment, getDoctor ,getAppointment, checkAppointment } = require("../Controller/DoctorController");
const router = new express.Router();

router.post("/doctor/registerdoctor",addNewDoctor);
router.get("/doctor",getDoctor);
router.get("/doctor/getappointment/:id",getAppointment);

module.exports = router