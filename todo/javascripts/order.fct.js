(function()
{
	angular.module('orderApp')

		.factory('Order', [
			function()
			{

				var Order = function(){};

				Order.list = [];


				var order = Order.prototype;

				order.name = '';

				order.food = '';

				order.server = '';

				order.pickup = '';

				order.save = function()
				{
					Order.list.push(this);
				};


				return Order






			}
			


		]);

}).call(this);