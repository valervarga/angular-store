/**
 * @file Basic database setup
 * @author Valer Varga
 */

const mongoose = require('mongoose');
const config = require('./build.config');

const MongoDB = {
	connect() {
		mongoose.connect(config.DATABSE_URL, {useNewUrlParser: true})
		.then((res) => {
			console.log('Database connection is successful');
		}, err => {
			console.log('Error when connecting to the database: ', err);
		});
	},

	debug(state) {
		mongoose.set('debug', state);
	}
}

module.exports = MongoDB;
