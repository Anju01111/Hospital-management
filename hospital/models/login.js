const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Login = sequelize.define('Login', {
  id:{
    type:DataTypes.NUMBER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  Username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
  }
}, {
  createdAt: false,
  updatedAt: false,
  timestamps: false,
  tableName: 'Lab'
});

module.exports = Login;
