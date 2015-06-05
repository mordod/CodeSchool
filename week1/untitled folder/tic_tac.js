//alert("CHEESE");

var table = document.createElement("table");
/var tr1 = document.createElement("tr");
var tr2 = document.createElement("tr");
var tr3 = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");
var td4 = document.createElement("td");
var td5 = document.createElement("td");
var td6 = document.createElement("td");
var td7 = document.createElement("td");
var td8 = document.createElement("td");
var td9 = document.createElement("td");

document.body.appendChild(table);
table.appendChild(tr1);
table.appendChild(tr2);
table.appendChild(tr3);
tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);
tr2.appendChild(td4);
tr2.appendChild(td5);
tr2.appendChild(td6);
tr3.appendChild(td7);
tr3.appendChild(td8);
tr3.appendChild(td9);/


for(var i = 0; i < 3; i++) {
	var tr = document.createElement("tr");
	for (var j = 0; j < 3; j++){
		var td = document.createElement("td")
		td.onclick = function () {
			if (player == 1) {
				this.innerHTML = "X";
				player = 2;
			}else {
				this.innerHTML = "O";
				player = 1;

			
			}
		}
	}

} 



