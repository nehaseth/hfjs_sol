var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
 { name: "Orange", calories: 160, color: "orange", sold: 12101 },
 { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
 { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
 { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
 { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
 { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
 { name: "Water", calories: 0, color: "clear", sold: 62123 }]


function compareSold(colaA, colaB) {
 	if(colaA.sold > colaB.sold) 
 		return 1;
 	else if(colaA.sold < colaB.sold)
 		return -1;
 	return 0;
}

function compareName(colaA, colaB) {
 	if(colaA.name > colaB.name) 
 		return 1;
 	else if(colaA.name < colaB.name)
 		return -1;
 	return 0;
}

function printProducts(products) {
	for(var i = 0; i < products.length; i++) {
		console.log("Name : " + products[i].name + " calories : " + products[i].calories 
			+ " color : " + products[i].color + " sold : " + products[i].sold)
	}
}

function makeCouter() {
	var count = 0;
	function counter() {
		count = count + 1;
		return count
	}
	return counter
}

function makePassword(password) {
	var passwordGuess = "abcde"
	return function() {
		return (passwordGuess == password)
	}
}

function makeTimer(message) {
	setTimeout(function(){alert(message)}, 5000);
	message = "Ouch! : closure environment is not a copy";
}


console.log("Comparing by #Sold : ");
products.sort(compareSold);
printProducts(products);
console.log("Comparing by Name : ");
products.sort(compareName);
printProducts(products);

checkCount = makeCouter();
console.log(checkCount());
console.log(checkCount());
console.log(checkCount());

checkPassword = makePassword("test");
console.log("Checking password 1 : " + checkPassword());

checkPassword = makePassword("abcde");
console.log("Checking password 2 : " + checkPassword());

makeTimer("This is another way to use closure");

