var Restaurant = require("../models/restaurants.js");

var RestaurantsController = {
	index: function(req, res) {
		var restaurants = Restaurant.getAll();
		res.render("restaurants/index", {
			restaurants: restaurants
		});
	}
};

module.exports = RestaurantsController;