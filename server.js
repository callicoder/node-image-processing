// set up ====================================================================== 
var express = require('express'); 
var app = express(); // create our app with express 
var http = require('http').Server(app);
var io = require('socket.io')(http);
var morgan = require('morgan'); // log requests to the console (express4) 
var bodyParser = require('body-parser'); // pull information from HTML POST (express4) 
var port = process.env.PORT || 3000;
var path = require('path');
// configuration ===============================================================

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users 
app.use(morgan('dev')); // log every request to the console 
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded 
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// routes ======================================================================

// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, './public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

io.on('connection', function(socket){
	console.log('A user connected');

	socket.on('disconnect', function() {
		console.log('User disconnected');
	});

	socket.on('chatMessage', function(msg){
		console.log(msg);
		io.emit('chatMessage', msg);
	});
});

// listen (start app with node server.js) ====================================== 
http.listen(port); console.log("App listening on port " + port);

