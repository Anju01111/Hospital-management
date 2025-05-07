
const Prescription  = require("../models/prescription");
const Doctor  = require("../models/doctor");
const Patient  = require("../models/patient");
const Speciality = require("../models/speciality");
async function getprescription(req, res) {
  try {
    const prescription = await Prescription.findAll({
        include: [
            { 
              model: Doctor,
             attributes: ['name', 'speciality_id']
             },
            { 
              model: Patient, 
              attributes: ['fname']
             },
             { 
              model: Speciality, 
              attributes: ['name']
             }
        ]
    });
    res.json(prescription);
} catch (error) {
    console.error('Error fetching prescriptions:', error);
    res.status(500).json({ error: 'Internal server error' });
}
}
module.exports = { getprescription};
