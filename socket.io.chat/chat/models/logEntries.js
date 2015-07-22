var mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: String,
	text: String,
	time: Date,
	position: String

});

var LogEntry = mongoose.model("LogEntry", schema);


module.exports = LogEntry;