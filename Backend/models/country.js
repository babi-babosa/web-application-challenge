const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  code: {
    type: String,
    required: [true, 'Code is required']
  }
})

module.exports = countrySchema