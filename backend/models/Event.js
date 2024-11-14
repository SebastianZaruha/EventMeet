const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  date: { type: DataTypes.DATE, allowNull: false },
  tags: { type: DataTypes.ARRAY(DataTypes.STRING) },
  attendeesCount: { type: DataTypes.INTEGER, defaultValue: 0 },
});

module.exports = Event;
