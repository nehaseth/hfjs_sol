var view = {
	displayMessage: function(message) {
		var msgElement = document.getElementById("messageArea");
		msgElement.innerHTML = message;
	},

	displayShip: function(positionId) {
		var posElement = document.getElementById(positionId);
		posElement.setAttribute("class", "hit");
	},

	displayMiss: function(positionId) {
		var posElement = document.getElementById(positionId);
		posElement.setAttribute("class", "miss");
	}
};

var model = {
	boardSize: 7,
	numShips: 3,
	numShipHits: 0,
	shipLength: 3,

	ships: [
	{ locations: ["00","01","02"], hits: ["","",""]}, 
	{ locations: ["24","34","44"], hits: ["","",""]}, 
	{ locations: ["10","11","12"], hits: ["","",""]}],

	fire: function(guess) {
		for(var i=0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess)
			if(index >= 0){
				ship.hits[index] = "hit";
				view.displayShip(guess);
				view.displayMessage("Hit!");
				if(this.isSunk(ship)) {
					this.numShipHits++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You Missed!");
		return false;
	},

    isSunk: function(ship) {
    	for(var i=0; i< this.shipLength; i++) {
    		if(ship.hits[i] !== "hit"){
    			return false;
    		}
    	}
    	return true;
    },

    generateShips: function() {

    },

    generateShipLocation() {

    },

    collision: function() {

    }

};


var controller = {
	guesses: 0,
	processGuess: function(guess) {
		var location = parseGuess(guess);
		if(location) {
			var hit = model.fire(location);
			this.guesses++;
			if(hit && model.numShipHits === model.numShips) {
				view.displayMessage("You have sunk all the ships !! in : " + this.guesses + " no. of guesses");
			}
		}
	}
};

function parseGuess(guess) {
		var alphabet = ["A","B","C","D","E","F","G"];
		if(guess == null || guess.length !==2) {
			alert("Please enter correct format guess: Letter and a number");
		}
		else {
			var row = alphabet.indexOf(guess.charAt(0));
			var col = guess.charAt(1);
			if(isNaN(row) || isNaN(col)) {
				alert("Incorrect input");
			}
			else if(row < 0 || row > model.boardSize || col < 0 || col > model.boardSize) {
				alert("Thats not on the board");
			}
			else {
				return row + col;
			}
		}
		return null;
}

function init() {
	var fireButton = document.getElementById("guessButton");
	fireButton.onclick = handleFireButton;
}

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var value = guessInput.value;
	controller.processGuess(value);
	value = "";
}


window.onload = init;




// controller.processGuess("A0");
// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");
// controller.processGuess("C4");


// console.log(parseGuess("A0"));
// console.log(parseGuess("R0"));
// console.log(parseGuess("A9"));

// model.fire("00");
// model.fire("01");
// model.fire("02");
// model.fire("34");
// model.fire("15");
// model.fire("12");
// model.fire("22");
// model.fire("44");
// model.fire("34");
// model.fire("24");

// model.fire("12");
// model.fire("11");
// model.fire("10");


// view.displayMiss("00");
// view.displayShip("34");
// view.displayMiss("15");
// view.displayShip("12");
// view.displayMessage("Check check");
