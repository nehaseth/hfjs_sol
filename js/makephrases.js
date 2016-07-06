var words1 = ["test", "yellow", "red"];
var words2 = ["the", "is" , "a "];

var random1 = Math.floor(Math.random() * words1.length);
var random2 = Math.floor(Math.random() * words2.length);

var phrase = words1[random1] + " " + words2[random2];
alert(phrase);
