var Restaurant = require("../models/restaurants.js");

var RestaurantsController = {
	index: function(req, res) {
		Restaurant.find({}, function(err, restaurants) {
			res.render("restaurants/index", {
				restaurants: restaurants
			});

		});
		
	},

	new: function(req, res) {

		res.render("restaurants/new",{});



	},
	create: function(req, res){

		var restaurant = new Restaurant({
			name: req.body.name,
			type: req.body.type,
			phone: req.body.phone

		});
		restaurant.save(function (err, restaurant) {
			res.redirect("/restaurants");
		});


	},

	show: function(req, res){
		Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
			res.render('restaurants/show', {
				restaurant: restaurant
			});


		});

		//Restaurant.find({}, function(err, restaurants) {
		//	res.send(req.params.id);
		//	res.render("restaurants/show", {
		//		restaurants: restaurants
		//	});

		//})
		
	},
	edit: function(req, res){
		Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
			res.render('restaurants/edit', {
				restaurant: restaurant
			});


		});



	},
	update: function(req, res){
		Restaurant.findOne({_id: req.params.id},{
			name: req.body.name,
			type: req.body.type,
			phone: req.body.phone
		}, function (err, restaurant){
			res.redirect("/restaurants/" + req.params.id);
		});

	},
	destroy: function(req, res){
		Restaurant.remove({_id: req.params.id}, function (err){
			res.redirect("/restaurants");	
		});

	
	}

};


module.exports = RestaurantsController;