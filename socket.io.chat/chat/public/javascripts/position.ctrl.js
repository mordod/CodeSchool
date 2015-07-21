(function (){
	angular.module("space")
		.controller('PositionCtrl', [ "$stateParams", "$state", function ( $stateParams, $state){
			this.choose = function (num){
				if (num == 0){
					return "scanner";
				}
				if (num == 1){
					return "monitor";
				}
			};
				

		}]);
})();