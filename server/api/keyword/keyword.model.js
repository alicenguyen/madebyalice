'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var shortId = require('shortid');

var KeywordSchema = new Schema({
	_id: {
		type: String,
		unique: true,
		'default': shortId.generate
	},
	projects: Array,
	text: String
});

module.exports = mongoose.model('Keyword', KeywordSchema);
