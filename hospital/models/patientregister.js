const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Doctor=require('./doctor');
const Prescription = require('./prescription');
const Appointment = require('./appointment');
const Patient = sequelize.define('Patient', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
      },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  marital:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  maidename:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  house_no:{
    type:DataTypes.NUMBER,
    allowNull:false,
  },
  city:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  country:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  city:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  other_locality:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  pin:{
    type:DataTypes.NUMBER,
    allowNull:false,
  },
  state:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  locality:{
    type:DataTypes.STRING,
    allowNull:false,
  },
 phone:{
    type:DataTypes.NUMBER,
    allowNull:false,
  },
  mobile:{
    type:DataTypes.NUMBER,
    allowNull:false,
  },
}, {
  createdAt: false,
  updatedAt: false,
  timestamps: false,
  tableName: 'patient'
});

Patient.hasMany(Prescription, { foreignKey: 'Patient_id', sourceKey: 'id'});

Prescription.belongsTo(Patient, { foreignKey: 'Patient_id', targetKey: 'id' });

module.exports = Patient;
