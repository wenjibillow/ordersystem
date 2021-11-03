const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Products', ProductSchema)
