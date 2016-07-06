var numGuesses = 0; 
var numHits=0;
var isSunk = false;
var locations = [1,1,1,0,0];

while(isSunk == false) {
	var guess = prompt("Enter your guess (0-6)");
	if(isNaN(guess) || guess<0 || guess >6)  {
		alert("Enter a valid number");
	}
	else {
		numGuesses = numGuesses + 1;
		if(locations[guess] == 1) {
			numHits = numHits +1;
			alert("Hit ! " + numHits);
			if(numHits == 3) {
				isSunk = true;
				alert("Ship has sunk!");
			}
		}
		else {
			alert("Miss!");
		}
	}
	
}

var stats = "You took " + numGuesses + " number of guesses. Accuracy : " + 3/numGuesses;
alert(stats);

