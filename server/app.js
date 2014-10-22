/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');
var gzippo =require('gzippo');

// Connect to database
mongoose.connect("postgres://upkhsvvcvaewgj:eF0_sk6v4aihVaJsZXFXdkJKYW@ec2-174-129-21-42.compute-1.amazonaws.com:5432/ddhmp4dqblhojs", config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);

// Start server

// Expose app
exports = module.exports = app;
