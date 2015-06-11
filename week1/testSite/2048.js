var size = 4
var score = 6

var bestScore = 0 
var doCalcScore = false
var board = {
//	"tile0-0": 2,
//	"tile0-1": 4
//	"tile0-2": 2,
//	"tile0-3": 4,
	//"tile1-0": 2,
//	"tile1-1": 4,
//	"tile1-2": 2,
//	"tile1-3": 4,
//	"tile2-0": 2,
//	"tile2-1": 4,
//	"tile2-2": 2,
	//"tile2-3": 4,
//	"tile3-0": 2,
	//"tile3-1": 2


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
	for (var row = 0; row < size; row++){
		

		for (var col = 0; col < size; col++){
			var key = tileKey(col, row);
			var val = board[key];
			var $tile = $("#" + key);
			$tile.removeClass();
			$tile.text("").addClass("tile");

			$tile.text(val).addClass("tile-" + val);
			//if (val != undefined) and doCalcScore){
			//	console.log(val);
			//	score += val;
			//};

			
			$tile.addClass("newTileAnimation");
			$tile.removeClass("newTileAnimation");
			//console.log(score);
		}
	}
	doCalcScore = true;
	//	var $cell1 = $(".row:first-child .tile:last-child");
	//	var $cell2 = $(".row:last-child .tile:first-child");

	//	$cell2.text("2").addClass("tile-2");
	//	$cell1.text("4").addClass("tile-4");
	//	changeVal ($cell2,"2","tile-2")
};

var createBoard = function() {
	var $board = $("#board");
	for (var row = 0; row < size; row++){
		var $row = $("<div></div>").addClass("row");

		for (var col = 0; col < size; col++){
			var $tile = $("<div></div>").addClass("tile");

			$tile.attr("id", tileKey(col,row));

			$row.append($tile);
		$board.append($row);

		}
	}
	generateRandom();
	generateRandom();
}


var combineNumbers = function (numbers) {
  var newNumbers = [];

  while (numbers.length > 0) {
    if (numbers[0] === numbers[1]) {
      // add the first two numbers together
      var sum = numbers[0] + numbers[1];
      updateScore(sum);
      // push the sum onto newNumbers array
      newNumbers.push(sum);
      // remove BOTH numbers from numbers array
      numbers.shift();
      numbers.shift();
    } else {
      // push the first number onto newNumbers array
      newNumbers.push(numbers[0]);
      // remove the first number from numbers array
      numbers.shift();
    }
  }

  return newNumbers;
};


var getNumbersInRow = function (row) {
	var numbers = [];
	for (var col = 0; col < size; col++){
		var key = tileKey(col,row);
		var val = board[key];
		if (val){
			numbers.push(val);

		}

	}


	return numbers;
};

var getNumbersInCol = function (col) {
	var numbers = [];
	for (var row = 0; row < size; row++){
		var key = tileKey(col,row);
		var val = board[key];
		if (val){
			numbers.push(val);

		}

	}


	return numbers;
};

var addZeros = function (numbers) {
    var newNumbers = [];
    for (var ze = 0; ze <numbers.length; ze++) {
    	if (numbers[ze] != 0){
    		newNumbers.push(numbers[ze]);


    	}

    }
    return newNumbers;
}; 


var combineRowLeft = function (row){
	
	var oldNumbers = getNumbersInRow(row);

	var newNumbers = combineNumbers(oldNumbers);
	

	

	SetNumbersInRow(row, newNumbers);
	refreshBoard();	
	

	
};
var combineColUp = function (col){
	var oldNumbers = getNumbersInCol(col);
	var newNumbers = combineNumbers(oldNumbers);
	if (newNumbers == oldNumbers){
		same = true
	}
	SetNumbersInCol(col, newNumbers);
	refreshBoard();
};

var combineRowRight = function (row){
	var oldNumbers = getNumbersInRow(row);
	var newNumbers = combineNumbers(oldNumbers)
	if (newNumbers == oldNumbers){
		same = true
	}
	newNumbers.reverse();
    for(i= newNumbers.length; i < size; i++){
    	newNumbers.push(undefined);

    }
    newNumbers.reverse();
    
	SetNumbersInRow(row, newNumbers);
	refreshBoard();
};

var combineColDown = function (col){
	var oldNumbers = getNumbersInCol(col);
	var newNumbers = combineNumbers(oldNumbers)
	if (newNumbers == oldNumbers){
		same = true
	}
	newNumbers.reverse();
	for(i= newNumbers.length; i < size; i++){
    	newNumbers.push(undefined);

    }
    newNumbers.reverse();
	SetNumbersInCol(col, newNumbers);
	refreshBoard();
};
var checkGameOver = function(){
	var empty = getEmptyTiles();
	if (empty.length > 0){
		return false;
	}
	for (var row = 0; row < size; row++){
		var numbers = getNumbersInRow(row);
		for(var n = 0; n < numbers.length - 1; n++){
			if (numbers[n] === numbers[n+1]){
				return false;

			}
		}

	}

	for (var col = 0; col < size; col++){
		var numbers = getNumbersInCol(col);
		for(var n = 0; n < numbers.length - 1; n++){
			return false;
			if (numbers[n] === numbers[n+1]){
				return false;

			}

			
		}

	}
	return true;


};


var keyPressed = function (direction){
	var oldboard = $.extend({},board);
	

	if (direction === 1) {
		for (var i = 0; i < size; i++){
			combineRowLeft(i);		
		};
	};
	if (direction === 2) {
		for (var i = 0; i < size; i++){
			combineColUp(i);	
		};
	};
	if (direction === 3) {
		for (var i = 0; i < size; i++){
			combineRowRight(i);	
		};
	};
	if (direction === 4) {
		for (var i = 0; i < size; i++){
			combineColDown(i);	
		};
	};
	//console.log(oldboard);
	if (didBoardChange(oldboard)){
		generateRandom();
		localStorage.setItem("board",JSON.stringify(board));


		}
		if(checkGameOver()){
			alert("checkGameOver");
		}
};
var getEmptyTiles = function(){
	var empty = [];
	for(var row = 0; col < size; row++){
		for(var col = 0; col < size; col++){
			var key = tileKey(col,row);
			if (board[key] === undefined) {
				empty.push(key);

			}
		}


	}

	return empty;

};
var didBoardChange = function (oldboard){
	for (var row = 0; row < size; row++){
		for (var col = 0; col < size; col++){
			var key = tileKey(col,row);
			if(board[key] !== oldboard[key]){

				
				return true
			}
		}
	}

	return false

};




var generateRandom = function(){
	//console.log("cheese");
	var possibleCells = [];
	for (var row = 0; row < size; row++){
		for (var col = 0; col < size; col++){
			var key = tileKey(col, row);
			var val = board[key];
			//console.log("cheese");
			if (!val) {
				//console.log("cheese", key);
				possibleCells.push(key);



			}

		}
	}
	var numSelector = Math.floor((Math.random() * possibleCells.length) + 1)-1;
	//console.log(numSelector);
	var newKey = possibleCells[numSelector];
	if (Math.random() > .5 ){
		board[newKey] = 2;

	}else{
		board[newKey] = 4;
	}
	refreshBoard();

};


var SetNumbersInCol = function(col, newNumbers){
	for (var row = 0; row < size; row++){
		var key = tileKey(col,row);
		board[key] = newNumbers[row];

	}



};

var SetNumbersInRow = function(row, newNumbers){
	for (var col = 0; col < size; col++){
		var key = tileKey(col,row);
		board[key] = newNumbers[col];

	}



};

//var changeVal = function ($cell,number,class) {
//	$cell.text(number).addClass(class);




//};

var updateScore = function (increment) {

	score += increment;
	if (score > bestScore){
		bestScore = score
		localStorage.setItem("bestScore", bestScore);

	}
	$("#score").text(score);
	$("#bestScore").text(bestScore);

};


var loadSavedData = function (){

	var savedBestScore = localStorage.getItem("bestScore");
	if (savedBestScore){
		bestScore = savedBestScore
	}
	var savedBoard = localStorage.getItem("board");
	if (savedBoard){
		JSON.parse(savedBoard);
		board = savedBoard;
	}else{
		startNewGame()
	}



};


var startNewGame = function(){
	board = {};
	score = 0;
	createBoard();

	generateRandom();
	generateRandom();
	refreshBoard();
	updateScore();
	



}



$( document ).ready(function (){

	//alert("cheese")
	
	startNewGame();


	$("#new-game").hover(function(){


	});
	$("#new-game").click(function(){
		startNewGame();
	});






	





	$(document).keydown( function(e){
		//alert(e.which);


		switch(e.which) {
			case 37:
			case 65:
				
				keyPressed(1);
				
				

				


				break;
			case 38:
			case 87:
				
				keyPressed(2);
				break;
			case 39:
			case 68:
				
				keyPressed(3);
				break;
			case 40:
			case 83:
				
				keyPressed(4);
				break;

		}

		//if e.which = 37 //left
		//if e.which = 38 //up
		//if e.which = 39 //right
		//if e.which = 40 //down

		
	});
});

















