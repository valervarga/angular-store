/**
 * @file Defines all user related route patterns.
 * @author Valer Varga
 */

const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

// CREATE
router.post('/api/users', UserController.createOne);

// READ
router.get('/api/users/:id', UserController.getOne);

module.exports = router;
