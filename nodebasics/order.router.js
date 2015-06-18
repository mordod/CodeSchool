var express = require('express');

var orderController = require('./orderController.js');



var router = express.Router();



router.get("/orders/new", orderController.new);
router.post('/orders', orderController.create);
router.get("/orders", orderController.index);
router.get("/orders/:id", orderController.show);
router.get("/orders/:id/edit", orderController.edit);
router.put("/orders/:id", orderController.update);
router.delete('/orders/:id', orderController.delete);

module.exports = router;