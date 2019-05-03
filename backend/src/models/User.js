/**
 * @file Defines a schema for the user collection.
 * @author Valer Varga
 */

const mongoose = require('mongoose');

// SCHEMA SETUP - APP CONFIG
const userSchema = new mongoose.Schema({
		username: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		refreshToken: {
			type: String,
			required: false
		}
	}, {
		timestamps: true
});

module.exports = mongoose.model('users', userSchema);
