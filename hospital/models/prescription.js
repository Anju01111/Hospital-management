const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Patient = require('./patient');
const Doctor = require('./doctor');

console.log('This is Doctor Model')

console.log(Doctor)
const Prescription = sequelize.define('Prescription', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
      },
  Doctor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,

   
  },
  Speciality_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  view:DataTypes.STRING
}, {
  createdAt: false,
  updatedAt: false,
  timestamps: false,
  tableName: 'prescription'
});
console.log('Doctor model')
console.log(Doctor)


module.exports = Prescription;
