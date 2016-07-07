
function init() {
	var imageElements = document.getElementsByTagName("img");
	for(var i=0; i< imageElements.length; i++) {
		imageElements[i].onclick = unblur;
	}
}

function unblur(eventObj) {
	var imageElement = eventObj.target;
	var name = imageElement.id;
	imageElement.setAttribute("src", "../images/" + name + ".jpg");
	setTimeout(reblur, 2000, imageElement);
}

function reblur(imageElement) {
	var name = "../images/" +  imageElement.id + "blur.jpg";
	imageElement.setAttribute("src", name);
}

window.onload = init;
