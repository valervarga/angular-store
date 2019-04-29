/**
 * @file Defines all product related route patterns.
 * @author Valer Varga
 */

const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

// CREATE
// Create one product
router.post('/api/products', ProductController.createOne);

// READ
// Get all products
router.get('/api/products', ProductController.getAll);
// Get one product
router.get('/api/products/:id', ProductController.getOne);

// UPDATE
// Update one product
router.put('/api/products/:id', ProductController.updateOne);

// DELETE
// Remove one product
router.delete('/api/products/:id/remove', ProductController.removeOne);

module.exports = router;
