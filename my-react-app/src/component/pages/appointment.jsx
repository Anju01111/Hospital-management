import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Joi from 'joi';
import DataTable from 'datatables.net-dt';
import "datatables.net-dt/css/dataTables.dataTables.min.css";

const appointmentSchema = Joi.object({
  facility: Joi.string().required().label('Facility'),
  specialty: Joi.string().required().label('Specialty'),
  doctor: Joi.string().required().label('Doctor'),
  date: Joi.date().required().label('Date')
});

function TeacherDetails() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [showdatatable, setShowtable] = useState(false);
  const [appointment, getappointment] = useState([]);
  const [formData, setFormData] = useState({
    facility: '',
    specialty: '',
    doctor: '',
    date: ''
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [bookedTimeSlots, setBookedTimeSlots] = useState([]);
  const timeSlots = [
    '9:00 AM-9:15 AM', '9:15 AM-9:30 AM', '9:30 AM-9:45 AM', '9:45 AM-10:00 AM',
    '10:00 AM-10:15 AM', '10:15 AM-10:30 AM', '10:30 AM-10:45 AM', '10:45 AM-11:00 AM',
    '11:00 AM-11:15 AM', '11:15 AM-11:30 AM', '11:30 AM-11:45 AM', '11:45 AM-12:00 AM',
    '1:00 PM-1:15 PM', '1:15 PM-1:30 PM', '1:30 PM-1:45 PM', '1:45 PM-2:00 PM',
    '2:00 PM-2:15 PM', '2:15 PM-2:30 PM', '2:30 PM-2:45 PM', '2:45 PM-3:00 PM',
    '3:00 PM-3:15 PM', '3:15 PM-3:30 PM', '3:30 PM-3:45 PM', '3:45 PM-4:00 PM',
    '4:00 PM-4:15 PM', '4:15 PM-4:30 PM', '4:30 PM-4:45 PM', '4:45 PM-5:00 PM',
    '5:00 PM-5:15 PM', '5:15 PM-5:30 PM'
  ];

  const handleViewAppointmentClick = () => {
    setShowtable(true);
    setShowAppointmentForm(false);
  };

  const handleCreateAppointmentClick = () => {
    setShowAppointmentForm(true);
    setShowtable(false);
  };

  useEffect(() => {
    if (showdatatable) {
      new DataTable('#reportsTable');
    }
  }, [showdatatable]);

  const handleViewTimeSlotsClick = () => {
    const { error } = appointmentSchema.validate(formData, { abortEarly: false });
    if (error) {
      const newErrors = {};
      error.details.forEach(detail => {
        newErrors[detail.path[0]] = detail.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      setShowTimeSlots(!showTimeSlots);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTimeSlotClick = (time) => {
    if (!isTimeSlotBookedOrPast(time)) {
      setSelectedTimeSlot(time);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = () => {
    setBookedTimeSlots([...bookedTimeSlots, { date: formData.date, timeSlot: selectedTimeSlot }]);
    localStorage.setItem('bookedTimeSlots', JSON.stringify([...bookedTimeSlots, { date: formData.date, timeSlot: selectedTimeSlot }]));
    submitAppointmentData();
    setShowModal(false);
  };

  const submitAppointmentData = () => {
    const appointmentDetails = {
      facility: formData.facility,
      specialty: formData.specialty,
      doctor: formData.doctor,
      date: formData.date,
      timeslot: selectedTimeSlot
    };

    fetch('http://localhost:3000/users/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointmentDetails)
    })
      .then(response => response.json())
      .then(appointment => {
        console.log('Success:', appointment);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const getFormattedDate = (daysToAdd) => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysToAdd);
    return targetDate.toISOString().split('T')[0];
  };

  const isTimeSlotBookedOrPast = (timeSlot) => {
    const currentDate = new Date();
    const [startHour, startMinutes] = timeSlot.split('-')[0].split(':');
    const slotDate = new Date(formData.date);
    slotDate.setHours(parseInt(startHour) % 12 + (timeSlot.includes('PM') ? 12 : 0), parseInt(startMinutes), 0, 0);

    return (
      bookedTimeSlots.some(slot => slot.date === formData.date && slot.timeSlot === timeSlot) || 
      (slotDate < currentDate && formData.date === getFormattedDate(0))
    );
  };

  const getButtonStyle = (timeSlot) => {
    if (bookedTimeSlots.some(slot => slot.date === formData.date && slot.timeSlot === timeSlot)) {
      return { backgroundColor: 'red', color: 'white' };
    }
    const currentDate = new Date();
    const [startHour, startMinutes] = timeSlot.split('-')[0].split(':');
    const slotDate = new Date(formData.date);
    slotDate.setHours(parseInt(startHour) % 12 + (timeSlot.includes('PM') ? 12 : 0), parseInt(startMinutes), 0, 0);

    if (slotDate < currentDate && formData.date === getFormattedDate(0)) {
      return { backgroundColor: 'gray', color: 'white' };
    }
    return {};
  };

  useEffect(() => {
    const storedBookedTimeSlots = localStorage.getItem('bookedTimeSlots');
    if (storedBookedTimeSlots) {
      setBookedTimeSlots(JSON.parse(storedBookedTimeSlots));
    }
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/users/speciality')
      .then(response => response.json())
      .then(speciality => setSpecialties(speciality))
      .catch(error => console.error('Error fetching specialties:', error));
  }, []);

  useEffect(() => {
    if (formData.specialty) {
      fetch(`http://localhost:3000/users/doctor?department=${formData.specialty}`)
        .then(response => response.json())
        .then(doctor => setDoctors(doctor))
        .catch(error => console.error('Error fetching doctors:', error));
    }
  }, [formData.specialty]);

  useEffect(() => {
    fetch('http://localhost:3000/users/appointment')
      .then(response => response.json())
      .then(appointment => getappointment(appointment))
      .catch(error => console.error('Error fetching tests:', error));
  }, []);

  return (
    <div className="teacher">
      <div className="teach">
        <h2>Appointment</h2><br />
        <div className="container">
          <button className="view" onClick={handleViewAppointmentClick}>View Appointment</button>
          <button className="view" onClick={handleCreateAppointmentClick}>Create Appointment</button>
        </div><br />
        
        {showAppointmentForm && (
          <div>
            <div className="row">
              <div className="col-md-2">
                <select name="facility" className="form-control" onChange={handleInputChange}>
                  <option value="" disabled selected hidden>Facility</option>
                  <option value="Rajagiri Hospital">Rajagiri Hospital</option>
                </select>
                {errors.facility && <div className="error">{errors.facility}</div>}
              </div>
              <div className="col-md-2">
                <select name="specialty" className="form-control" onChange={handleInputChange}>
                  <option value="" disabled selected hidden>Specialty</option>
                  {specialties.map(specialty => (
                    <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
                  ))}
                </select>
                {errors.specialty && <div className="error">{errors.specialty}</div>}
              </div>
              <div className="col-md-2">
                <select name="doctor" className="form-control" onChange={handleInputChange}>
                  <option value="" disabled selected hidden>Doctors</option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                  ))}
                </select>
                {errors.doctor && <div className="error">{errors.doctor}</div>}
              </div>
              <div className="col-md-2">
                <input type="date" name="date" id="mydate" min={getFormattedDate(0)}
                  max={getFormattedDate(365)} className="form-control" onChange={handleInputChange} />
                {errors.date && <div className="error">{errors.date}</div>}
              </div>
              <div className="col-md-2">
                <button className="slot" onClick={handleViewTimeSlotsClick}>
                  View
                </button>
              </div>
            </div>
            {showTimeSlots && (
              <div className="row">
                <div className="col">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className="time"
                      style={getButtonStyle(time)}
                      onClick={() => handleTimeSlotClick(time)}
                      disabled={isTimeSlotBookedOrPast(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Selected Time Slot</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to book the appointment at: {selectedTimeSlot}?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        
        {showdatatable && (
          <div className="table-container">
            <table id="reportsTable" className="display">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Facility</th>
                  <th>Speciality</th>
                  <th>Doctors</th>
                  <th>Date</th>
                  <th>Time slots</th>
                </tr>
              </thead>
              <tbody>
              {appointment.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.facility}</td>
                <td>{row.Speciality.name}</td>
                <td>{row.Doctor.name}</td>
                <td>{row.date}</td>
                <td>{row.timeslot}</td>
                
              </tr>
            ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function SchoolDetails() {
  return (
    <div>
      <TeacherDetails />
    </div>
  );
}

export default SchoolDetails;
