const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
  // data: {
  //   type: Date,
  //   default: Date.now
  // }
})

module.exports = mongoose.model('Users', UserSchema)
