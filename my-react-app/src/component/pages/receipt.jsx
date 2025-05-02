import React, { useEffect,useState } from 'react';
import DataTable from 'datatables.net-dt';
import "datatables.net-dt/css/dataTables.dataTables.min.css"
function App() {
  const[receipt,setReceipt]=useState([])
  const[showTable,setShowTable]=useState(false)
  useEffect(() => {
    if (showTable) {
      let table = new DataTable('#reportsTable');
    }
  }, [showTable]);
  useEffect(() => {
    fetch('http://localhost:3000/users/receipt')
      .then(response => response.json())
      .then(receipt => setReceipt(receipt))
      .catch(error => console.error('Error fetching tests:', error));
  }, []);
  
  
  const handleReceiptClick= () => { 
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
    <h2>Receipt</h2><br/>
    <div className="container">
        <button className="button"  onClick={handleReceiptClick}>OP WalleTree Deposit</button>
        <button className="button">IP Deposit</button>
        <button className="button">OP Deposit Refund</button>
        <button className="button">IP Deposit Refund</button>
        {showTable && (
        <div className="table-container">
         <table id="reportsTable" className="display">
          <thead>
            <tr>
              <th>Sr.NO</th>
              <th>Bill No</th>
              <th>Bill Date</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
          {receipt.map((row, index) => (
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

