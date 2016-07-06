var passengers = [{name:"Joe", age: 43, paid: true},  {name:"Jack", age: 32, paid:true}, {name:"John", age: 54, paid: false}, {name:"Jason", age: 23, paid: true}];

function init() {
	alert("Flight checking begins");
	setTimeout(checkFlightPassengers, 5000, passengers);
}

function checkFlightPassengers(passengers) {
	var allPaid = checkPassenger(passengers, allPaidTest);
	if(!allPaid) {
		alert("One or more passengers have not paid for trip");
	}
	var allOnFlyList = checkPassenger(passengers, allOnFlyListTest);
	if(!allOnFlyList) {
		alert("One or more passengers are on no fly list for trip");
	}
}

function checkPassenger(passengers, testfunction) {
	for(var i=0; i< passengers.length; i++) {
		if(!testfunction(passengers[i])){
			return false;
		}
	}
	return true;
}

function allPaidTest(passenger) {
	if(passenger.paid){
		return true;
	}
}

function allOnFlyListTest(passenger) {
	if(passenger.name == "Jason") {
		return false;
	}
}

window.onload = init;