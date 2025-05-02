import React, { useEffect } from 'react';
import DataTable from 'datatables.net-dt';
import "datatables.net-dt/css/dataTables.dataTables.min.css"
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Chart from 'chart.js/auto'

function App() {
  return (
<div className="deposits">
  <div className="deposit">
    <h2>IP Deposit </h2><br/>
    <form>
    <div className="row">
    <div className="col-md-2">
      <div className="form-group">
      <label htmlFor value="number">IP Number</label>
   <input type="text" className="form-control"></input>
   </div>
   </div>
   <div className="col-md-2">
    <div className="form-group">
   <label htmlFor value="amount">Amount</label>
   <input type="text" className=" form-control"></input><br/><br/>
   </div>
   </div>
   </div>
   <div className="col-md-2">
    <input type="button" value="Pay Now" className="pay"></input>
   </div>
   </form>
  </div>
</div>
)
}

export default App
