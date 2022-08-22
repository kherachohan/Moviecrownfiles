// $(document).ready(function (e) {

// 	jsonObject.products.forEach((i) => loadProducts(i));
// });

// var jsonObject = {
// 	"products": [
// 		{
// 		  "name":"Challa Mud Ke Nahi Aaya",
// 		  "image": "https://pbs.twimg.com/media/FXX-uKKVEAA-LhC?format=jpg&name=large",
// 		  "location":"120min | Comedy" ,
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Yaar Mera Titliaan Warga",
// 		  "image": "https://pbs.twimg.com/media/FY1sDJWUYAEHS-I.jpg",
// 		  "location":"120min | Action",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Shakkar Paare 2022 ",
// 		  "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinMH2whl4cSlOyJxit76TMk0cEjZ66HT8yrCb3LkMNgNSwjhZBhNg4cBt1vwxurl4GzplnjaAfdEe4ML3OlegOj8FcnE4KPSZ00NDgq-7rIXmZvHIJTqENz3_U-fZfouzSSBmU1nINQXLKBpfh4WrLtAGJm-C3B3Bh2fjBZ-KIJgodowrxzPFZOPJt/s1350/shakkar-paare-punjabi-movie.jpg",
// 		  "location":"120min | Thriller",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Jind Mahi 2022 Punjabi Full Movie",
// 		  "image": "https://i.ibb.co/SKp3cFD/Jind-Mahi.jpg",
// 		  "location":"120min | Comedy" ,
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Beautiful Billo 2022 Punjabi Full Movie ",
// 		  "image": "https://i.ibb.co/3mQJ7z0/Beautiful-Billo-7hitmovies.png",
// 		  "location":"120min | Action",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Bai Ji Kuttange 2022 Punjabi Full Movie",
// 		  "image": "https://i.ibb.co/XJ0dPs0/Bai-Ji-Kuttange-2022-7hitmovies.png",
// 		  "location":"120min | Thriller",
// 		  "link": "https://google.com"
	  
// 		},{
// 		  "name":"Lover (2022) Punjabi Full Movie",
// 		  "image": "https://i.ibb.co/M1TtggS/Lover-2022-Punjabi-Movie-Poster.jpg",
// 		  "location":"120min | Comedy" ,
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Countryside Gunday 2022 Punjabi Full Movie",
// 		  "image": "https://i.ibb.co/9ZzQb59/a77add8d213b73208a44bddbc7429d98-474x708.jpg",
// 		  "location":"120min | Action",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Munda Faridkotia 2019 Punjabi Full Movie",
// 		  "image": "https://m.media-amazon.com/images/M/MV5BZGE3Y2YzYjItODE0Mi00MzI5LTkyYjUtMTM5ZWI2NzM5NDk2XkEyXkFqcGdeQXVyMjExNTI2ODg@._V1_FMjpg_UY721_.jpg",
// 		  "location":"120min | Thriller",
// 		  "link": "https://google.com"
	  
// 		},{
// 		  "name":"Thappa (2022) Punjabi Full Movie",
// 		  "image": "https://i.ibb.co/L9CBRJZ/Thappa.jpg",
// 		  "location":"120min | Comedy" ,
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Mahi Mera Nikka Jeha 2022 Punjabi Full Movie ",
// 		  "image": "https://www.cinemaclock.com/images/posters/1000x1500/86/mahi-mera-nikka-jeha-2022-orig-poster.jpg",
// 		  "location":"120min | Action",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Sher Bagga 2022 Punjabi Full Movie",
// 		  "image": "https://punjabipollywood.com/wp-content/uploads/2021/06/sher-bagga-punjabi-movie-2022.jpg",
// 		  "location":"120min | Thriller",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Bajre Da Sitta 2022 Punjabi Movie 480p",
// 		  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSieU94_15N_lWR8xUTQt5fNO4E4kkFP0VSeo_TnU5kyagCNWeO",
// 		  "location":"120min | Adventure",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Umran Ch Ki Rakheya 2022 Punjabi Full Movie",
// 		  "image": "https://i.ibb.co/mtkdwsf/9a06860291158afe34a20a4e8ae71d81-630x945.jpg",
// 		  "location":"120min | Adventure",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Majajan Orchestra 2022 Punjabi Full Movie",
// 		  "image": "https://m.media-amazon.com/images/M/MV5BMTUwNzM2YzctZmUxMS00N2RjLTlhZWMtYmExOThjMzEwMzYxXkEyXkFqcGdeQXVyODAyODQ0NTA@._V1_.jpg",
// 		  "location":"120min | Adventure",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Patwari (2022) Full Punjabi Short Film",
// 		  "image": "https://i.ibb.co/N7Q5xdh/65cb7f480228b331c8e9d20b7d927f78-474x708.jpg",
// 		  "location":"120min | Adventure",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 		  "name":"Sohreyan Da Pind Aa Gaya 2022 Punjabi Full Movie",
// 		  "image": "https://i.ibb.co/C2SLFRr/sohreyan-da-pind-aa-gaya-punjabi-movie-2022.jpg",
// 		  "location":"120min | Adventure",
// 		  "link": "https://google.com"
	  
// 		},
// 		{
// 			"name":"Shareek 2 (2022) Punjabi Full Movie",
// 			"image": "https://m.media-amazon.com/images/M/MV5BMzE3MTA5ZGYtMjQ4YS00M2NjLThhOTktZTg0M2JjNTFkMDFlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UY644_.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },
// 		  {
// 			"name":"Dakuaan Da Munda 2 (2022) Punjabi Full Movie",
// 			"image": "https://m.media-amazon.com/images/M/MV5BZTNiNWU2NmItNDhkMi00M2Q0LTkzYTctODg3YWQyOGFiYjA4XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },{
// 			"name":"Khaao Piyo Aish Karo (2022) Punjabi Full Movie",
// 			"image": "https://m.media-amazon.com/images/M/MV5BN2ViMDI1ODMtZTRlZC00MDEwLThlNmEtMWVmNTFiZThiY2ViXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UY720_.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },{
// 			"name":"Baapu Bahar Bhejde (2022) Punjabi Full Movie",
// 			"image": "https://i.ibb.co/nPHffxT/Baapu-Bahar-Bhejde-2022.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },{
// 			"name":"Television (2022) Punjabi Full Movie",
// 			"image": "https://i.ibb.co/gFYTJTd/Television-2022-Punjabi-Movie.png",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },{
// 			"name":"Moosa Jatt 2022 SidhuMooseWala Punjabi Full Movie",
// 			"image": "https://m.media-amazon.com/images/M/MV5BNjY3NDA3NzAtNjhjNy00MmE3LWE2Y2YtNmEwZDhiNmY3MzZjXkEyXkFqcGdeQXVyMTM1Mjk5NDUy._V1_.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },{
// 			"name":"Patwari (2022) Full Punjabi Short Film",
// 			"image": "https://i.ibb.co/N7Q5xdh/65cb7f480228b331c8e9d20b7d927f78-474x708.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },{
// 			"name":"Patwari (2022) Full Punjabi Short Film",
// 			"image": "https://i.ibb.co/N7Q5xdh/65cb7f480228b331c8e9d20b7d927f78-474x708.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },{
// 			"name":"Patwari (2022) Full Punjabi Short Film",
// 			"image": "https://i.ibb.co/N7Q5xdh/65cb7f480228b331c8e9d20b7d927f78-474x708.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },{
// 			"name":"Patwari (2022) Full Punjabi Short Film",
// 			"image": "https://i.ibb.co/N7Q5xdh/65cb7f480228b331c8e9d20b7d927f78-474x708.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },{
// 			"name":"Patwari (2022) Full Punjabi Short Film",
// 			"image": "https://i.ibb.co/N7Q5xdh/65cb7f480228b331c8e9d20b7d927f78-474x708.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },{
// 			"name":"Patwari (2022) Full Punjabi Short Film",
// 			"image": "https://i.ibb.co/N7Q5xdh/65cb7f480228b331c8e9d20b7d927f78-474x708.jpg",
// 			"location":"120min | Adventure",
// 			"link": "https://google.com"
		
// 		  },
// 	  ]
//   }

// function loadProducts(data) {

// 	var div = document.createElement('div');

// 	div.innerHTML =
	
// 	`
// 	<div class="moviediv">
//        <a href="${data.link}" class="hrefmain"><img src="${data.image}" class="imagemain"/> <div class="movienamediv"><h1 class="movienamemain">${data.name}</h1></div>  <h1 class="moviedetailsmain">${data.location}</h1></a>
//        </div> 
//        `
// 	;

// 	document.getElementById("columnmain").appendChild(div);}
















var button = document.getElementById('right1');
      button.onclick = function () {
         var container = document.getElementById('columnmain1');
         sideScroll(container, 'right', 5, 300, 5);
      };

      var back = document.getElementById('left1');
      back.onclick = function () {
         var container = document.getElementById('columnmain1');
         sideScroll(container, 'left', 5, 300, 5);
      };

      function sideScroll(element, direction, speed, distance, step) {
         scrollAmount = 0;
         var slideTimer = setInterval(function () {
            if (direction == 'left') {
               element.scrollLeft -= step;

            } else {

               element.scrollLeft += step;

            } scrollAmount += step;

            if (scrollAmount >= distance) {
               window.clearInterval(slideTimer);

            }

         }, speed);
      }



      var button = document.getElementById('right');
      button.onclick = function () {
         var container = document.getElementById('columnmain');
         sideScroll(container, 'right', 5, 300, 5);
      };

      var back = document.getElementById('left');
      back.onclick = function () {
         var container = document.getElementById('columnmain');
         sideScroll(container, 'left', 5, 300, 5);
      };

      function sideScroll(element, direction, speed, distance, step) {
         scrollAmount = 0;
         var slideTimer = setInterval(function () {
            if (direction == 'left') {
               element.scrollLeft -= step;

            } else {

               element.scrollLeft += step;

            } scrollAmount += step;

            if (scrollAmount >= distance) {
               window.clearInterval(slideTimer);

            }

         }, speed);
      }



      
      var button = document.getElementById('right2');
      button.onclick = function () {
         var container = document.getElementById('columnmain2');
         sideScroll(container, 'right', 5, 300, 5);
      };

      var back = document.getElementById('left2');
      back.onclick = function () {
         var container = document.getElementById('columnmain2');
         sideScroll(container, 'left', 5, 300, 5);
      };

      function sideScroll(element, direction, speed, distance, step) {
         scrollAmount = 0;
         var slideTimer = setInterval(function () {
            if (direction == 'left') {
               element.scrollLeft -= step;

            } else {

               element.scrollLeft += step;

            } scrollAmount += step;

            if (scrollAmount >= distance) {
               window.clearInterval(slideTimer);

            }

         }, speed);
      }
