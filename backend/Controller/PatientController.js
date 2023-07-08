const Patient = require("../Models/PaitentModel")
const User = require("../Models/UserModel")

const addNewPatient = async (req,res)=>{
    const email = req.body.email;
  let response;
  let code;
  if (email) {
    const user = await User.findOne({ email });
    if(user){
        if (user.usertype !== "pending-patient") {
            try {
              await User.findOneAndUpdate(
                { email },
                { usertype: "pending-patient" }
              );
            } catch (error) {
              response = error.message;
            }
            const data = req.body;
            const doctor = new Patient(data);
            try {
              await doctor.save();
              response = "created";
            } catch (error) {
              response = error.message;
            }
          } else {
            code=400;
            response="Response for being patient is forwarded already"
        }
        res.send(response);
    }else{
        res.send("No User found")
    }
  } else {
    res.status(400).json("failed ");
  }
}



module.exports = {addNewPatient};
