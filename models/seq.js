const dbconfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        port: dbconfig.port,
        operatorAlias: false,
        pool: {
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            Idle: dbconfig.pool.idle
        },
    }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define semua models dalam aplikasi
db.quizzes = require('./quiz')(sequelize, Sequelize);
module.exports = db;