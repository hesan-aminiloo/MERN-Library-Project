const mongoose = require('mongoose');
const config = require('config');

const db_name = config.get('database.name');
const db_port = config.get('database.port');
const db_ip   = config.get('database.ip');

const uri = `mongodb://${db_ip}:${db_port}/${db_name}`;

mongoose
    .connect(uri, { useNewUrlParser: true })
    
    .then(() => {
        console.log('Database connection successful! \n');
    })

    .catch(err => {
        console.log('Failed to connect to database \n ')
        console.log(err);
    });


module.exports = mongoose;