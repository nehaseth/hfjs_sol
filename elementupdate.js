function init() {
	var element = document.getElementById("id2");
	element.innerHTML = "Tested id2 update";
	element.setAttribute("class", "redtext");
	console.log("Updated id2");
}
window.onload = init;