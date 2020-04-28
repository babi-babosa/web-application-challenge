// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");

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


const mongoose = require('mongoose')
const countrySchema = require('./models/country.js')
const Country = mongoose.model('country', countrySchema, 'country')
const configs = require('./configs/config.json');
const connector = mongoose.connect(configs.mongoDBConnection, {useNewUrlParser: true , useUnifiedTopology: true });

async function createCountry(name, code) {
  return new Country({
    name,
    code
  }).save()
}

async function getCountries() {
  return await Country.find()
}

/**
 * CRUD - For list of countries (list is public, others are protected with basic authentication)
 */
// LIST
app.get("/api/v1/countries", async (req, res) => {
    await createCountry("Portugal", "PT");
    let countries = await connector.then(async () => {
        return getCountries()
    })
    console.log(countries);
    res.status(200).send(countries);
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
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});