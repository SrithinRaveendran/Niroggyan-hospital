const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  availability: String, 
  imageUrl: String,
  description: String,
})

module.exports = mongoose.model('Doctor', doctorSchema)
