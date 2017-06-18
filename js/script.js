$( document ).ready(function() {
	"use strict";
	$( '#mountains' ).on('click',function() {
		$('#mountains').hide("slow");
	});
	
	$('.salamander').on('click', function() {
		$('#mountains').show("slow");
	});
	
	$('#submit').on('click', function() {
		var search_value = $('#search').val();
			alert(search_value);
	});
});