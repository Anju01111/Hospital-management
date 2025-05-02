import React, { useState } from 'react';
import './sign.css';
import axios from 'axios';
const RegistrationForm = () => {
  const [form, setForm] = useState({
    username: '',
    lname: '',
    mname:'',
    gender: '',
    email: '',
    dob: '',
    age: '',
    marital: '',
    maidename: '',
    house_no: '',
    country: '',
    city: '',
    other_locality: '',
    pin: '',
    state: '',
    locality: '',
    phone: '',
    mobile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  const [error, setError] = useState(null);
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const formBody = {
        ...form,
        usertype: 'patient',
      };

      console.log('Form submitted:', form);
      const response = await axios.post('http://127.0.0.1:8000/api/register/', formBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response.data);
      console.log('Registration successful');
    } catch (error) {
      setError({ message: error.message });
    }
};

  return (
    <div className="container mt-5">
      <div className="patient">
      <h2>Patient Registration Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="username">First Name</label>
            <input type="text" className="form-control" id="username" name="username" value={form.username} onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="mname">Middle Name</label>
            <input type="text" className="form-control" id="mname" name="mname" value={form.mname} onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="lname">Last Name</label>
            <input type="text" className="form-control" id="lname" name="lname" value={form.lname} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="gender">Gender</label>
            <select className="form-control" id="gender" name="gender" value={form.gender} onChange={handleChange} required>
              <option value="">Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" className="form-control" id="dob" name="dob" value={form.dob} onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" id="age" name="age" value={form.age} onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="maritalStatus">Marital Status</label>
            <select className="form-control" id="marital" name="marital" value={form.maritalStatus} onChange={handleChange} required>
              <option value="">Choose...</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="widowed">Widowed</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="maidenName">Maiden Name</label>
            <input type="text" className="form-control" id="maidename" name="maidename" value={form.maidenName} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="houseNo">House No</label>
            <input type="text" className="form-control" id="house_no" name="house_no" value={form.houseNo} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="country">Country</label>
            <input type="text" className="form-control" id="country" name="country" value={form.country} onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <input type="text" className="form-control" id="state" name="state" value={form.state} onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control" id="city" name="city" value={form.city} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="otherLocality">Other Locality</label>
            <input type="text" className="form-control" id="other_locality" name="other_locality" value={form.otherLocality} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="locality">Locality</label>
            <input type="text" className="form-control" id="locality" name="locality" value={form.locality} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="pin">PIN</label>
            <input type="text" className="form-control" id="pin" name="pin" value={form.pin} onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="mobile">Mobile</label>
            <input type="text" className="form-control" id="mobile" name="mobile" value={form.mobile} onChange={handleChange} required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="mobile">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={handleChange} required />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Register</button>
        {error && <p className="error">{JSON.stringify(error)}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
