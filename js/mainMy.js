
/*
var noOfCourses=0;
var noOfModules=0;

$(document).ready(function() {	

loadXML();


});

function loadXML(){
	
	$.get('xml/course.xml', function(data){
		
		//alert($(data).find('structure').find('module').length)
		
		noOfCourses=$(data).find('structure').length;
		//alert(noOfCourses);
		//noOfModules=$(data).find('structure').find('module').length;
		console.log(noOfCourses+"noOfCourses");
		
	});
	

	
}*/
 
var xhr;
if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); 		// all browsers except IE
else xhr = new ActiveXObject("Microsoft.XMLHTTP"); 		// for IE
 
xhr.open('GET', 'xml/course.xml', true);
xhr.onreadystatechange = function () {
	
	if (xhr.readyState===4 || xhr.status===200) {			
		var items = xhr.responseXML.getElementsByTagName('name');
		var output = '<ul>';
		for (var i=0; i<items.length; i++) output += '<li>' + items[i].firstChild.nodeValue + '</li>';
		output += '</ul>';
       alert(items);
		var div = document.getElementById('update');
		div.innerHTML = output;
	}
}
xhr.send();










