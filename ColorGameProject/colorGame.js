var numSquares = 6;
var colors = initRandColor(numSquares);
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#newColor");
var pickedColor = pickRandColor();
// var easy = document.querySelector("#easy");
// var hard = document.querySelector("#hard");
var mode = document.querySelectorAll(".mode");

// initialize the game
init();

// change new color if user wants to change another set of colors
reset.addEventListener("click", function() {	
	resetSetting();
});


function init() {
	// change difficulty of the game
	for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener("click", function() {
			mode[1].classList.remove("selected");
			mode[0].classList.remove("selected");
			this.classList.add("selected");
			numSquares = this.textContent === "Easy" ? 3 : 6;
			resetSetting();

		});
	}
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < colors.length; i++) {
		// set initial color of squares
		squares[i].style.backgroundColor = colors[i];

		// change color after clicks
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor !== pickedColor) {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
				messageDisplay.style.color = "#9E33FF";
			} else {
				messageDisplay.textContent = "Bingo!";
				messageDisplay.style.color = "#29AF31";  
				changeAllColors(clickedColor);
				reset.textContent = "Play Again?";
			}			
		});
	}

}


// update colors to be picked color (corrected color)
function changeAllColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

// randomly pick a color from current color array
function pickRandColor() {
	var randomIdx = Math.floor(Math.random() * colors.length);
	return colors[randomIdx];
}

// input: numSquares => number of squres
// create a color array with numSquares of random colors 
function initRandColor(numSquares) {
	var colors = [];
	for (var i = 0; i < numSquares; i++) {
		var r = randomColor();
		var g = randomColor();
		var b = randomColor();
		colors[i] = "rgb(" + r + ", " + g + ", " + b + ")";
	}
	return colors;
}

// pick a random integer in interval [0, 255]
function randomColor() {
	return Math.floor(Math.random() * 256);
}

// reset all the settings to the initial value
function resetSetting () {
	colors = initRandColor(numSquares);
	h1.style.backgroundColor = "steelblue";
	pickedColor = pickRandColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < 6; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	reset.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
}





// easy.addEventListener("click", function() {
// 	numSquares = 3;
// 	hard.classList.remove("selected");
// 	easy.classList.add("selected");
// 	colors = initRandColor(numSquares);
// 	pickedColor = pickRandColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < 6; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.backgroundColor = "#steelblue";
// 	reset.textContent = "NEW COLORS";
// 	messageDisplay.textContent = "";

// });

// hard.addEventListener("click", function() {
// 	easy.classList.remove("selected");
// 	hard.classList.add("selected");
// 	colors = initRandColor(6);
// 	pickedColor = pickRandColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < 6; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
		
// 	}
// 	h1.style.backgroundColor = "steelblue";
// 	reset.textContent = "NEW COLORS";
// 	messageDisplay.textContent = "";
// });





// colorDisplay.textContent = pickedColor;
// for (var i = 0; i < colors.length; i++) {
// 	// set initial color of squares
// 	squares[i].style.backgroundColor = colors[i];

// 	// change color after clicks
// 	squares[i].addEventListener("click", function(){
// 		var clickedColor = this.style.backgroundColor;
// 		if (clickedColor !== pickedColor) {
// 			this.style.backgroundColor = "#232323";
// 			messageDisplay.textContent = "Try again!";
// 			messageDisplay.style.color = "#9E33FF";
// 		} else {
// 			messageDisplay.textContent = "Bingo!";
// 			messageDisplay.style.color = "#29AF31";  
// 			changeAllColors(clickedColor);
// 			reset.textContent = "Play Again?";
// 		}			
// 	});
// }















