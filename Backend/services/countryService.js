const mongoose = require('mongoose');
const countrySchema = require('../models/country.js');
const Country = mongoose.model('country', countrySchema, 'country');

module.exports = class CountryService {
    constructor() {
    }

    getCountries() {
        return new Promise( (resolve, reject) => {
            Country.find()
            .then(countries => { 
                resolve(countries);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}