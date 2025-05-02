import React, { useState,useEffect } from 'react';
import DataTable from 'datatables.net-dt';
import "datatables.net-dt/css/dataTables.dataTables.min.css"
function App() {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    if (showTable) {
      let table = new DataTable('#reportsTable');  

    }
  }, [showTable,data]);
  
  useEffect(() => {
      fetch('http://localhost:3000/users/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching tests:', error));

  }, []);
  
  const handleLabReportsClick = () => { 
    setShowTable(true);
  };
  const handleViewButtonClick=(event,view)=>{
    event.preventDefault();
    const imageURL=`http://localhost:3000/${view}`
    window.open(imageURL,'_blank');
  }

return (
<div className="students">
  <div className="student">
    <h2>Reports</h2><br/>
    <div className="container">
        <button className="button" onClick={handleLabReportsClick}>Lab Reports</button>
        <button className="button">Diagnostic Reports</button>
        <button className="button">Discharge Summary</button>
        {showTable && (
        <div className="table-container">
        <table id="reportsTable" className="display">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Order.No</th>
              <th>Test Name</th>
              <th>Date</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.Order_no}</td>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td><button className="view-button" onClick={(event)=>handleViewButtonClick(event,row.view)}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        )}
    </div>
  </div>
</div>
)
}

export default App
