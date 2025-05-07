const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Doctor=require('./doctor');
const Prescription = require('./prescription');
const Appointment = require('./appointment');
const Speciality = sequelize.define('Speciality', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
      },
 
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  createdAt: false,
  updatedAt: false,
  timestamps: false,
  tableName: 'speciality',
});
Speciality.hasMany(Doctor, { foreignKey: 'speciality_id', sourceKey: 'id' });
Speciality.hasMany(Prescription, { foreignKey: 'Speciality_id', sourceKey: 'id'});
Doctor.belongsTo(Speciality, {
    foreignKey: 'speciality_id',
    sourceKey: 'id'
  });
  
Prescription.belongsTo(Speciality, {
    foreignKey: 'Speciality_id',
    sourceKey: 'id'
  });
    
  Speciality.hasMany(Appointment, { foreignKey: 'specialty', sourceKey: 'id' });

  Appointment.belongsTo(Speciality, {
    foreignKey: 'specialty',
    sourceKey: 'id'


  });
  


module.exports = Speciality;
