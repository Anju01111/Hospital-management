import React, { useEffect} from 'react';
import Chart from 'chart.js/auto'
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import {Link} from 'react-router-dom';
function MyComponent() {
    return (
      <div className="cards">
        <div className="card">
          <div className="card-content">
            <div className="card-name"></div>
          </div>
          <Link to="/student" className="link">
          <div className="icon-box">
          <i className="fa-solid fa-book"></i>
          </div>
          <div className="number">
              Reports  
            </div>
            </Link>
        </div>
        <div className="card">
                    <div className="card-content">
                        <div className="card-name"></div>
                    </div>
                    <Link to="/teacher" className="link">
                    <div className="icon-box">
                    <i className="fa-solid fa-calendar-check"></i>
                    </div>
                    <div className="number">Appointment
                        </div>
                        </Link>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-name"></div>
                    </div>
                    <Link to="/school" className="link">
                    <div className="icon-box">
                    <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="number">Profile
                        </div>
                        </Link>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-name"></div>
                    </div>
                    <Link to="/bill" className="link">
                    <div className="icon-box">
                    <i className="fa-solid fa-money-bill"></i>
                    </div>
                    <div className="number">Bill
                        </div>
                        </Link>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-name"></div>
                    </div>
                    <Link to="/Deposit" className="link">
                    <div className="icon-box">
                    <i class="fa-solid fa-money-bill-transfer"></i>
                    </div>
                    <div className="number">IPDeposit
                        </div>
                        </Link>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-name"></div>
                    </div>
                    <Link to="/receipt" className="link">                  <div className="icon-box">
                    <i class="fa-regular fa-receipt"></i>
                    </div>
                    <div className="number">Receipt
                        </div>
                        </Link>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-name"></div>
                    </div>
                    <Link to ="/prescription" className="link">
                    <div className="icon-box">
                    <i class="fa-solid fa-prescription"></i>  
                    </div>
                    <div className="number">Prescription
                        </div>
                        </Link>
                </div>
                
      </div>
  );
  };


export default MyComponent;
