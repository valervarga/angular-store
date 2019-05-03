/**
 * @file Startup file.
 * @author Valer Varga
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoDB = require('./mongodb');
// Require routes
const routes = {
	product: require('./routes/product'),
	user: require('./routes/user')
};
// Config File
const config = require('./build.config');

const server = express();
// Create default port
const PORT = config.PORT;
// Connect to database
MongoDB.connect();
MongoDB.debug(true);
// application config
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());

server.use(routes.product);
server.use(routes.user);

// Start server
server.listen(PORT, () => { console.log(`The API is listening on port ${PORT}`); });
