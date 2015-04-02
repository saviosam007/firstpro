(function( uilib , $ ) {

uilib.ajaxExample = function() {

	var occupationClass = "elementOccupation";

	$.ajax( {url:"data.json"}).done(
	
	
	//When The AJAX RETURNS
	function(data) { 
		//var parsed = JSON.parse(data); //not needed because its not a string
		var parsed = data;
		
		$(parsed).each( function(i,val) {
			$('#hook').append(
				$("<p class='fromJSON elementName' >"+val.name+"</p>")
							);						
			var occupationElement = $('<p class="fromJSON">' + val.occupation + "</p>");
			$(occupationElement).addClass(occupationClass);
			$('#hook').append(occupationElement);
							
		});
		
	});

};



//invoke it on page ready
$(document).ready(uilib.ajaxExample);


})(window.uilib = window.uilib || {}, jQuery)