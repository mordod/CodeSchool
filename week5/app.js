var express = require('express'),
	http = require('http');

// create a new express app
var app = express();
app.set("views", "./views");
app.set('view engine', "jade");


app.get("/", function(req, res){
	res.render("index");

});

app.use("/restaurants", require("./routes/restaurants.js"))
app.use("/stores", require("./routes/stores.js"))

app.listen(8080, function(){
	console.log("SERVER IS DOING STUFF");

});