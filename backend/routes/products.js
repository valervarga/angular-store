const express = require('express');
const router = express.Router();
const Products = require('../models/Product');

// Get all products
router.get('/api/products', (req, res) => {
  Products.find({}, (err, products) => {
    if (err) return res.json({ok: false, status: 404, message: 'Products cannot be found.'});
    return res.json({ok: true, status: 200, data: products});
  });
});

module.exports = router;