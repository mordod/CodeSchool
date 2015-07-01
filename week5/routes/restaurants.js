var express = require("express");

var RestaurantsController = require("../controllers/restaurants_controller.js");



var router = express.Router();


router.get('/', RestaurantsController.index);
router.get("/new", RestaurantsController.new);
router.post("/", RestaurantsController.create);
router.get("/:id", RestaurantsController.show);
router.get("/:id/edit", RestaurantsController.edit);
router.put("/:id", RestaurantsController.update);
router.delete("/:id", RestaurantsController.destroy);


module.exports = router;