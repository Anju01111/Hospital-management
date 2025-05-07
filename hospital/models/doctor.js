const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Prescription = require('./prescription');
const Appointment = require('./appointment');
const Doctor = sequelize.define('Doctor', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
      },
  name: {
    type: DataTypes.STRING,
  },
  speciality_id: {
    type: DataTypes.INTEGER,

  },
  phone_no: {
    type: DataTypes.STRING,
  },
}, {
  createdAt: false,
  updatedAt: false,
  timestamps: false,
  tableName: 'hospitalapp_doctor'
});

Doctor.hasMany(Prescription, { foreignKey: 'Doctor_id', sourceKey: 'id' });

Prescription.belongsTo(Doctor, {
  foreignKey: 'Doctor_id',
  sourceKey: 'id'
});
Doctor.hasMany(Appointment, { foreignKey: 'doctor', sourceKey: 'id' });

Appointment.belongsTo(Doctor, {
  foreignKey: 'doctor',
  sourceKey: 'id'
});


module.exports = Doctor;
