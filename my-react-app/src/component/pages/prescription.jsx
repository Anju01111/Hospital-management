import React, { useEffect, useState } from 'react';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

function Schools() {
  const [prescription, setprescription] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users/prescription')
      .then((response) => response.json())
      .then((prescription) => setprescription(prescription))
      .catch((error) => console.error('Error fetching tests:', error));
  }, []);

  const handleViewButtonClick = (event, view) => {
    event.preventDefault();
    const imageURL = `http://localhost:3000/${view}`;
    window.open(imageURL, '_blank');
  };

  useEffect(() => {
    if (prescription.length > 0) {
      const table = new DataTable('#reportsTable');
      return () => {
        table.destroy();
      };
    }
  }, [prescription]);

  return (
    <div className="prescriptions">
      <div className="prescription">
        <h2>Prescription</h2>
        <div className="table_container">
          <table id="reportsTable" className="display">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Doctor Name</th>
                <th>Patient Name</th>
                <th>Speciality Name</th>
                <th>Date</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {prescription.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.Doctor.name}</td>
                  <td>{row.Patient.fname}</td>
                  <td>{row.Speciality.name}</td>
                  <td>{row.date}</td>
                  <td>
                    <button className="view-button" onClick={(event) => handleViewButtonClick(event, row.view)}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Schools;
