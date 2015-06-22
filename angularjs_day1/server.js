var express = require('express'),
	http = require('http');

var app = express();


app.use(express.static('.'));


http.createServer(app).listen(8080);