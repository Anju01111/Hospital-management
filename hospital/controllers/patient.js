
const Patient  = require("../models/patient");

async function getPatient(req, res) {
  try {
    const { id,fname,lname,mname,gender,email,dob,age,marital,maidename,house_no,country,city,other_locality,pin,state,locality,phone,mobile} = req.body;
    const newPatient = await Patient.findOne();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
}
module.exports = { getPatient};
