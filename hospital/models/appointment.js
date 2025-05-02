const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Patient = require('./patient');
const Doctor = require('./doctor');
const Appointment = sequelize.define('Appointment', {
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true 
  },
  facility: {
    type: DataTypes.STRING,
  },
  specialty: {
    type: DataTypes.NUMBER,
  },
 
  doctor: {
    type: DataTypes.NUMBER,
  },
  date: {
    type: DataTypes.DATE,
  },
  timeslot:{
    type:DataTypes.STRING,
    
  }

}, {
  createdAt: false,
  updatedAt: false, 
  tableName: 'appointment',
},);





module.exports = Appointment;
