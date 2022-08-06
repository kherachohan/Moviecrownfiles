$(document).ready(function(e){

    jsonObject.products.forEach((i)=>loadProducts(i));

});

var jsonObject  = {
    "products": [
      {
        "id": "123",
        "title": "Sher Bagga Full Movie",
        "description": "This is a testing product for accore template",
        "image":"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
        "price": 60,
        "link":"https://google.com",
      },
      {
        "id": "456",
        "title": "Apple Iphone XR",
        "description": "This is a testing product for accore template",
        "image":"images/iphone.jpg",
        "price": 360,
        "link":"https://google.com",
      },
      {
        "id": "789",
        "title": "Smart Televisions",
        "description": "This is a testing product for accore template",
        "image":"images/tv.png",
        "price": 150,
        "link":"https://google.com",
      },
      {
        "id": "741",
        "title": "Laptops",
        "description": "This is a testing product for accore template",
        "image":"images/laptop.jpg",
        "price": 1150,
        "link":"https://google.com",
      }
    ]
  }

function loadProducts(data){

    var li = document.createElement('li');

    li.innerHTML = 
    
    '<div class="acolumn">'+

    '<div class="acolumn"> <a href="'+ data.link+'"> <img src="'+ data.image+'" class="images"> </a> '+

    '<h6 class="mt-0 font-weight-bold mb-2 info">'+ data.title+'</h6>'+

    '</div>'+

    '</div>'
  
document.getElementById("acolumn").appendChild(li);
}