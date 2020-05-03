const mongoose = require('mongoose');
const countrySchema = require('../models/country.js');
const Country = mongoose.model('country', countrySchema, 'country');
const ResponseHandler = require('../helpers/ResponseHandler.js');

module.exports = class CountryService {

    /**
     * Country service constructor
     */
    constructor() {
        this.responseHandler = new ResponseHandler();
    }
    
    /**
     * createCountry - Function to save a country in database
     * 
     * @param {string} name 
     * @param {string} code 
     */
    createCountry(name, code) {
        return new Promise((resolve, reject) => {
            new Country({
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

    /**
     * readCountries - Function to find all countries in database
     */
    readCountries() {
        return new Promise((resolve, reject) => {
            Country.find()
            .then(countries => { 
                resolve(countries);
            })
            .catch(error => {
                reject(error);
            });
        });
    }

    /**
     * updateCountry - Function to update a country with some specific id
     * 
     * @param {string} id 
     * @param {*} newData
     */
    updateCountry(id, newData) {
        return new Promise((resolve, reject) => {
            Country.updateMany({
                _id: id,
            }, newData)
            .then(() => {
                resolve(this.responseHandler.successResponseFormatter(`Country with id ${id} was successfully updated.`));
            })
            .catch((error) => {
                console.log("updateCountry error", error);
                reject(this.responseHandler.errorResponseFormatter(`Country with id ${id} not exist in our system.`));
            });
        });
    }

    /**
     * deleteCountry - Function to delete a country with some id
     * 
     * @param {string} id 
     */
    deleteCountry(id) {
        return new Promise((resolve, reject) => {
            Country.findById(id)
            .deleteOne()
            .then(res => {
                if (res.deletedCount == 0 ) {
                    return resolve(this.responseHandler.errorResponseFormatter(`Country with id ${id} does not exist in our system.`));
                }
                return resolve(this.responseHandler.successResponseFormatter(`Country with id ${id} was successfully deleted.`));
            })
            .catch(error => {
                reject(this.responseHandler.errorResponseFormatter(error.message));
            });
        });
    }

}