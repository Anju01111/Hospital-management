import React from 'react';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
        <Link to="/dashboard">
            <i className="fa-solid fa-house"></i>
            <div>Dashboard</div>
            </Link>
        </li>
        <li>
          <Link to="/student">
            <i className="fa-solid fa-book"></i>
            <div>Reports</div>
            </Link>
        </li>
        <li>
          <Link to="/teacher">
          <i class="fa-solid fa-calendar-check"></i>
            <div>Appointment</div>
            </Link>
        </li>
        <li>
          <Link to="/school">
          <i class="fa-solid fa-user"></i>
            <div>Profile</div>
            </Link>
        </li>
        <li>
          <Link to="/bill">
          <i class="fa-solid fa-money-bills"></i>
            <div>Bill</div>
            </Link>
        </li>
        <li>
          <Link to="/deposit">
          <i class="fa-solid fa-money-bill-transfer"></i>
            <div>IP Deposit</div>
            </Link>
        </li>
        <li>
          <Link to="/receipt">
          <i class="fa-solid fa-receipt"></i>
            <div>Receipt</div>
            </Link>
        </li>
        <li>
          <Link to="/prescription">
          <i class="fa-solid fa-prescription"></i>
            <div>Prescription</div>
            </Link>
        </li>
        </ul>
    </div>
  );
}

export default Sidebar;
