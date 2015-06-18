var express = require("express");
var http = require('http');
var jade = require('jade');
var methodOverride = require("method-override");
var morgan = require("morgan");
var skipper = require("skipper");


var data = require("./data.js")
var Orders = require("./orders.js")

var app = express();

app.set('views','./templates');
app.set('view engine', 'jade');

app.use(methodOverride("_method"));
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

app.get("/query", function(req, res)
{
	console.log(req.query);
	res.render('thankyou');


});
app.get("/orders/new", function(req, res)
{
	res.render('orders_new');

});
app.post('/orders', function(req, res)
{
	var orderId = Orders.addOrder(req.body);
	console.log(orderId);
	res.redirect('/orders/' + orderId);


});
app.get("/orders", function(req, res)
{
	var orders = Orders.getAllOrders(req.body);
	res.render('orders',{
		orders: orders
	});

});
app.get("/orders/:id", function(req, res){
	var order = Orders.getOrder(req.params.id);
	res.render('orders_show',{
		id: req.params.id,
		order:order


	});



});
app.delete('/orders/:id', function(req, res)
{
	Orders.deleteOrder(req.params.id);
	res.redirect("/orders");



})

var server = http.createServer(app);
server.listen(8080);



