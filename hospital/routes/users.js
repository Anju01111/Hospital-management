
const express = require("express");
const router = express.Router();
const patient = require("../controllers/patient");
const doctor = require("../controllers/doctor");
const appointment= require("../controllers/appointment");
const book= require("../controllers/book");
const lab=require("../controllers/lab");
const bill=require("../controllers/bill");
const receipt=require("../controllers/receipt");
const prescription=require("../controllers/prescription");
const speciality=require("../controllers/speciality");
const doctorregister=require("../controllers/doctorregister");
const patientregister=require("../controllers/patientregister");

router.get("/patient", patient.getPatient);
router.get("/doctor", doctor.createDoctor);
router.post("/appointment", appointment.createAppointment);
router.get("/appointment", appointment.getAppointment);
router.post("/book",book.bookAppointment);
router.get("/data",lab.getLab);
router.get("/bill",bill.getBill);
router.get("/receipt",receipt.getReceipt);
router.get("/prescription",prescription.getprescription);
router.get("/speciality",speciality.createSpeciality);
router.post("/doctorregister",doctorregister.registerDoctor);
router.post("/patientregister",patientregister.registerPatient);
module.exports = router;
