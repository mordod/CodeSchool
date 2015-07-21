var Spacecamp = require("../models/spacecamp.js");

var SpacecampController = {
	index: function(req, res) {
		Spacecamp.find({}, function(err, spacecamp) {
			var dbQuery = {};
			if(req.query.search){
				dbQuery.type = new RegExp(req.query.search, "i");

			}
			Spacecamp.find(dbQuery, function (err, spacecamp){
				if (req.params.format == "json"){
					res.json(spacecamp);

				}

			})
			


			//

		});
		
	},

	create: function(req, res){

		var spacecamp = new Spacecamp({
			name: req.body.name,
			text: req.body.text,
			time: req.body.time

		});
		spacecamp.save(function (err, spacecamp) {
			if (req.params.format == "json"){
				res.status(201).json(spacecamp);

			}
		});


	},

	show: function(req, res){
		Spacecamp.findOne({_id: req.params.id}, function(err, spacecamp){
			if (req.params.format == "json"){
				res.json(spacecamp);

			}
		});

		//Spacecamp.find({}, function(err, spacecamp) {
		//	res.send(req.params.id);
		//	res.render("spacecamp/show", {
		//		spacecamp: spacecamp
		//	});

		//})
		
	},

	destroy: function(req, res){
		Spacecamp.remove({_id: req.params.id}, function (err){
			if (req.params.format == "json"){
				res.status(204).json("");
			}
		});

	
	}

};


module.exports = SpacecampController;