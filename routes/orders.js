const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

//GET BACK ALL THE ORDERS
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (err) {
    res.json({ message: err })
  }
})

//GET A SPECIFIC ORDER WITH USER ID
router.get('/:userId', async (req, res) => {
  try {
    const bar = req.params.userId
    const order = await Order.find({ userId: bar })
    res.json(order)
  } catch (err) {
    res.json({ message: err })
  }
})

//GET A SPECIFIC ORDER WITH USER ID AND PRODUCT ID
router.get('/:userId/:productId', async (req, res) => {
  try {
    const bar = req.params.userId
    const foo = req.params.productId
    const order = await Order.find({
      $or: [{ userId: bar }, { productId: foo }]
    })
    res.json(order)
  } catch (err) {
    res.json({ message: err })
  }
})

//SUBMIT ORDER WITH PRODUCT ID
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body)
    await order.save()
    res.status(201).json({ success: true, data: order })
  } catch (err) {
    res.status(400).json({ success: false, message: err.message })
  }
})

//DELETE ORDER
router.delete('/:orderId', async (req, res) => {
  try {
    const removedOrder = await Order.deleteOne({ _id: req.params.orderId })
    res.json(removedOrder)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
