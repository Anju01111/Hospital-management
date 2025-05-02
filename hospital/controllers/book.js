const appointment   = require("../models/appointment");

async function bookAppointment(req, res) {
    try{
        const{start_time,end_time, doctor_id, patient_id}=req.body;
        console.log("Req Body")
        console.log(req.body)
        const existingAppointment=await appointment.findOne({where:{start_time,end_time}});
        if(existingAppointment){
            return res.status(400).json({msg:'slot already booked'});
        }
    await appointment.create({start_time,end_time, doctor_id, patient_id });

    return res.status(201).json({ msg: 'Appointment booked successfully.' });
    }
    catch (error) {
        console.error('Error booking appointment:', error);
        return res.status(500).json({ error: 'Internal server error.' });
      }
}
module.exports = { bookAppointment };
