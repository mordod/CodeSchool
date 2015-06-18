var express = require("express");
var http = require('http');
var jade = require('jade');
var methodOverride = require("method-override");
var morgan = require("morgan");
var skipper = require("skipper");


var data = require("./data.js");
var orderController = require("./orderController.js");
var Orders = require("./orders.js");




var app = express();

app.set('views','./templates');
app.set('view engine', 'jade');

app.use(methodOverride("_method"));
app.use(morgan('dev'));
app.use(skipper());
app.use("/", express.static("public"));

app.get("/", function(req, res){
	res.redirect('/orders')
});

app.use(require('./order.router.js'));

var server = http.createServer(app);
server.listen(8080);



