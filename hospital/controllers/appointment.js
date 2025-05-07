
const  Appointment  = require("../models/appointment");
const Doctor  = require("../models/doctor");
const Speciality = require("../models/speciality");
async function createAppointment(req, res) {
    console.log('Hit this controller')
  try {
    // console.log(Appointment)
    const{facility,speciality,doctor,date,timeslot}=req.body;
    const newAppointment= await Appointment.create(req.body);
    
    res.status(201).json(newAppointment);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error creating appointment" });
  }
}

async function getAppointment(req, res) {
  console.log('Hit this controller')
try {
  
  const viewAppointment= await Appointment.findAll({
    include: [
      { 
        model: Doctor,
       attributes: ['name', 'speciality_id']
       },
       { 
        model: Speciality, 
        attributes: ['name']
       }
  ]
  });
  console.log(viewAppointment)
  res.status(201).json(viewAppointment);
} catch (error) {
  console.log(error)
  res.status(500).json({ error: "Error creating appointment" });
}
}


module.exports = { createAppointment,getAppointment };
