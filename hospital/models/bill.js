const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const bill= sequelize.define('bill', {
  id:{
    type:DataTypes.NUMBER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
 Bill_No : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Bill_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  view:{
    type:DataTypes.TEXT,
    allowNull:false,
  }
}, {
  createdAt: false,
  updatedAt: false,
  timestamps: false,
  tableName: 'bill'
});

module.exports = bill;
