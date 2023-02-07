/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click', function(){

	var input = document.querySelector("input").value;
	searchGiphy(input);


});


document.querySelector(".js-userinput").addEventListener('keyup', function(e){

	var input = document.querySelector("input").value;
	if(e.which === 13){
		searchGiphy(input);
	}

});




/* 2. do the data stuff with the API */


function searchGiphy(input){

	var url = "https://tenor.googleapis.com/v2/search?key=AIzaSyCrhrXnvn5bGHe3nehLubfJaYNPnejETFc&q=" + input;

    //AJAX request

    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();



    GiphyAJAXCall.addEventListener('load',function(e) {
	    var data = e.target.response;
	    pushtoDOM(data);


    });
}







/* 3. Show me the GIFs */
function pushtoDOM(input){

 	var response = JSON.parse(input);
 	console.log(response);

 	var container = document.querySelector(".js-container");

 	container.innerHTML = "";

 	var imageURL = response.results;
 	imageURL.forEach(function(i){
 		var src = i.media_formats.gif.url;

 
    container.innerHTML += "<img src=\"" + src + "<\"class=\"container-image\">";
 	});

 	
 }