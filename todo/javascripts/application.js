(function()
{
	angular.module("orderApp", [

		'ui.router'
	])

		.config([
			"$stateProvider",
			"$urlRouterProvider",
			function($stateProvider, $urlRouterProvider)
			{
				$urlRouterProvider.otherwise("/");
				$stateProvider


					.state("newOrder", 
					{
						url: "/",
						controller: 'OrderFormCtrl',
						controlleras: 'formVm',
						templateUrl: 'templates/order_form.html'
					})
			}

		])
}).call(this);