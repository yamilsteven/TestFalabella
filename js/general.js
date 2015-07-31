urlValidation("http://utilsfalabella.appspot.com/eventos/api/?id_evento=1432650270");

function urlValidation(url){
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	        prodData(myArr);
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function prodData(arr) {
	var template = Handlebars.compile( $('#template').html() ),
	stringhtml = [];
	for (var key in arr){
		for(var key2 in arr[key]){
			if(key2 == "oferta"){
				stringhtml += (template(arr[key][key2]));
			}
		}
	}	
	$('ul.prod').html(stringhtml);
}
