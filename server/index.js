const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err))

// Routes
const doctorRoutes = require('./routes/DoctorRoutes')
app.use('/api/doctors', doctorRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
