import React, { useState,useEffect } from 'react';
import './sign.css';
import axios from 'axios';

const DoctorRegistration = () => {
  const [form, setForm] = useState({
    username: '',
    speciality: '',
    phone: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [specialties, setSpecialties] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formBody = {
        ...form,
        usertype: 'doctor',
      };

      console.log('Form submitted:', form);
      const response = await axios.post('http://127.0.0.1:8000/api/register/', formBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response.data); // Log the response data

      // Handle successful response
      console.log('Registration successful');
      setError(null)
    } catch (error) {
      setError(error);
    }
  };
  
  useEffect(() => {
    fetch('http://localhost:3000/users/speciality')
      .then(response => response.json())
      .then(speciality => setSpecialties(speciality))
      .catch(error => console.error('Error fetching specialties:', error));
  }, []);
   

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="doctor">
            <h2>Doctor Registration</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="specialty" className="form-label">Speciality</label>
              <select
                className="form-control"
                id="speciality"
                name="speciality"
                value={form.speciality}
                onChange={handleChange}
                required>
                <option value="" disabled selected hidden>Specialty</option>
                {specialties.map(specialty => (
                  <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            {error && <p className="error">{JSON.stringify(error)}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegistration;
