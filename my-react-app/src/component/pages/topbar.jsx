import React from 'react';
import user from '../../images/user.jpeg';
import logo from '../../images/logo.png';
function Topbar() {
  return (
   
      <div className="topbar">
        <div className="logo">
        <img src={logo} alt="" /> 
        </div>
        <div className="person">
        <i className="fa-regular fa-user"></i>
       <div><h1>Welcome</h1>
        <h3>Ms.Anjali Mohan</h3></div>
        </div>
        <i className="fa-regular fa-bell"></i>
        <div className="user">
       <img src={user} alt="" />
        </div>
      </div>
  );
}

export default Topbar;
