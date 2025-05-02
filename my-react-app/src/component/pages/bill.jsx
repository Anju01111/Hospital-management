import React, { useEffect,useState } from 'react';
import DataTable from 'datatables.net-dt';
import "datatables.net-dt/css/dataTables.dataTables.min.css";
function App() {
  const [bill, setbill] = useState([]);
  const[showTable,setShowTable]=useState(false);
  useEffect(() => {
    if (showTable) {
      let table = new DataTable('#reportsTable');
    }
  }, [showTable,bill]);

  useEffect(() => {
    fetch('http://localhost:3000/users/bill')
      .then(response => response.json())
      .then(bill => setbill(bill))
      .catch(error => console.error('Error fetching tests:', error));
  }, []);
  
  const handleOPDClick = () => { 
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
    <h2>Bill</h2><br/>
    <div className="container">
        <button className="button" onClick={handleOPDClick}>OPD Bill</button>
        <button className="button">IPD Bill</button>
        {showTable && (
        <div className="table-container">
        <table id="reportsTable" className="display">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Bill No</th>
              <th>Bill Date</th>
              <th>view</th>
            </tr>
          </thead>
          <tbody>
            {bill.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.Bill_No}</td>
                <td>{row.Bill_date}</td>
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
