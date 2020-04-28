const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  surname: {
    type: String,
    required: [true, 'Surname is required']
  },
  country: {
    type: String,
    required: [true, 'Country is required']
  },
  birthdate: {
    type: Date,
    required: [true, 'Birthdate is required. Please insert a new one']
  },
  age: {
    type: Number,
    required: false
  }
})

module.exports = userInfoSchema