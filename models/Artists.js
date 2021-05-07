const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Artists extends Model {}

Artists.init(
  {

    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    followers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genres: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    popularity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
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
