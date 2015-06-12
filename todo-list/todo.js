var todoItems = [];


var getFormData = function (){
	var data = {};
	data.name = $("#todo-input-name").val();
	data.description = $("#todo-input-description").val();
	return data
};
var clearForm = function (){
	
	$("#todo-input-name").val("");
	$("#todo-input-description").val("");
	
};

var addItem = function(){
	var data = getFormData();
	todoItems.push(data);

};
var markItemCompleted = function (item, completed) {
	item.completed = completed;
}
var createlist = function(){
	clearList();
	for(var l = 0; l < todoItems.length; l++){
		var $checkbox = $("<input></input>").addClass("checkbox").change(function(){
			markItemCompleted(todoItems[l], this.checked);



		});
		var $checkboxLi = $("<li></li>").addClass("checkboxLi");
		var $remove = $("<a href=''></a>").text("x").click(function(e){
			e.preventDefault();
			todoItems.splice(l, 1);
			createlist();
		});
		$checkbox.attr("type", "checkbox");

		$checkboxLi.html(todoItems[l]["name"]);
		
		$checkboxLi.prepend($checkbox);
		$checkboxLi.append($remove);
		$("aside").append($checkboxLi);
		//$checkboxLi.click(function(){
			//$checkboxLi.html("orange");



		//});
	}
	




};
var clearList = function(){
	$("ul, li").empty();
};

$(document).ready(function(){
	$("#todo-form").submit(function(e){
		e.preventDefault();
		console.log("submitted");

		addItem();
		clearForm();
		createlist();



	});



});







