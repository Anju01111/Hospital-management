
const  Doctor  = require("../models/doctor");

async function createDoctor(req, res) {
    const speciality_id = req.query.department
  try {
    
    const newDoctor = await Doctor.findAll({where:{
      speciality_id
    } });
    res.status(201).json(newDoctor);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error creating doctor" });
  }
}
module.exports = { createDoctor };
