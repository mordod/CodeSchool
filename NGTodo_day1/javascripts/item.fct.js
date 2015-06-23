(function()
{
	angular.module('todoApp')
		.factory("Item", [
			function()
			{
				var Item = function(){
					this.id	= new Date().valueOf();
				};
				Item.list = {};

				//--------------------------//

				var item = Item.prototype;
				item.id = 0;
				item.title = '';
				item.complete = false;
				item.save = function()
				{
					Item.list[this.id] = this;


				};

				item.remove = function()
				{
					delete Item.list[this.id];
				};

				//-------------------------//

				return Item;
			}

		])


}).call(this);