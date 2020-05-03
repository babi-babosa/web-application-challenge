const express = require("express");
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const databaseConnection = require("./factory/database-connection.js");
const CountryController = require("./controllers/countryController.js");
const configs = require('./configs/config.json');
const cors = require('cors');

const countryController = new CountryController();

/**
 * App Variables
 */
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = configs.port || "8000";
const basicAuthentication = basicAuth({
    authorizer: basicAuthCheck,
    unauthorizedResponse: unauthorizedResponse
});

/**
 * Aux functions
 */

/**
 * 
 * @param {*} username 
 * @param {*} password 
 */
function basicAuthCheck(username, password) {
    const userMatches = basicAuth.safeCompare(username, configs.basicAuthentication.username);
    const passwordMatches = basicAuth.safeCompare(password, configs.basicAuthentication.password);
    return userMatches & passwordMatches
}

function unauthorizedResponse(req) {
    return req.auth ? 'Wrong credentials' : 'No credentials provided'
}

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});

/**
 * CRUD - For list of countries (list is public, others are protected with basic authentication)
 */
// LIST
app.get("/api/v1/countries", (req, res) => {
    countryController.listAction(req, res)
    .then(
        payload => res.json(payload)
    )
    .catch(
        error => res.status(400).json(error)
    );
});

// CREATE
app.post("/api/v1/countries", basicAuthentication, (req, res) => {
    countryController.createAction(req, res)
    .then(
        payload => res.json(payload)
    )
    .catch(
        error => res.status(400).json(error)
    );
});

// UPDATE
app.put("/api/v1/countries/:id", basicAuthentication, (req, res) => {
    countryController.updateAction(req, res)
    .then(
        payload => res.json(payload)
    )
    .catch(
        error => res.status(error.errorStatus).json(error.response)
    );
});

// DELETE
app.delete("/api/v1/countries/:id", basicAuthentication, (req, res) => {
    countryController.deleteAction(req, res)
    .then(
        payload => res.json(payload)
    )
    .catch(
        error => res.status(400).json(error)
    );
});

/**
 * Listen REST Api 
 */
databaseConnection.initDb(function (err) {
    if (err) {
        throw err;
    } else {
        app.listen(port, function (err) {
            if (err) {
                console.log("Error", err);
                throw err;
            } else {
                console.log(`Listening to requests on http://localhost:${port}`);
            }
        }); 
    }    
});

