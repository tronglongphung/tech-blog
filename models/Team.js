const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}

// Remember id, created_date, updated_date columns are created for you.
Team.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        hooks: {},
        sequelize,
        freezeTableName: true,
        modelName: 'team',
    }
);

module.exports = Team;