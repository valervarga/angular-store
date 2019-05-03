/**
 * @file Defines all user related route patterns.
 * @author Valer Varga
 */

const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

// READ
router.get('/api/users/:id', UserController.getOne);

module.exports = router;
