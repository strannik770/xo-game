let table = document.getElementById("game"); 
		let cells = document.querySelectorAll(".xo-cell");
		table.addEventListener ("click", doit);
		
		
		function doit (event) {
		
			if ( event.target.className != "xo-cell" ||  event.target.innerHTML != "" ) return;
			event.target.innerHTML = "X";
			
			draw();
			win();	
		
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
			lose();		
			if (result.innerHTML != "") table.removeEventListener ("click", doit);
		}
	
	function randomInt(max) {
		return Math.floor(Math.random() * max);
	}
	
	function win (){
	  if ((document.getElementById('0_0').innerHTML == 'X' 
		&& document.getElementById('1_1').innerHTML == 'X'
		&& document.getElementById("2_2").innerHTML == 'X')
		||(document.getElementById("0_2").innerHTML == 'X' 
		&& document.getElementById("1_1").innerHTML == 'X' 
		&& document.getElementById("2_0").innerHTML == 'X')) result.innerHTML = "Победа!!!";		
	  
	  for(let i = 0; i < 3; i++){
		for (let j = 0; j < 1; j++){
			if ((document.getElementById(i+"_"+j).innerHTML == 'X' 
		&& document.getElementById(i+"_"+(j+1)).innerHTML == 'X'
		&& document.getElementById(i+"_"+(j+2)).innerHTML == 'X')
		|| (document.getElementById(j+"_"+i).innerHTML == 'X' 
		&& document.getElementById((j+1)+"_"+i).innerHTML == 'X'
		&& document.getElementById((j+2)+"_"+i).innerHTML == 'X')) result.innerHTML = "Победа!!!";		
		} 	
	  }		
	}
		
	function lose (){
	  if ((document.getElementById('0_0').innerHTML == 'O' 
		&& document.getElementById('1_1').innerHTML == 'O'
		&& document.getElementById("2_2").innerHTML == 'O')
		||(document.getElementById("0_2").innerHTML == 'O' 
		&& document.getElementById("1_1").innerHTML == 'O' 
		&& document.getElementById("2_0").innerHTML == 'O')) result.innerHTML = "Поражение!";		
	  
	  for(let i = 0; i < 3; i++){
		for (let j = 0; j < 1; j++){
			if ((document.getElementById(i+"_"+j).innerHTML == 'O' 
		&& document.getElementById(i+"_"+(j+1)).innerHTML == 'O'
		&& document.getElementById(i+"_"+(j+2)).innerHTML == 'O')
		|| (document.getElementById(j+"_"+i).innerHTML == 'O' 
		&& document.getElementById((j+1)+"_"+i).innerHTML == 'O'
		&& document.getElementById((j+2)+"_"+i).innerHTML == 'O')) result.innerHTML = "Поражение!";		
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