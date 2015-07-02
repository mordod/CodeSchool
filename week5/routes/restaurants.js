var express = require("express");

var RestaurantsController = require("../controllers/restaurants_controller.js");



var router = express.Router();


router.get('/restaurants(.:format)?', RestaurantsController.index);
router.get("/restaurants/new", RestaurantsController.new);
router.post("/restaurants(.:format)?", RestaurantsController.create);
router.get("/restaurants/(:id)(.:format)?", RestaurantsController.show);
router.get("/restaurants/:id/edit", RestaurantsController.edit);
router.put("/restaurants/:id", RestaurantsController.update);
router.delete("/restaurants/:id", RestaurantsController.destroy);


module.exports = router;