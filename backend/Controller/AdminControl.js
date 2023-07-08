const Patient = require("../Models/PaitentModel")
const User = require("../Models/UserModel")
const Doctor = require("../Models/DoctorModel")
const Appointment = require("../Models/AppointmentModel")

const isAdmin = async (req, res, next) => {

  const  email = req.body.email;

  const adminUser = await User.findOne({ email });
 if(adminUser){
  if (adminUser.usertype !== "admin") {
    throw new Error("You are not an admin");
  } else {
    next();
  }
 }else{
  res.sendStatus(404)
 }
};
const siteDatas = async (req,res)=>{
    const users = await User.find();
    const doctors = await Doctor.find();
    const appointments = await Appointment.find();
    const patients = await Patient.find();
    res.send({users,doctors,appointments,patients})
}



module.exports = { isAdmin , siteDatas };
