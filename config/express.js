'use strict';

var http = require('http'),
	https = require('https'),
	socketio = require('socketio'),
	express = require('express'),
	morgan = require('morgan'),
	compression = require('compression'),
	bodyParser = require('bodyParser'),
	methodOverride = require('methodOverride'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	helmet = require('helmet'),
	flash = require('connect-flash'),
	passport = require('passport'),
	mongoStore = require('connect-mongo')({
		session: session
	}),
	consolidate = require('consolidate')
	config = require('./config'),
	logger = require('./logger'),
	path = require('path');

module.exports = function(db) {
	var app = express();
	var server = http.createServer(app);
	var io = socketio.listen(server);

    app.locals.title = config.app.title;
    app.locals.description = config.app.description;
    app.locals.keywords = config.app.keywords;
    app.locals.facebookAppId = config.facebook.clientID;
    app.locals.jsFiles = config.getJavaScriptAssets();
    app.locals.cssFiles = config.getCSSAssets();

    app.engine('server.view.html', consolidate[config.templateEngine]);
    app.set('view engine', 'server.view.html');
    app.set('views', './app/views');


	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
		app.set('view cache', false);
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compression({
			filter: function(req, res) {
            	return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        	},
        	level: 3
		}));

		app.locals.cache = 'memory';
	}


	app.set('showStackError', true);

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    app.use(helmet.ienoopen());
    app.disable('x-powered-by');

    app.use(express.static(path.resolve('./public')));

    app.use(cookieParser());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret,
        store: new mongoStore({
            db: db.connection.db,
            collection: config.sessionCollection
        }),
        cookie: config.sessionCookie,
        name: config.sessionName
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(flash());

    config.getGlobbedFiles('./app/models/**/*.js').forEach(function(modelPath) {
        require(path.resolve(modelPath));
    });

    config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
        require(path.resolve(routePath))(app);
    });

    require('./socketio')(server, io, mongoStore);

    return server;
};	


