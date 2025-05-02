
const Speciality  = require("../models/speciality");

async function createSpeciality(req, res) {
  try {
    const { id,speciality_name} = req.body;
    const newSpeciality= await Speciality.findAll();
    res.status(201).json(newSpeciality);
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
}
module.exports = { createSpeciality};
