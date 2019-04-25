/**
 * @file Defines all product related route patterns.
 * @author Valer Varga
 */

const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

// Get all products
router.get('/api/products', ProductController.getAll);

module.exports = router;
