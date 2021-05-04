const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Artists extends Model {}

Artists.init(
  {

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'artists',
  }
  
);

module.exports = Artists;
