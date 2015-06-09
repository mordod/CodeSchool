var board = {
	"tile0-0": 2,
	"tile0-1": 4,
	"tile0-2": 8,
	"tile0-3": 16,
	"tile1-0": 32,
	"tile1-1": 64,
	"tile1-2": 128,
	"tile1-3": 256,
	"tile2-0": 512,
	"tile2-1": 1024,
	"tile2-2": 2048,
	"tile2-3": 4096,
	"tile3-0": 8192,
	"tile3-1": 16384


};




//<div class="row"> 
	//			<div class="title">8</div>
	//				<div class="title">8</div>
	//				<div class="title">8</div>
	//				<div class="title">8</div>
	//			</div>
	//			<div class="row"> 
	//				<div class="title">8</div>
	//				<div class="title">8</div>
	//				<div class="title">8</div>
//					<div class="title">8</div>
//				</div>
//				<div class="row"> 
//					<div class="title">8</div>
//					<div class="title">8</div>
//				<div class="title">8</div>
	//				<div class="title">8</div>
	//			</div>
	//			<div class="row"> 
	//				<div class="title">8</div>
		///			<div class="title">8</div>
		//			<div class="title">8</div>
			//		<div class="title">8</div>
			//	</div>

var tileKey = function (col,row) {
	return "tile"+col+"-"+row;




};



var refreshBoard = function() {
	for (var row = 0; row < 4; row++){
		

		for (var col = 0; col < 4; col++){
			var key = tileKey(col, row);
			var val = board[key];
			var $tile = $("#" + key);
			$tile.text(val).addClass("tile-" + val);







		}
	}
//	var $cell1 = $(".row:first-child .tile:last-child");
//	var $cell2 = $(".row:last-child .tile:first-child");

//	$cell2.text("2").addClass("tile-2");
//	$cell1.text("4").addClass("tile-4");
//	changeVal ($cell2,"2","tile-2")
	


};

var createBoard = function() {
	var $board = $("#board");
	for (var row = 0; row < 4; row++){
		var $row = $("<div></div>").addClass("row");

		for (var col = 0; col < 4; col++){
			var $tile = $("<div></div>").addClass("tile");
			$tile.attr("id", tileKey(col,row));

			$row.append($tile);
		$board.append($row);

		}
	}
}


//var changeVal = function ($cell,number,class) {
//	$cell.text(number).addClass(class);




//};
$( document ).ready(function (){

	//alert("cheese")
	createBoard();
	refreshBoard();

	





	$(document).keydown( function(e){
		//alert(e.which);


		switch(e.which) {
			case 37:
			case 65:
				alert("left");
				break;
			case 38:
			case 87:
				alert("up");
				break;
			case 39:
			case 68:
				alert("right");
				break;
			case 40:
			case 83:
				alert("down");
				break;

		}

		//if e.which = 37 //left
		//if e.which = 38 //up
		//if e.which = 39 //right
		//if e.which = 40 //down

		
	});
});

















