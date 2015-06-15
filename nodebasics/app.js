var express = require("express");
var http = require('http');
var morgan = require("morgan");
var skipper = require("skipper");


var app = express();

app.use(morgan('dev'));
app.use(skipper());

app.get("/", function(req, res)
{

	res.sendFile(__dirname + '/templates/home.html');
});
app.post("/", function(req, res)
{

	console.log(req.body);
	res.sendFile(__dirname + '/templates/thankyou.html');
});

var server = http.createServer(app);
server.listen(8080);