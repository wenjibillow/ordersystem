const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

//GET BACK ALL THE PRODUCTS
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    res.json({ message: err })
  }
})

//SPECIFIC PRODUCT
router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
    res.json(product)
  } catch (err) {
    res.json({ message: err })
  }
})

//SUBMITS A PRODUCT
router.post('/', async (req, res) => {
  const product = new Product(req.body)

  try {
    const savedProduct = await product.save()
    res.json(savedProduct)
  } catch (err) {
    res.json({ message: err })
  }
})

//DELETE PRODUCT
router.delete('/:productId', async (req, res) => {
  try {
    const removedProduct = await Product.deleteOne({
      _id: req.params.productId
    })
    res.json(removedProduct)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
