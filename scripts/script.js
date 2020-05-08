let x = "X";
let o = "O";
let table = document.querySelector(".xo-field");
let cells = document.querySelectorAll(".xo-cell");
table.addEventListener("click", playGame);
document.getElementById("first").addEventListener("click", choice);
document.getElementById("second").addEventListener("click", choice);


function playGame(event) {
	let str;
	let target = event.target;
	pen(target, x);

	draw();

	if (isOver(x) == x) result.innerHTML = "Победа";

	pen(target, o);

	if (isOver(o) == o) result.innerHTML = "Поражение";
	if (result.innerHTML != "") table.removeEventListener("click", playGame);
}

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function pen(target, str) {

	if (str == x) {
		if (target.className != "xo-cell" || target.innerHTML != "") return;
		target.innerHTML = x;
	}
	penO(str);
}

function penO(str) {
	if (result.innerHTML == "" && str == o) {
		while (true) {
			let x = randomInt(3);
			let y = randomInt(3);
			let newId = x + "_" + y;

			if (document.getElementById(newId).innerHTML != "") continue;
			document.getElementById(newId).innerHTML = o;
			break;
		}
	}
}

function isOver(str) {
	if ((document.getElementById('0_0').innerHTML == str
		&& document.getElementById('1_1').innerHTML == str
		&& document.getElementById("2_2").innerHTML == str)
		|| (document.getElementById("0_2").innerHTML == str
			&& document.getElementById("1_1").innerHTML == str
			&& document.getElementById("2_0").innerHTML == str)) return str;

	for (let i = 0; i < 3; i++) {
		if ((document.getElementById(i + "_0").innerHTML == str
			&& document.getElementById(i + "_1").innerHTML == str
			&& document.getElementById(i + "_2").innerHTML == str)
			|| (document.getElementById("0_" + i).innerHTML == str
				&& document.getElementById("1_" + i).innerHTML == str
				&& document.getElementById("2_" + i).innerHTML == str)) return str;
	}
}

function draw() {
	let count = 0;
	for (let cell of cells) {
		if (cell.innerHTML != "") count++;
	}
	if (count == 9) result.innerHTML = "Ничья!";
}

function choice(event) {
	let field = document.querySelector(".xo-field");
	field.style.visibility = "visible";

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3 ; j++){
			let elem = document.createElement("DIV");
			elem.className = "xo-cell";
			elem.id = i + "_" + j; 
			field.append(elem);
		}
		field.append(document.createElement("br"));
	}
	document.querySelector(".menu").style.visibility = "hidden";
	
}
