let table = document.getElementById("game"); 
		let cells = document.querySelectorAll(".xo-cell");
		table.addEventListener ("click", playGame);
		
		
		function playGame (event) {
			let str;
			let target = event.target;
			pen(target,"X");
			
			draw();
			
			if (isOver("X") == "X") result.innerHTML = "Победа" ;
			
			pen(target,"O");
			
			if (isOver("O") == "O") result.innerHTML = "Поражение" ;		
			if (result.innerHTML != "") table.removeEventListener ("click", playGame);
		}
	
	function randomInt(max) {
		return Math.floor(Math.random() * max);
	}
	
	function pen(target,str) {

		if ( str == "X"){
			if ( target.className != "xo-cell" ||  target.innerHTML != "" ) return;
			target.innerHTML = "X";
		}
		penO(str);
	}

	function penO(str) {
		if (result.innerHTML == "" && str == "O") {
			while (true){
			let x = randomInt(3);
			let y = randomInt(3);
			let newId = x+"_"+y;
						
			if ( document.getElementById(newId).innerHTML != "") continue;
			document.getElementById(newId).innerHTML = "O";
			break;
			}
		}
	}
	
	function isOver (str){
	  if ((document.getElementById('0_0').innerHTML == str 
		&& document.getElementById('1_1').innerHTML == str
		&& document.getElementById("2_2").innerHTML == str)
		||(document.getElementById("0_2").innerHTML == str 
		&& document.getElementById("1_1").innerHTML == str
		&& document.getElementById("2_0").innerHTML == str)) return str;		
	  
	  for(let i = 0; i < 3; i++){
			if ((document.getElementById(i+"_0").innerHTML == str 
		&& document.getElementById(i+"_1").innerHTML == str
		&& document.getElementById(i+"_2").innerHTML == str)
		|| (document.getElementById("0_"+i).innerHTML == str 
		&& document.getElementById("1_"+i).innerHTML == str
		&& document.getElementById("2_"+i).innerHTML == str)) return str; 	
	  }		
	}
			
	function draw (){
		let count = 0;
		for (let cell of cells){
			if (cell.innerHTML != "") count++ ;
		}	
		if (count == 9)   result.innerHTML = "Ничья!";
	}