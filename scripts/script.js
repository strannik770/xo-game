let xoSettings = {
	width: 3,
	height: 3,
	playerSide: "X",
	botSide: "O",
}

let cells;
let table = document.querySelector(".xo-field");
table.addEventListener("click", playGame);
document.getElementById("first").addEventListener("click", choice);
document.getElementById("second").addEventListener("click", choice);


function playGame(event) {
	let target = event.target;
	if (target.className != "xo-cell" || target.innerHTML != "") return;
	pen(target);

	draw();

	if (isOver(xoSettings.playerSide) == xoSettings.playerSide) result.innerHTML = "Победа";

	penBot();

	if (isOver(xoSettings.botSide) == xoSettings.botSide) result.innerHTML = "Поражение";
	if (result.innerHTML == "") draw();
	if (result.innerHTML != "") {
		table.removeEventListener("click", playGame); 
		newGame();
	}
}

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function pen(target) {
	target.innerHTML = xoSettings.playerSide;
}

function penBot() {
	if (result.innerHTML == "") {
		while (true) {
			let x = randomInt(3);
			let y = randomInt(3);
			let newId = x + "_" + y;

			if (document.getElementById(newId).innerHTML != "") continue;
			document.getElementById(newId).innerHTML = xoSettings.botSide;
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

	for (let i = 0; i < xoSettings.width; i++) {
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
	console.log(count);
	if (count == 9) result.innerHTML = "Ничья!";
}

function choice(event) {
	let field = document.querySelector(".xo-field");
	let downField = document.createElement("div");
	downField.id = "deleteField";
	field.append(downField);

	field.style.visibility = "visible";

	for (let i = 0; i < xoSettings.height; i++) {
		for (let j = 0; j < xoSettings.width; j++) {
			let elem = document.createElement("DIV");
			elem.className = "xo-cell";
			elem.id = i + "_" + j;
			downField.append(elem);
		}
		downField.append(document.createElement("br"));
	}
	cells = document.querySelectorAll(".xo-cell");

	document.querySelector(".menu").style.visibility = "hidden";

	let target = event.target;
	if (target.id == "second") {
		xoSettings.playerSide = "O";
		xoSettings.botSide = "X";
		penBot(xoSettings.botSide);
	}
	else if (target.id == "first") {
		xoSettings.playerSide = "X";
		xoSettings.botSide = "O";
	}
	//	let form = document.querySelector(".menu");
}

function newGame(){
	let input = document.createElement("input");
	input.setAttribute("type", "button");
	input.setAttribute( "value","Начать новую игру");
	input.className = "xo-newGame";
	document.querySelector(".xo-field").append(input);

	document.querySelector(".menu").style.visibility = "visible";

	result.innerHTML = "";
	deleteField.remove();
	document.querySelector(".xo-newGame").remove();
}