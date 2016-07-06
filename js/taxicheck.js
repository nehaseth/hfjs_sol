var taxi = {
 make: "Webville Motors",
 model: "Taxi",
 year: 1955,
 color: "yellow",
 passengers: 4,
 convertible: false,
 mileage: 281341,
 started: false,

 drive: function() {
 	if(this.started) {
 		 	alert("VROOM VROOM");
 	} else {
 		alert("Start the car first");
 	}
 },

 stop: function() {
 	this.started = false;
 	alert("Started :::")
 },

 start: function() {
 	this.started = true;
 }
};

function prequal(car) {
 if (car.mileage > 10000) {
 return true;
 } else if (car.year > 1960) {
 return true;
 }
 return false;
}

var worthALook = prequal(taxi);
if (worthALook) {
 console.log("You gotta check out this " + taxi.make + " " + taxi.model);
 taxi.start();
 taxi.drive(taxi);
} else {
 console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}