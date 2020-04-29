const mongoose = require('mongoose');
const countrySchema = require('../models/country.js');
const Country = mongoose.model('country', countrySchema, 'country');
const ErrorResponse = require('../helpers/errorResponse.js');

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

    updateCountry(id, newData) {
        return new Promise(async (resolve, reject) => {
            await Country.updateMany({
                _id: id,
            }, newData)
            .then(res => {
                resolve({
                    message: `Country with id ${id} was successfully updated`
                });
            })
            .catch(error => {
                console.log("Errror", error)
                reject(
                {
                    errorStatus: 400,
                    response: {
                        error_message: `Country with id ${id} not exist in our system`
                    }
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