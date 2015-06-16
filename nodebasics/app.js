var express = require("express");
var http = require('http');
var jade = require('jade');
var morgan = require("morgan");
var skipper = require("skipper");


var data = require("./data.js")

var app = express();

app.set('views','./templates');
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(skipper());
app.use("/", express.static("public"));

app.get("/", function(req, res)
{
	
	res.render('home', data);
		
	
});
app.post("/", function(req, res)
{

	console.log(req.body);
	res.render('thankyou',{
		name: req.body.my_name
	});

});

var server = http.createServer(app);
server.listen(8080);