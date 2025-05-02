const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hospital', 'root', 'Rondabyrne@1111', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
