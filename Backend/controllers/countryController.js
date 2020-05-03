const CountryService = require('../services/countryService.js');

module.exports = class CountryController {

    /**
     * CountryController constructor 
     * 
     * @param {*} countryService - if there's no countryService inserted when CountryController is inited, by default it will be a new CountryService()
     */
    constructor(countryService = new CountryService()) {
        this.countryService = countryService;
    }

    /**
     * listAction - Function to list all countryElements
     * 
     * @param {*} req 
     * @param {*} res 
     */
    listAction(req, res){
        return new Promise (async (resolve, reject) => {
            try {
                return resolve(await this.countryService.readCountries());
            } catch (error) {
                return reject(error);
            }
        })
    }

    /**
     * createAction - Function to create a new country with inputed data
     * 
     * @param {*} req 
     * @param {*} res 
     */
    createAction(req, res) {
        return new Promise (async (resolve, reject) => {
            try {
                return resolve(await this.countryService.createCountry(req.body.name, req.body.code));
            } catch (error) {
                return reject(error);
            }
        });
    }

    /**
     * updateAction - Function to update some country indicated by the user throught it's id 
     * 
     * @param {*} req 
     * @param {*} res 
     */
    updateAction(req, res) {
        return new Promise (async (resolve, reject) => {
            try {
                return resolve(await this.countryService.updateCountry(req.params.id, req.body));
            } catch (error) {
                return reject(error);
            }
        });
    }

    /**
     * deleteAction - Function to delete a specific country, indicated by it's id
     * 
     * @param {*} req 
     * @param {*} res 
     */
    deleteAction(req, res) {
        return new Promise (async (resolve, reject) => {
            try {
                return resolve(await this.countryService.deleteCountry(req.params.id));
            } catch (error) {
                return reject(error);
            }
        });
    }
}