const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../data/sequelize');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    login: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize,
    modelName: 'User',
});

module.exports = { User };


