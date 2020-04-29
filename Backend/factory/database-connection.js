const mongoose = require('mongoose');
const configs = require('../configs/config.json');
const countrySchema = require('../models/country.js');

let _dbConnection;

function initDb(callback) {

    if (_dbConnection) {
        console.warn("Trying to init MongoDB again.");
        return callback(null, _dbConnection);
    }

    mongoose.connect(configs.mongoDBConnection, {
        useNewUrlParser: true , 
        useUnifiedTopology: true,
    })
    .then(
        (connection) => { 
            console.log("Database connected with success");
            _dbConnection = connection;
            _dbConnection.model('Country', countrySchema);
            return callback(null, _dbConnection);
        },
        err => { 
            console.log("Database connection error :::: ", err.message);
            return callback(err);
        }
    );
}

module.exports = {
    initDb
};