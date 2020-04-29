// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const databaseConnection = require("./factory/database-connection.js");
const CountryController = require("./controllers/countryController.js");

const countryController = new CountryController();
/**
 * App Variables
 */
const app = express();
// const port = process.env.PORT || "8000";
const port = "3000";

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
    )
});

// CREATE
app.post("/api/v1/countries", (req, res) => {
    res.status(200).send("Add a new country");
});

// UPDATE
app.put("/api/v1/countries", (req, res) => {
    res.status(200).send("Update a country");
});

// DELETE
app.delete("/api/v1/countries", (req, res) => {
    res.status(200).send("Delete a country");
});


/**
 * Listen REST Api 
 */
databaseConnection.initDb( function (err) {
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

