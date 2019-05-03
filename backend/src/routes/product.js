/**
 * @file Defines all product related route patterns.
 * @author Valer Varga
 */

const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');
const middleware = require('../middleware');

// CREATE
router.post('/api/products', ProductController.createOne);

// READ
router.get('/api/products', middleware.checkToken, ProductController.getAll);
router.get('/api/products/:id', ProductController.getOne);

// UPDATE
router.put('/api/products/:id', ProductController.updateOne);

// DELETE
router.delete('/api/products/:id/remove', ProductController.removeOne);

module.exports = router;
