const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tracks extends Model {}

Tracks.init(
    {

    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tracks',
  }

);

module.exports = Tracks;
