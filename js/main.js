// JavaScript Document

/***************** Author --------------------  Pradeep K ----------------***********************************/

var noOfCourses=0;
var noOfModules=0;


$(document).ready(function(){
	
	
	loadXML();
		 	
});


function loadXML(){
	
	$.get('xml/course.xml', function(data){
		
		//alert($(data).find('structure').find('module').length)
		noOfCourses=$(data).find('structure').length;
		noOfModules=$(data).find('structure').find('module').length;
		
		noOfResources=$(data).find('res').length;
		var myRes=$(data).find('res');
		
		console.log(myRes);
	});
	
}





