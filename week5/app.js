var express = require('express'),
	http = require('http'),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");

//mongoose.connect('mongodb://neon/mccade');
mongoose.connect('mongodb://localhost/mccade');


// create a new express app
var app = express();

app.set("views", "./views");
app.set('view engine', "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use("/", express.static("public"));

app.get("/", function(req, res){
	res.render("hello");

});
app.get("/ngrestaurants", function(req, res){
	res.render("ngrestaurants")


});

app.use("/", require("./routes/restaurants.js"))



app.listen(8080, function(){
	console.log("SERVER IS DOING STUFF");

});
