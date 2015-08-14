'use strict';


var passport = require('passport'),
	users = require('../../app/controllers/users.server.controller'),
	files = require('../../app/controllers/files.server.controller');

module.exports = function(app) {
	app.route('/files')
		.get(files.listFiles);	

	app.route('/files/:fileId')
		.get(files.getFile);	
};
