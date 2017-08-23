// var cats = [
// {name: "Fluffy", color: "Green", url:"https://i.ytimg.com/vi/-OJMIqVrON0/maxresdefault.jpg"},
// {name: "Krabby", color: "Red", url:"https://thechive.files.wordpress.com/2016/10/1874295-211.jpg?quality=85&strip=info&w=600"},
// {name: "Maximus", color: "N/A", url:"https://pbs.twimg.com/media/CVB4sEnUsAAQaCN.jpg"}
// ]; ARRAY ADDED TO JSON FILE


function domString(){
}

function writeToDom(){
}

var catArray = [];

domString(cats);

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
 		catDomString += 		'<img src="' + currentCat.url + '">';
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

printCatArrayToDom(cats);


