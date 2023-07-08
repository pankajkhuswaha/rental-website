const express = require("express");
const app = express();
const connectDB = require('./config/MongoDB');
const cors = require("cors");
const userRouter = require("./Routes/UsersRoute");
const shopRouter = require("./Routes/ShopRoute")
const doctorRouter = require("./Routes/DoctorRoute")
const patientRouter = require("./Routes/PaitentRoute")
const appointmentRouter = require("./Routes/AppointmentRoute")
const adminRouter = require("./Routes/AdminRoute")
 
// connection to mongodb database
connectDB();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(shopRouter);
app.use(doctorRouter);
app.use(patientRouter);
app.use(appointmentRouter);
app.use("/admin", adminRouter);


app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(8000, () => {
  console.log("Server is Working");
});
