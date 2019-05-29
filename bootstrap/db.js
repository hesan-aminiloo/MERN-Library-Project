const Sequelize = require('sequelize');
const config = require('config');

const db        = config.get('database.name');
const user      = config.get('database.user');
const pass      = config.get('database.pass');
const host      = config.get('database.ip');
const port      = config.get('database.port');
const dialect   = config.get('database.driver');

const sequelize = new Sequelize(db, user, pass, {
    host,
    port,
    dialect,
    // Connection pooling
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection successful! \n');
    })
    .catch(err => {
        console.log(err);
        console.log('Error connecting to database! \n');
    });


module.exports = sequelize;