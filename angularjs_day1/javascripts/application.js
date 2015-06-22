(function(){
	//angular.module('myApp', [])


		.factory('timer', [ "$interval",
		function($interval)
		{
			var Timer = 
			{
				interval: function(fn)
				{
					$interval(fn,1000);
				}
			};

			return Timer;
		}])

		.controller('applicationCtrl', ['Timer',
		function(Timer)
		{
			this.imagesNames = [
				'cat.jpeg',
				'catduck.jpeg',
				'heghog.jpeg',
				'mouse.jpeg',
				'snow.jpeg'
			];
			this.timerSeconds = 0;
			Timer.interval(function()
			{
				this.timerSeconds++;
			}.bind(this));

		}]);


}).call(this);