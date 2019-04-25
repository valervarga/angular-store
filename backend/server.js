const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoDB = require('./mongodb');
// Require routes
const routes = require('./routes');

const server = express();
// Create default port
const PORT = process.env.PORT || 3000;
// Connect to database
MongoDB.connect();
MongoDB.debug(true);
// application config
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cors());

server.use(routes);

// Start server
server.listen(PORT, () => { console.log(`The API is listening on port ${PORT}`); });