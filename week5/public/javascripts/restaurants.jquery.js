$(document).ready(function () {
	console.log("ready");

	$.get("/restaurants.json", function(restaurants) {
		for (var i = 0; i < restaurants.length; i++) {

  			var $ul = $("<ul></ul>");
  			$ul.text(restaurants[i].name);


  			$("#cheese").append($ul);
		};
	});
});