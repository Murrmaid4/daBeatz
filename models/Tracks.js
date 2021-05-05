const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tracks extends Model {}

Tracks.init(
    {

        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: false,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        popularity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duration_ms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        explicit: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        artists: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_artists: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        release_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        danceability: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        energy: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        key: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        loudness: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        mode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        speechiness: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        acousticness: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        instrumentalness: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        liveness: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        valence: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        tempo: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            unique: false,
        },
        
        time_signature: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        
       


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
