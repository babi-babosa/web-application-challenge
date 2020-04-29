const mongoose = require('mongoose');
const countrySchema = require('../models/country.js');
const Country = mongoose.model('country', countrySchema, 'country');

module.exports = class CountryService {
    constructor() {
    }
    
    createCountry(name, code) {
        return new Promise(async (resolve, reject) => {
            await new Country({
                name,
                code
            }).save()
            .then(country => {
                resolve(country);
            })
            .catch(error => {
                reject(error);
            });
        });
    }

    readCountries() {
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

    updateCountry(id, name, code) {
        return new Promise(async (resolve, reject) => {
            await Country.update({
                _id: id,
            }, {
                name,
                code,
            })
            .then(res => {
                if (res.n == 0 ) {
                    return resolve({
                        message: `Country with id ${id} does not exist in our system`
                    });
                }
                resolve({
                    message: `Country with id ${id} was successfully updated`
                });
            })
            .catch(error => {
                reject({
                    message: error.message
                });
            });
        });
    }

    deleteCountry(id) {
        return new Promise(async (resolve, reject) => {
            await Country.findById(id).deleteOne()
            .then(res => {
                if (res.deletedCount == 0 ) {
                    return resolve({
                        message: `Country with id ${id} does not exist in our system`
                    });
                }
                resolve({
                    message: `Country with id ${id} was successfully deleted`
                });
            })
            .catch(error => {
                reject(error);
            });
        });
    }

}