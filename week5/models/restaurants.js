var mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: String,
	type: String,
	phone: String

});

var Restaurant = mongoose.model("Restaurant", schema);


module.exports = Restaurant;