const express = require('express')
const router = express.Router()
const User = require('../models/User')

//GET BACK ALL THE USERS
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.json({ message: err })
  }
})

//SPECIFIC USER
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch (err) {
    res.json({ message: err })
  }
})

//SUBMITS A USER
router.post('/', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address
  })

  try {
    const savedUser = await user.save()
    res.json(savedUser)
  } catch (err) {
    res.json({ message: err })
  }
})

//DELETE USER
router.delete('/:userId', async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId })
    res.json(removedUser)
  } catch (err) {
    res.json({ message: err })
  }
})

//UPDATE A USER
router.patch('/:userId', async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      { $set: { lastName: req.body.lastName } }
    )
    res.json(updatedUser)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
