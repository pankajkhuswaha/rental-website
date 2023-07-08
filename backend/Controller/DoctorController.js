const Doctor = require("../Models/DoctorModel");
const User = require("../Models/UserModel");
const Patient = require("../Models/PaitentModel");

const addNewDoctor = async (req, res) => {
  const email = req.body.email;
  console.log(req.body);
  let response;
  if (email) {
    const user = await User.findOne({ email });
    if (user) {
      if (user.usertype !== "pending-doctor") {
        try {
          await User.findOneAndUpdate(
            { email },
            { usertype: "pending-doctor" }
          );
        } catch (error) {
          response = error.message;
        }
        const data = req.body;
        const doctor = new Doctor(data);
        try {
          await doctor.save();
          response = "created paitent";
        } catch (error) {
          response = error.message;
        }
      } else {
        response = "Response for being doctor is forwarded already";
      }
      res.send(response);
    } else {
      res.send("No User found");
    }
  } else {
    res.status(400).json("failed ");
  }
};

const getDoctor = async (req, res) => {
  let doctordata = [];
  const docdata = await Doctor.find();
  for (let i = 0; i < docdata.length; i++) {
    if (docdata.status !== "pending") {
      const userdata = await User.findOne({ email: docdata[i].email });
      const docinfo = {
        _id: userdata._id,
        firstname: userdata.firstname,
        lastname: userdata.lastname,
        email: userdata.email,
        mobile: userdata.mobile,
        usertype: userdata.usertype,
        password: userdata.password,
        cart: userdata.cart,
        favorites: userdata.favorites,
        address: docdata[i].address,
        specialization: docdata[i],
        experience: docdata[i].experience,
        feesPerCunsaltation: docdata[i].feesPerCunsaltation,
        status: docdata[i].status,
      };
      doctordata.push(  );
    }
  }
  // console.log(doctordata);
  res.send(doctordata);
};

// TODO const addAppointment = async (req, res) => {
//   const email = req.body?.pateintemail;
//   console.log(req.body);
//   let response;
//   if (email) {
//     const userdata = await User.findOne({ email });
//     const doctordata = await User.findOne({ email: req.body?.doctoremail });
//     const patientdata = await Patient.findOne({ email });
//     if (userdata) {
//       if (userdata.usertype === "patient") {
//         const prevappointment = patientdata.appointments;
//         const appointment = [...prevappointment].concat(req.body);
//         try {
//           await Patient.findOneAndUpdate(
//             { email },
//             { appointments: appointment }
//           );
//           response = "appointment request send";
//           console.log(response);
//         } catch (error) {
//           response = error.message;
//         }
//       } else {
//         response = "The doctor you requested is not available";
//       }
//     } else {
//       response = "user not found";
//     }
//     if (doctordata) {
//       if (doctordata.usertype === "doctor") {
//         const doctorinfo = await Doctor.findOne({
//           email: req.body?.doctoremail,
//         });
//         const prevappointment = doctorinfo?.appointments;
//         const appointment = {
//           name: `${userdata.firstname} ${userdata.lastname}`,
//           image: userdata?.image,
//           email: userdata?.email,
//           image: userdata?.image,
//           age: patientdata?.age,
//           gender: patientdata?.gender,
//           department: req.body?.department,
//           condition: req.body?.patientdiscription,
//           date: req.body?.appointmentdate,
//           time: req.body?.appointmenttime,
//           status: req.body?.status,
//         };
//         const updateval = [...prevappointment].concat(appointment);
//         try {
//           await Doctor.findOneAndUpdate(
//             { email: req.body?.doctoremail },
//             { appointments: updateval }
//           );
//           response = "appointment updated";
//         } catch (error) {
//           response = error.message;
//         }
//       } else {
//         response = "You are not registered doctor";
//       }
//     }
//     res.send(response);
//   } else {
//     res.send("invalid data");
//   }
// };

const getAppointment = async (req, res) => {
  const email = req.params.id;
  if (email.includes("@")) {
    const docdata = await Doctor.findOne({ email });
    if (docdata) {
      res.send(docdata.appointments);
    } else {
      res.send("Appointment data of respective doctor is not found");
    }
  } else {
    res.send("invalid email");
  }
};

const accepteAppointment = async (req, res) => {
  const email = req.body.email;
  if (email) {
    const patient = Patient.findOne({ email });
    if (patient) {
      const appointments = patient.appointments;
      const getappointment = appointments.find(
        (appointment) =>
          appointment.time === req.body.time &&
          appointment.date === req.body.date &&
          appointment === req.body.time
      );
    }
  }
};

module.exports = {
  addNewDoctor,
  getDoctor,
  getAppointment,
};
