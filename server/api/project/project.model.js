'use strict';
var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var shortId = require('shortid');
var ProjectSchema = new Schema({
	_id: {
		type: String,
		unique: true,
		'default': shortId.generate
	},
	name: String,
	description: String,
	type: String,
	dated_start: Date,
	dated_end:Date,
	images: Array,
	press: Array,
	info: String,
	active: Boolean,
	keywords:[String],
	start_date: Date,
	end_date:Date,
	created: {type: Date, default: Date.now},
	updated: Date
});

module.exports = mongoose.model('Project', ProjectSchema);
