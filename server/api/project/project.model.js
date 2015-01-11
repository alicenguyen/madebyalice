'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  description: String,
  type: String,
  dated_start: Date,
  dated_end:Date,
  images: Array,
  press: Array,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Project', ProjectSchema);
