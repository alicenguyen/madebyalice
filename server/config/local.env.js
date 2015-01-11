'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "madebyalice-secret",
  MONGOLAB_URI: 'mongodb://alice:nimbus2015@ds031541.mongolab.com:31541/mba',
  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
