(function()
{
	angular.module('orderApp')

		.controller('OrderFormCtrl', [
			"Order",
			function(Order)
			{
				this.order = new Order();

				this.addOrder = function()
				{
					this.order.save();
				};

				this.formDebug = function()
				{
					console.log("DEBUGGING")
				};


			}
		]);

}).call(this);