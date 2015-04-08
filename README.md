# firstpro
Video player
READ ME

	Tools Used are Notepad++ and Node js Server 

	As per the requirement initially I have parsed and read the clips.json file which gives us the details of the videos that have to be played in our video player.
	I have displayed a main video player and below that there are thumbnails of all the other videos which have been randomly generated. these details I have got from the json file. I have actually stored each video details in a map where I have used the source URL as the key and all the other details of that particular URL as an object which is the value.
	I have created an onclick function for the thumbnail; whenever you click on the thumbnail you can get the Content-URL of that particular thumbnail and set it as the SRC for the main Video tag. This will allow us to play that particular video of the clicked thumbnail.
	For the video tag I have created my controls such as Play/Pause , Theatre mode and Normal mode.
	you can play and pause the video by clicking this button.
	When you click the play button you will see the Title and after the video has completed    25%  description will slide in from the left.
	In the thumbnail onclick event I have used local storage to store the watched videos list.  whenever the user clicks on a particular thumbnail image it gets added to the local storage. When the page is reloaded I display the unwatched videos first and then watched videos at the end.
	Apart from the play pause button there is progress bar which keeps moving as the video plays.  the current duration and video duration are also displayed on the video player.
	We also have the option of theatre mode ; which when clicked displays the video player in theatre mode. the video description slides from the left at the bottom.
	Once the video has completed playing the next video in the list get played automatically.
	So In this mode when the user pauses the video and if he reloads the page he will have his video start from the exact time when the video was paused.







