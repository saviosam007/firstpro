(function ( videoapi , $, undefined) {


$(document).ready(function() {
      
	var j_Video = $('#video');
	var j_VideoElement = $("#videoElement");
	var videoElement = j_VideoElement[0];
	console.log(videoElement.canPlayType('video/ogg;'));
	
	j_VideoElement.on('play', function() {
		j_Video.html('video played');
	});
	
	j_VideoElement.on('pause', function() {
		j_Video.html('video paused');
	});
	
	j_VideoElement.on('ended', function() {
		j_Video.html('video stopped');
	});

	videoapi.play = function() {
		videoElement.play();
	}
	  
});


})(window.videoapi = window.videoapi || {} , jQuery)
