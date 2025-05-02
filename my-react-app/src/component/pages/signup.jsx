

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handlePatientClick = () => {
    navigate('/patient');
  };

  const handleDoctorClick = () => {
    navigate('/doctor');
  };
  return (
    <signup>
    <div className="sign-page">
      <h1>Welcome! Are you a Doctor or a Patient?</h1>
      <div className="button-container">
        <button onClick={handlePatientClick} className="patient-button">Patient</button>
        <button onClick={handleDoctorClick} className="doctor-button">Doctor</button>
      </div>
    </div>
    </signup>
  );
};

export default LandingPage;

