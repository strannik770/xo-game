let table = document.getElementById("game"); 
		let cells = document.querySelectorAll(".xo-cell");
		table.addEventListener ("click", doit);
		
		
		function doit (event) {
			let str;
			let target = event.target;
			if ( target.className != "xo-cell" ||  target.innerHTML != "" ) return;
			target.innerHTML = "X";
			
			draw();
			
			if (win("X") == "X") result.innerHTML = "Победа" ;
			
			penO();
			
			if (win("O") == "O") result.innerHTML = "Поражение" ;		
			if (result.innerHTML != "") table.removeEventListener ("click", doit);
		}
	
	function randomInt(max) {
		return Math.floor(Math.random() * max);
	}
	
	function penO() {
				if (result.innerHTML == "") {
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

	
	function win (str){
	  if ((document.getElementById('0_0').innerHTML == str 
		&& document.getElementById('1_1').innerHTML == str
		&& document.getElementById("2_2").innerHTML == str)
		||(document.getElementById("0_2").innerHTML == str 
		&& document.getElementById("1_1").innerHTML == str
		&& document.getElementById("2_0").innerHTML == str)) {
			result.innerHTML = "Победа!!!";
			return str;
			}		
	  
	  for(let i = 0; i < 3; i++){
		for (let j = 0; j < 1; j++){
			if ((document.getElementById(i+"_"+j).innerHTML == str 
		&& document.getElementById(i+"_"+(j+1)).innerHTML == str
		&& document.getElementById(i+"_"+(j+2)).innerHTML == str)
		|| (document.getElementById(j+"_"+i).innerHTML == str 
		&& document.getElementById((j+1)+"_"+i).innerHTML == str
		&& document.getElementById((j+2)+"_"+i).innerHTML == str)) {
			result.innerHTML = "Победа!!!";
			return str;
			}				
		} 	
	  }		
	}
			
	function draw (){
		let count = 0;
		for (let cell of cells){
			if (cell.innerHTML != "") count++ ;
		}	
		if (count == 9)   result.innerHTML = "Ничья!";
	}