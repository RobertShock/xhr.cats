// var cats = [
// {name: "Fluffy", color: "Green", url:"https://i.ytimg.com/vi/-OJMIqVrON0/maxresdefault.jpg"},
// {name: "Krabby", color: "Red", url:"https://thechive.files.wordpress.com/2016/10/1874295-211.jpg?quality=85&strip=info&w=600"},
// {name: "Maximus", color: "N/A", url:"https://pbs.twimg.com/media/CVB4sEnUsAAQaCN.jpg"}
// ]; ARRAY ADDED TO JSON FILE



// printCatArrayToDom(cats);



// function domString(catCrap){
// 	var catString = ""
// 	for(var i=0; i<catCrap.length; i++0{
// 		catString += '<div class="cat>'
// 		catString += '<div class="name">${catCrap[i].name}"</div>'
// 		catString += '<img src="${catCrap[i]'
// 	}
// }
// writeToDom(catString);
// }


// function writeToDom(strang){
// 	var catContainer = document.getElementById("kat-koral");
// 	catContainer.innerHTML = strang;
// }






function domString(){
}

function writeToDom(){
}

var catArray = [];

// domString(cats);

var catContainer = document.getElementById("cat-container");

function printCatArrayToDom(array) {
 	for ( var i = 0; i < array.length; i++ ) {
 		var currentCat = array[i];
 		var catDomString = catDomStringFunction(currentCat);
 	catContainer.innerHTML += catDomString;
	}
}

function catDomStringFunction(currentCat) {
  var catDomString = "";
 		catDomString += '<section class="cat">';
 		catDomString += 	'<div class="catImage">';
 		catDomString += 		'<img class="catPic" src="' + currentCat.url + '">';
 		catDomString += 	'</div>';
 		catDomString += 	'<div class="catName">';
 		catDomString += 		'<h2>' + currentCat.name + '</h2>';
 		catDomString +=		'</div>';
 		catDomString += 	'<div class="catColor">'
 		catDomString += 		'<p>' + currentCat.color + '</p>';
 		catDomString += 	'</div>'
 		catDomString +=		'</section>';
 		return catDomString;
}

function executeThisCodeAfterFileLoads(arrayName){
	var data = JSON.parse(this.responseText);
		printCatArrayToDom(data.cats);
}

function executeThisCodeAfterFileLoads2(arrayName){
	var data = JSON.parse(this.responseText);
		domString(data.dogs);
}

function executeThisCodeIfFileErrors(){
	console.log("Shit broke");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "cats.json");
myRequest.send()

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
myRequest2.open("GET", "dogs.json");
myRequest2.send()


























