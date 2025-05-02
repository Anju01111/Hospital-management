import React, { useEffect,useState } from 'react';
function Schools() {
  const[patient,setpatient]=useState([])
  useEffect(() => {
    fetch('http://localhost:3000/users/patient')
      .then(response => response.json())
      .then(patient => setpatient(patient))
      .catch(error => console.error('Error fetching tests:', error));
  }, []);
  
  return (
    <div className="appointments">
      <div className="appointment">
        <h2>Profile</h2>
            <h6>Patient Details</h6>
        <form>
          <div className="form-group">
          <div className="row">
          <div className="col-md-4">
              <label htmlFor="">First Name</label>
          <input type="text" className="form-control" id="firstname" value={patient.fname}></input>
          </div>
          <div className="col-md-4">
            <label htmlFor=" ">Middle Name</label>
          <input type="text" className="form-control" id="lastname" value={patient.mname}></input>
          </div>
          <div className="col-md-4">
            <label htmlFor="">Last Name</label>
          <input type="text" className="form-control" id="lastname" value={patient.lname}></input><br/>
          </div>
          <div className="col-md-4">
          <label htmlFor="">Gender</label>
          <input type="text" className="form-control" id="firstname" value={patient.gender}></input>
          </div>
          <div className="col-md-4">
            <label htmlFor=" ">Date of Birth</label>
          <input type="Date" className="form-control" id="lastname" value={patient.dob}></input>
          </div>
          <div className="col-md-4">
            <label htmlFor="">Age</label>
          <input type="text" className="form-control" id="lastname" value={patient.age}></input><br/>
          </div>
          <div className="col-md-4">
            <label htmlFor=" ">Marital Status</label>
          <input type="text" className="form-control" id="lastname" value={patient.marital}></input>
          </div>
          <div className="col-md-8">
            <label htmlFor="">Mothers's Maiden Name</label>
          <input type="text" className="form-control" id="lastname" value={patient.maidename}></input><br/>
          </div>
          </div>
        </div>
        <div className="radio">
          <input type="radio" name="radio" />
          <label className="container">
          Father
          </label>
          <input type="radio" name="radio" />
          <label className="container">
          Spouse
         </label>
         </div>
          </form>
          </div>
      <div className="prescription">
      <h2>Profile</h2>
      <h6>Address Details</h6>
      <div className="row">
          <div className="col-md-4">
            <label htmlFor=" ">House/Flat No</label>
          <input type="text" className="form-control" id="lastname" value={patient.house_no}></input>
          </div>
          <div className="col-md-4">
            <label htmlFor="">Country</label>
          <input type="text" className="form-control" id="lastname" value={patient.country}></input>
          </div>
          <div className="col-md-4">
            <label htmlFor="">City</label>
          <input type="text" className="form-control" id="lastname" value={patient.city}></input><br/>
          </div>
          <div className="col-md-4">
            <label htmlFor=" ">Other Locality</label>
          <input type="text" className="form-control" id="lastname" value={patient.other_locality}></input>
          </div>
          <div className="col-md-4">
            <label htmlFor="">Pin</label>
          <input type="text" className="form-control" id="lastname" value={patient.pin}></input>
          </div>
          <div className="col-md-4">
            <label htmlFor="">State</label>
          <input type="text" className="form-control" id="lastname" value={patient.useState}></input><br/>
          </div>
          <div className="col-md-4">
            <label htmlFor="">Locality</label>
          <input type="text" className="form-control" id="lastname" value={patient.locality}></input>
          </div>
          <div className="col-md-8">
            <label htmlFor="">E-Mail</label>
          <input type="text" className="form-control" id="lastname" value={patient.email}></input><br/>
          </div>
          <div className="col-md-4">
            <label htmlFor="">Telephone</label>
          <input type="text" className="form-control" id="lastname" value={patient.phone}></input>
          </div>
          <div className="col-md-4">
            <label htmlFor="">Mobile</label>
          <input type="text" className="form-control" id="lastname" value={patient.mobile}></input>
          </div>
          </div>
        </div>
    </div>
  );
} 
export default Schools;

