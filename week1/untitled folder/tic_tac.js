





var gameOver = false;
var player = 1;
var board = [[0,0,0],[0,0,0],[0,0,0]];


var checkWinningPostion = function (player, x1,y1,x2,y2,x3,y3) {
  var cell1 = board[y1][x1];
  var cell2 = board[y2][x2];
  var cell3 = board[y3][x3];
  if (cell1 == player && cell2 == player && cell3 == player){
  	alert("Player " + player + " WINS!");
  }

};
var checkTie = function () {
    for (var i = 0; i < 3; i++) {
    	for (var j = 0; j < 3; j ++) {
    		if (board[i][j] == 0) {
    			return;
    		}
    	}
    }
    alert("Cat's game!");
    gameOver = true;
};

var checkWinner = function (player){
	checkWinningPostion(player,0,0,0,1,0,2);
	checkWinningPostion(player,1,0,1,1,1,2);
	checkWinningPostion(player,2,0,2,1,2,2);
	checkWinningPostion(player,0,0,1,0,2,0);
	checkWinningPostion(player,0,1,1,1,2,1);
	checkWinningPostion(player,0,2,1,2,2,2);
	checkWinningPostion(player,0,0,1,1,2,2);
	checkWinningPostion(player,2,0,1,1,0,2);
	if (gameOver == false) {
	  checkTie();
	}
};

var setCellClick = function($cell,i,j) {
  //$cell.onclick = function () {
  $cell.click = (function () {
    if (gameOver == false && $(this).text() == ""){
      if (player == 1) {
        //this.innerHTML = "X";
        $cell.text("X");
        board[i][j] = 1;
        checkWinner(player);
        
        player = 2;
      } else {
        //this.innerHTML = "O";
        $cell.text("O");
        board[i][j] = 2;
        checkWinner(player);

        player = 1;
      }   
      console.log(board);
      
      }
  });
};
//var table = document.createElement("table");
var $table = $("<table></table>");
$("body").append($table);
//document.body.appendChild(table);

for (var i = 0; i < 3; i++) {
  //var tr = document.createElement("tr");
  var $tr = $("<tr></tr>");
  for (var j = 0; j < 3; j++) {
   // var td = document.createElement("td");
    
    var $td = $("<td></td>");
    setCellClick($td,i,j)
    
    //tr.appendChild(td);
    $tr.append($td);

  }
  //table.appendChild(tr);
  $table.append($tr);
}
//table.style.fontSize = "100px";














