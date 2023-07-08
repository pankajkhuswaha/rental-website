const Appointment = require("../Models/AppointmentModel");
const Doctor = require("../Models/DoctorModel");
const User = require("../Models/UserModel");
const Patient = require("../Models/PaitentModel");

//* Get user data from its email-id
const getAppointmentDetails = async (req, res) => {
  const docEmail = req.body.doctorEmail;
  const patEmail = req.body.patientEmail;
  const appointment = await Appointment.find();
  let appointmentData = [];
  let appointments;
  if (docEmail) {
    appointments = appointment.filter(
      (appoint) => appoint.doctorEmail === docEmail
    );
  } else if (patEmail) {
    appointments = appointment.filter(
      (appoint) => appoint.patientEmail === patEmail
    );
  }
  if (docEmail || patEmail) {
    if (appointments) {
      console.log(appointments);
      for (let i = 0; i < appointments.length; i++) {
        const patientdata = await User.findOne({
          email: appointments[i].patientEmail,
        });
        const patientinfo = await Patient.findOne({
          email: appointments[i].patientEmail,
        });
        const doctorinfo = await Doctor.findOne({
          email: appointments[i].doctorEmail,
        });
        const doctordata = await User.findOne({
          email: appointments[i].doctorEmail,
        });
        if(doctordata&&patientdata){
          const appointment = {
            patientName: `${patientdata.firstname} ${patientdata.lastname}`,
            patientAge: patientinfo.age,
            patientGender: patientinfo.gender,
            doctorName: `${doctordata.firstname} ${doctordata.lastname}`,
            fees: doctorinfo.feesPerCunsaltation,
            condition: appointments[i].PatientInfo[0].condition,
            department: appointments[i].PatientInfo[0].department,
            date: appointments[i].date,
            time: appointments[i].time,
            status: appointments[i].time,
          };
          console.log(appointments[i].PatientInfo);
          appointmentData.push(appointment);
        }else{
        appointmentData.push({error:"data for respective patient and doctor is not found"});
        }
      }
    }
    res.send(appointmentData);
  } else {
    res.send("Invalid details");
  }
};

const addAppointment = async (req, res) => {
  const docEmail = req.body.doctorEmail;
  const patEmail = req.body.patientEmail;
  const data = req.body;
  if (docEmail && patEmail) {
    const appointment = new Appointment(data);
    try {
      await appointment.save();
      res.send("Appointment Created");
    } catch (error) {
      res.send(error.message);
    }
  } else {
    res.send("Invalid details");
  }
};

const checkAppointment = async (req, res) => {
  const docEmail = req.body.doctorEmail;
  const patEmail = req.body.patientEmail;
  const reqdate = req.body.date;
  const reqtime = req.body.time;
  if (docEmail && patEmail) {
    const appointmentdata = await Appointment.find();
    if (appointmentdata) {
      let dates = [];
      let times = [];
      let doctors = [];
      for (let i = 0; i < appointmentdata.length; i++) {
        if (appointmentdata[i].status === "pending" || "accepted") {
          dates.push(appointmentdata[i].date);
          times.push(appointmentdata[i].time);
          doctors.push(appointmentdata[i].doctorEmail);
        }
      }
      const time = times.find((item) => item === reqtime);
      const date = dates.find((item) => item === reqdate);
      const doctor = doctors.find((item) => item === docEmail);
      if (date && time && doctor) {
        res.send({ available: false });
      } else {
        res.send({ available: true });
      }
    } else {
      res.send("Appointment data of respective doctor is not found");
    }
  } else {
    res.send("invalid email");
  }
};

module.exports = { addAppointment, checkAppointment, getAppointmentDetails };
