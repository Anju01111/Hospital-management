const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Lab = sequelize.define('Lab', {
  id:{
    type:DataTypes.NUMBER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Order_no:{
    type:DataTypes.NUMBER,
    allowNull:false,
  },
  view:{
    type:DataTypes.STRING,
  }
}, {
  createdAt: false,
  updatedAt: false,
  timestamps: false,
  tableName: 'Lab'
});

module.exports = Lab;
