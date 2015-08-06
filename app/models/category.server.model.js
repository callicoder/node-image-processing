'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
	name: {
		type: String,
		trim: true
	},
	slug: {
		type: String
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	parent: {
		type: Schema.ObjectId
	},
	image: {
		src: String 
	}
});

mongoose.model('Category', CategorySchema);