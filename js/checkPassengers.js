var passengers = [{name:"Joe", age: 43, paid: true, ticket: "firstClass"},  {name:"Jack", age: 32, paid:true, ticket: "secondClass"}, {name:"John", age: 54, paid: false, ticket: "firstClass"}, {name:"Jason", age: 23, paid: true, ticket:"secondClass"}];

function init() {
	alert("Flight checking begins");
	setTimeout(checkFlightPassengers, 5000, passengers);
	setTimeout(servePassengers, 20000, passengers);
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

function servePassengers(passengers) {
	for(var i=0; i<passengers.length; i++) {
		serveCustomer(passengers[i]);
	}
}

function serveCustomer(passenger) {
	var takeOrderByTicket = createOrderFunc(passenger);
	takeOrderByTicket();
	// do something else
	takeOrderByTicket();
}

function createOrderFunc(passenger) {
	var orderFunc;
	if(passenger.ticket == "firstClass") {
		orderFunc = function() {
			alert("Would u prefer ABC or ASDF? ");
		}
	}
	else {
		orderFunc = function() {
			alert("Would u prefer RQEQ or GFDS");
		}
	}

	return orderFunc;
}

window.onload = init;