const CountryService = require('../services/countryService.js');

module.exports = class CountryController {
    constructor(countryService) {
        this.countryService = countryService || new CountryService();
    }

    listAction(req, res){
        return new Promise (async (resolve, reject) => {
            try {
                return resolve(await this.countryService.getCountries());
            } catch (error) {
                return reject(error);
            }
        })
    }
}