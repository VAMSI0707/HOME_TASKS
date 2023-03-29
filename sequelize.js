const { Sequelize } = require('sequelize');
//postgres://user:password@localhost:5432/database
const sequelize = new Sequelize('Users','postgres','vs7702',{
    host:'localhost',
    dialect:'postgres',
    logging:false
});
module.exports = sequelize;