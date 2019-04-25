/**
 * @file Defines a schema for the product collection.
 * @author Valer Varga
 */

const mongoose = require('mongoose');

// SCHEMA SETUP - APP CONFIG
const productSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }, {
    timestamps: true
});

module.exports = mongoose.model('products', productSchema);