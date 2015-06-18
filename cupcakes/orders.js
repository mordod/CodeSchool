var orders = {};


var addOrder = function(newOrder)
{
	var id = new Date().valueOf();
	orders[id] = newOrder;
	return id;

};

var getAllOrders = function()
{
	return JSON.parse(JSON.stringify(orders));
};

var getOrder = function(id)
{

	return orders[id];
};

var updateOrder = function(id, updateOrder)
{
	orders[id] = updateOrder;
	return updateOrder;

};
var deleteOrder = function(id)
{
	delete orders[id];


};
module.exports = {
	addOrder : addOrder,
	getOrder : getOrder,
	getAllOrders : getAllOrders,
	updateOrder : updateOrder,
	deleteOrder : deleteOrder
};