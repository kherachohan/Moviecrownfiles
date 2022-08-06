function search_movie() {
	let input = document.getElementById('search-item').value
	input = input.toLowerCase();
	let x = document.getElementsByClassName('box-movies');

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
		}
		else {
			x[i].style.display = "list-item";
		}
	}
}
function load_home(e) {
	(e || window.event).preventDefault();
	var con = document.getElementById('content')
		, xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function (e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			con.innerHTML = xhr.responseText;
		}
	}

	xhr.open("GET", "http://www.yoursite.com/home.html", true);
	xhr.setRequestHeader('Content-type', 'text/html');
	xhr.send();
}


$(document).ready(function (e) {

	jsonObject.products.forEach((i) => loadProducts(i));

});

var jsonObject = {
	"products": [
		  {
			  "id": "123",
			  "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			  "link": "/Content Files/sherbagga.html",
			  "title":"Sher Bagga"
		  },
		  {
			  "id": "123",
			  "image": "https://m.media-amazon.com/images/M/MV5BZDAxZmZiMTYtOTA5NC00YTI2LWIzNmQtYzUxNTQ4NGU0MTA2XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
			  "link": "https://google.com",
			  "title":"Warning"

		  },	{
			  "id": "123",
			  "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGsdTMLjdo2cCGCqtRPZ6yrmZi9Lxig0i4Gx2ybYjNDOJNJaFF",
			  "link": "https://google.com",	
			  "title":"Lekh"

		  },	{
			  "id": "123",
			  "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			  "link": "https://google.com",	
			  "title":"Lekh"
		  },	{
			  "id": "123",
			  "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			  "link": "https://google.com",	
			  "title":"Lekh"
		  },	{
			  "id": "123",
			  "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			  "link": "https://google.com",	
			  "title":"Lekh"
		  },	{
			  "id": "123",
			  "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			  "link": "https://google.com",	
			  "title":"Lekh"
		  },	{
			  "id": "123",
			  "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			  "link": "https://google.com",	
			  "title":"Lekh"
		  },	{
			  "id": "123",
			  "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			  "link": "https://google.com",	
			  "title":"Lekh"
		  },	{
			  "id": "123",
			  "image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			  "link": "https://google.com",	
			  "title":"Lekh"
		  },
		  {
			"id": "123",
			"image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			"link": "https://google.com",	
			"title":"Lekh"
		},{
			"id": "123",
			"image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			"link": "https://google.com",	
			"title":"Lekh"
		},{
			"id": "123",
			"image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			"link": "https://google.com",	
			"title":"Lekh"
		},{
			"id": "123",
			"image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			"link": "https://google.com",	
			"title":"Lekh"
		},{
			"id": "123",
			"image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			"link": "https://google.com",	
			"title":"Lekh"
		},{
			"id": "123",
			"image": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
			"link": "https://google.com",	
			"title":"Lekh"
		},
		  
	  ]
  }
  
function loadProducts(data) {

	var div = document.createElement('div');

	div.innerHTML =
		'<div class="thumb col-md-2 col-sm-4 col-xs-6">   <a class="hrefbtn" href="' + data.link + '">       <img src="' + data.image + '" class="movies">       </a> <h1 class="empty">'+ data.title+'</h1>'

	'</div>';

	document.getElementById("acolumn").appendChild(div);
}

