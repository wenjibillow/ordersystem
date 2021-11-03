const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

//IMPORT ROUTES
const usersRoute = require('./routes/users')
const productsRoute = require('./routes/products')

//USE MIDDELWARE
app.use('/users', usersRoute)
app.use('/products', productsRoute)

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on HOME!')
})

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log('connected to DB!')
)

//HOW TO LESTIEN TO THE PORT
app.listen(3001)
