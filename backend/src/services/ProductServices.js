/**
 * @file Defines all product related business logic.
 * @author Valer Varga
 */

const Products = require('../models/Product');

const ProductService = {
  // CREATE
  createOne(product) {
    return new Promise((resolve, reject) => {
      if (!product.title) return reject('Title is required.');
      if (!product.description) return reject('Description is required.');
      if (!product.price) return reject('Price is required.');

      Products.create(product)
        .then(data => resolve(data))
        .catch(error => reject(`Product creation failed. Error: ${error}`))
    });
  },

  // READE
  getAll() {
    return new Promise((resolve, reject) => {
      Products.find({})
        .then(data => resolve(data))
        .catch(error => reject(`No products found. Error: ${error}`))
    });
  },

  getOne(id) {
    return new Promise((resolve, reject) => {
      Products.findOne({ _id: id })
        .then(data => resolve(data))
        .catch(error => reject(`Product cannot be found. Error: ${error}`))
    });
  },

  // UPDATE
  updateOne(product, _id) {
    return new Promise((resolve, reject) => {
      const options = {
        returnNewDocument: true
      };

      Products.findOneAndUpdate({ _id }, { "$set": product }, options)
        .then(data => resolve(data))
        .catch(error => reject(`Product cannot be updated. Error: ${error}`))
    })
  },

  // DELETE
  removeOne(id) {
    return new Promise((resolve, reject) => {
      Products.findByIdAndRemove(id)
        .then(data => resolve(data))
        .catch(error => reject(`Product removal failed. Error: ${error}`))
    })
  }
}

module.exports = ProductService;
