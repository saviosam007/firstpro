(function ( sample , $, undefined) {

var videos123 = {};
var arr=[0,1,2,3,4,5];
var arr1=[0,1,2,3,4,5];
var arr2=[];
var store=[];
var fullarr=[];
var watchedvideos=[];
var pausedvideos=[];
var pausedtime=[];
var result=false;
var pausevid=false;
var normalstate=false;
//var watchedvideos=[1];
sample.start = function(hookElementSelection, dataurlForJsonFile) {
/*var load = $("<div class='loading'></div>");*/
		//var name= $("<h2>Loading....</h2>");
		//load.append(name);
		//		hookElementSelection.append(name); 
		var load = $("<div class='loading'></div>");
		var name= $("<div class='title'><h2>IIT NEWS</h2></div>");
		load.append(name);
		hookElementSelection.append(load);
		//json1.video1={};
//console.log($.ajax({url:dataurlForJsonFile}).success(function(data){}));
$.ajax({url:dataurlForJsonFile}).success(function(data) {
console.log("savio2");

	arr.sort(function() {
		return Math.random() - 0.5;
		});
var k=arr[2]
var b=data[k]["content-url"];
//localStorage.clear();

//console.log(b);
var videos=$("<div id='video-container'><video width='650' height='350' class='a' id='sav'><source id='sav1' src="+b+" type='video/ogg'></video></div><br><br><br>");
//store.push(b);
//var test123=document.getElementById('sav1');
//console.log(test123.src);
var vidtag=$("<div class='loading'></div>");
//var videos=$("<div id='video-container'><iframe width='450' height='250' src="+b+"></iframe></div>");
//var controls=$("<div id='video-controls'><button type='button' id='play-pause' class='play'>Play</button><input type='range' id='seek-bar' value='0'><button type='button' id='mute'>Mute</button><input type='range' id='volume-bar' min='0' max='1' step='0.1' value='1'><button type='button' id='full-screen'>Full-Screen</button></div>");
var controls=$("<div id='video-controls' class='normal'><p align='right'><button id='play-pause-button' class='play' title='play'>Play/Pause</button></p><div align='right' id='current'>0:00</div><div align='right' id='duration' class='duration1'>0:00</div><input type='range' id='moving' value='0' min='0' max='100' step='1'><progress  type='range' class='seek' id='seek1' value='0' max='100'></progress></input><p align='right'><button id='fullscreen-button' class='fullscreen'>Theatre</button><button id='normal' class='simply'>Normal</button></p></div>");
//var controls=$("<div id='video-controls'><button id='play-pause-button' class='play' title='play'>Play/Pause</button><progress type='range' id='progressbar' value='1' max='100'></progress></div>");
var vid=document.getElementById('sav');
var dura=document.getElementById('seek1');
//title.animate({width:'toggle'},350);


//title.hide().delay(1000).slideDown(1000);
//title.animate({left: r+'px'}, 800);
mediaPlayer=$('sav');
videos.append(controls);
hookElementSelection.append(videos);
if(localStorage['pausedsrc'] == undefined)
{
console.log("hmm")
}
else{
var seek1=document.getElementById('seek1');
var vids=document.getElementById('sav1');
var vids1=document.getElementById('sav');
pausedvideos  = localStorage["pausedsrc"].split("###");
pausedtime  = localStorage["pausedtime"].split("###");
var file1=pausedvideos[1];
//var file2=pausedtime[]
console.log(file1);
//vids.src=file1;
vids.setAttribute('src',file1);
var t=pausedtime[1];
console.log(t);
localStorage.removeItem("pausedsrc");
console.log(localStorage["pausedsrc"]);
localStorage.removeItem("pausedtime");
seek1.value=t;
console.log(dura);
timetrack(t, file1.duration);
var pauseresult=false;
vids1.addEventListener('loadedmetadata', function() {
  this.currentTime = t;
}, false);

}

if(localStorage['pausednormal'] == undefined)
{
console.log("hmm")
}
if(localStorage['pausednormal']){
var seek1=document.getElementById('seek1');
var vids=document.getElementById('sav1');
var vids1=document.getElementById('sav');
pausedvideos1  = localStorage["pausednormal"].split("###");
pausedtime1 = localStorage["pausednormaltime"].split("###");
var filevid=pausedvideos1[1];
//var file2=pausedtime[]
console.log(filevid);
//vids.src=file1;
vids.setAttribute('src',filevid);
var t1=pausedtime1[1];
console.log(t1);
localStorage.removeItem("pausednormal");
console.log(localStorage["pausednormal"]);
localStorage.removeItem("pausednormaltime");
seek1.value=t1;
console.log(dura);
timetrack(t1, filevid.duration);
var pauseresult=false;
vids1.addEventListener('loadedmetadata', function() {
  this.currentTime = t1;
}, false);

}


var a=data.length;
console.log(a);
var tag = $("<div class='loading'></div>");
$('.play').on('click',function(event){
var btn = $('play-pause-button');
var srcidval= document.getElementById('sav1');
var vid=document.getElementById('sav');
   if (vid.paused || vid.ended) {
      btn.title = 'pause';
      btn.innerHTML = 'pause';
      btn.className = 'pause';
      source1=srcidval.src;
	  currtime1=vid.currentTime;
	  if(vid.ended)
	  {
localStorage.removeItem("pausednormal");
localStorage.removeItem("pausednormaltime");
	  }
	  else{
	  
	  localStorage['pausednormal']=localStorage['pausednormal']+'###'+source1;
	  localStorage['pausednormaltime']=localStorage['pausednormaltime']+'###'+currtime1;
	  
	  }
	  vid.play();
	  //vid.currentTime(15);
	 
	 
   }
   else {
      btn.title = 'play';
      btn.innerHTML = 'play';
      btn.className = 'play';
      vid.pause();
	  console.log(srcidval.src);
	 if(pausevid==true)
	 {
	  source=srcidval.src;
	  currtime=vid.currentTime;
	  console.log(vid.currentTime);
	  localStorage['pausedsrc']=localStorage['pausedsrc']+'###'+source;
	  localStorage['pausedtime']=localStorage['pausedtime']+'###'+currtime;
	}
	else{
	source=srcidval.src;
	  currtime=vid.currentTime;
	  console.log(vid.currentTime);
	  localStorage['pausedsrc1']=localStorage['pausedsrc1']+'###'+source;
	  localStorage['pausedtime1']=localStorage['pausedtime1']+'###'+currtime;
	
	}
  }
});

$('.simply').on('click',function(event){
location.reload();
});
$('.fullscreen').on('click',function(event){
//console.log("fullscreen");
var vidid= document.getElementById('sav');
var srcid= document.getElementById('sav1');
var controlid=document.getElementById('video-controls');
$('.testing').fadeOut();
var load = $("<p align='right'></p>");
vidid.setAttribute('class','customvideo');
controlid.setAttribute('class','customcontrol');
//load.append(controlid);
result=true;
var timing=document.getElementById('seek1');
pausevid=true;
});

console.log("before duration")
$('video').on('play	',function(event){
var vid=document.getElementById('sav');
var test=document.getElementById('sav1');
var seek=document.getElementById('seek1');
var movebar=document.getElementById('moving');
//console.log(vid.duration);

//var time = vid.duration * ((seek.value) / 1);
//var time25= (vid.duration) * 0.25;
//console.log(test.src);
/*var desc=(videos123[test.src].description);
console.log(time);
if(time>=time25)
{
var title=$("<div class='slideRight'><h3>"+desc+"</h3>");
hookElementSelection.append(title);
console.log("done yo");
} */
//vid.currentTime = time;
});
var movebar=document.getElementById('moving');
movebar.addEventListener("change", function() {
  // Calculate the new time
  console.log("heyyya")
  var time = vid.duration * (movebar.value / 100);

  // Update the video time
  vid.currentTime = time;
});
vid=$('.sav');
//console.log(window);
function timetrack(currentTime, duration){
    $("#current").text(currentTime);
    $("#duration").text(duration);
}


// Update the seek bar as the video plays

	$('video').on('timeupdate', function(event){
		// Calculate the slider value
		//console.log("timeupdate2");
		var dur=vid.duration;
		var test=document.getElementById('sav1');
		var seek=document.getElementById('seek1');
		var movebar=document.getElementById('moving');
		var value = (100 / vid.duration) * vid.currentTime;
		var approx=Math.floor(value)
		// Update the slider value
	seek.value = approx ;
	movebar.value=approx;
	timetrack(this.currentTime, this.duration);
	//console.log(seek.value);
	//$('#video-controls').append(value);
	var desc=(videos123[test.src].description);
		var nam=(videos123[test.src].name);
	var namevideo=$("<div><h3>"+value+"</h3>");
	//$('#video-controls').append(namevideo);
	//console.log($('#seek').value);
	
	if(result==true)
		{
		$('.slidetop').fadeOut();
		$('.slideRight').fadeOut();
		}
	
	if(approx>0)
	{
		if(result==false)
		{
		var namevideo=$("<div class='slidetop'><h3>"+nam+"</h3>");
		hookElementSelection.append(namevideo);
		}
		else
		{
		var namevideo=$("<div class='slidetop1'><h3>"+nam+"</h3>");
		hookElementSelection.append(namevideo);
		}
	}
	if(approx==25)
	{
	//console.log(value);
	if(result==false)
	{
	var title=$("<div class='slideRight'><h3>"+desc+"</h3>");
	hookElementSelection.append(title);
	//$('#video-controls').append(value);
	}
	else
	{
	var title1=$("<div class='slideRight1'><h3>"+desc+"</h3>");
	hookElementSelection.append(title1);
	}
	console.log("done yo");
	}
	if(approx==100)
	{
		if(result==false)
		{
		$('.slidetop').fadeOut();
		$('.slideRight').fadeOut();
		}
		else{
				$('.slidetop').fadeOut();
				$('.slideRight').fadeOut();
				for(var i=0;i<6;i++)
				{
					fullarr.push(arr1[i]);
					
				}
				$('video').on('ended', function(event){
			     var i3=fullarr.pop();
				 newfile=data[i3]["content-url"];
				test.setAttribute('src',newfile)
				$('.slidetop1').fadeOut();
				$('.slideRight1').fadeOut();
				vid.load();
				vid.play();
				//$('.slidetop').fadeOut();
				//$('.slideRight').fadeOut();
				console.log("yahooo");
				});
		     //console.log(fullarr);
		}
	}
	}); 

/*	vid.on('play', function(event) {  
    var progressbar = $('#progressbar'),  
        max = progressbar.attr('max'),  
        time = (1000/max)*5,      
        value = progressbar.val();  
  
    var loading = function() {  
        value += 1;  
        addValue = progressbar.val(value);  
          
        $('.progress-value').html(value + '%');  
  
        if (value == max) {  
            clearInterval(animate);                      
        }  
    };  
  
    var animate = setInterval(function() {  
        loading();  
    }, time);  
}); */ 
	

//autoplay onended="run()"
	
	for(var i=0;i<a;i++)
	{
	
		//arr.push(i);
		j=arr[i];
		//z=arr1[i];
		//console.log(j)
		//console.log(arr[j]);
		
		var x=data[j]["thumb-url"];
		var b=data[j]["content-url"];
		var vname=data[j]["name"];
		var vdesc=data[j]["description"];
		var idval=data[j]["id"];
		if(i==1)
		{
		videos123[data[0]["content-url"]]= data[0];
		videos123[data[j]["content-url"]]= data[j];
		}
		else
		{
		videos123[data[j]["content-url"]]= data[j];
		}
	//console.log(idval);
		//console.log(b);
	//	console.log(watchedvideos);
		//localStorage.clear();
		
		if(localStorage['watched'] == undefined)
		{
		var img=$("<img id="+idval+" class='testing' width='200' height='150' src="+x+" data-video="+b+">");
		hookElementSelection.append(img)
		//console.log("savio is mad");
		}
		else{	
				var	watchedvideos  = localStorage["watched"].split("###");
			//console.log(watchedvideos);
			//console.log(watchedvideos);
				for(var n=0;n<watchedvideos.length;n++)
				{
				
				if(data[i]["content-url"]==watchedvideos[n])
					{
					//console.log(i);
				//	console.log(data[i]["content-url"]);
				//	console.log(watchedvideos[n])
					//console.log(arr1)
						
					var arr2=arr1.splice($.inArray(i,arr1),1);
					var arr3=arr2.pop();
				    arr1.push(arr3);
					//console.log(arr1);
					//savio();
					//arr4=arr1.shift();
				   //while(arr1.length > -1)

				   
					//x=data[arr1[]]["thumb-url"];
		            //b=data[arr1[]]["content-url"];
					//console.log(arr3);	
					
				//	var img=$("<img id="+idval+" class='testing' width='200' height='150' src="+x+" data-video="+b+">");
				//	hookElementSelection.append(img)
					 
				/*	if(arr2 > -1)
					{
					//console.log("unwatched")
					var arr4=arr2.shift();
					console.log(arr4);
					b1=arr4;

					k1=arr1[0]
					//console.log(arr3);
					x=data[b1]["thumb-url"];
		            b=data[b1]["content-url"];
						
					var img1=$("<img id="+idval+" class='testing' width='200' height='150' src="+x+" data-video="+b+">");
					hookElementSelection.append(img1)
					
					} */

					
					
					
					}
				}	
				//console.log(arr2);
				//console.log(arr1);					//x=data[b1]["thumb-url"];
		            //b=data[b1]["content-url"];
					//console.log(i);
				//	console.log(idval);
					//console.log(b);
					//console.log(x);
				
					
					
					
					
					
				
			}
		/*	if(localStorage['watched'] != undefined && i==5)
			{
			//for(g=0;g<arr1.length;g++)
			//console.log(arr1.length);
			for(y=0;y<6;y++)
			{
			var h=arr1[y];
			
			x=data[h]["thumb-url"];
			b=data[h]["content-url"];
			//name=data[h]["name"];
			//desc=data[h]["description"];
			//idval=data[h]["id"];
			console.log(idval);
			var img1=$("<img id="+idval+" class='testing' width='200' height='150' src="+x+" data-video="+b+">");
			hookElementSelection.append(img1);
			}
		} 	 */
		//var img=$("<img id="+idval+" class='testing' width='200' height='150' src="+x+" data-video="+b+">");
		//hookElementSelection.append(img)
		var vid=document.getElementById('sav');
		var srcid=document.getElementById('sav1');
		$("#"+idval).on('click',function(event){
		
		vid.pause();
		//console.log(idval);
		//console.log(b);
		//console.log(x);
		var newfile=$(this).attr('data-video');
		console.log("newfile"+newfile);
		//localStorage.clear();
		if(localStorage['watched'] == undefined)
		{
		
		//console.log("clicked");
		//localStorage.clear();
		localStorage['watched']=newfile;
		//console.log(localStorage['watched']);
		//console.log(watchedvideos);
		}
		else if(localStorage['watched'] != undefined)
		{
		//localStorage.clear();
		localStorage['watched']=localStorage['watched']+'###'+newfile;
		console.log(localStorage['watched']);
		
		}
		
	//	var newfile=$(this).attr('data-video');
		//console.log($(this).attr('data-video'));
		//var namevid=videos123[newfile].name;
		//$('#video-container').append(namevid);
		srcid.setAttribute('src',newfile)
			//console.log(newfile);
		$('.slidetop').fadeOut();
		$('.slideRight').fadeOut();
		vid.load();
		vid.play();
		//console.log(watchedvideos);
			//console.log(watchedvideos);	
	});
	}

//console.log(videos123['http://buffalogrove.sat.iit.edu/Kitty.mp4'])
	/*$.each(sample.videos, function(i, video) {
			//video.render(hookElementSelection);
				
		});*/

if(localStorage['watched'] != undefined)
{
	for(var i1=0;i1<6;i1++)
	{
		var d1=arr1[i1];
		var x1=data[d1]["thumb-url"];
		var b1=data[d1]["content-url"];
		var vname1=data[d1]["name"];
		var vdesc1=data[d1]["description"];
		var idval1=data[d1]["id"];
		var img1=$("<img id="+idval1+" class='testing' width='200' height='150' src="+x1+" data-video="+b1+">");
		hookElementSelection.append(img1)
	$("#"+idval1).on('click',function(event){
		
		vid.pause();
		//console.log(idval);
		//console.log(b);
		//console.log(x);
		var newfile=$(this).attr('data-video');
		console.log("newfile"+newfile);
		//localStorage.clear();
		if(localStorage['watched'] == undefined)
		{
		
		//console.log("clicked");
		//localStorage.clear();
		localStorage['watched']=newfile;
		//console.log(localStorage['watched']);
		//console.log(watchedvideos);
		}
		else if(localStorage['watched'] != undefined)
		{
		//localStorage.clear();
		localStorage['watched']=localStorage['watched']+'###'+newfile;
		console.log(localStorage['watched']);
		
		}
		
		srcid.setAttribute('src',newfile)

		$('.slidetop').fadeOut();
		$('.slideRight').fadeOut();
		vid.load();
		vid.play();
	});
}	
	
	
	}
});

};


})(window.sample = window.sample || {} , jQuery)