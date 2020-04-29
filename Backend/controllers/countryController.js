const CountryService = require('../services/countryService.js');

module.exports = class CountryController {
    constructor(countryService) {
        this.countryService = countryService || new CountryService();
    }

    listAction(req, res){
        return new Promise (async (resolve, reject) => {
            try {
                return resolve(await this.countryService.readCountries());
            } catch (error) {
                return reject(error);
            }
        })
    }

    createAction(req, res) {
        return new Promise (async (resolve, reject) => {
            try {
                return resolve(await this.countryService.createCountry(req.body.name, req.body.code));
            } catch (error) {
                return reject(error);
            }
        });
    }

    updateAction(req, res) {
        return new Promise (async (resolve, reject) => {
            try {
                return resolve(await this.countryService.updateCountry(req.body.id, req.body.name, req.body.code));
            } catch (error) {
                return reject(error);
            }
        });
    }

    deleteAction(req, res) {
        return new Promise (async (resolve, reject) => {
            try {
                return resolve(await this.countryService.deleteCountry(req.body.id));
            } catch (error) {
                return reject(error);
            }
        });
    }
}