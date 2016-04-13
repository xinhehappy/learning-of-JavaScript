function setup(){
	if(!document.getElementById) return;
	var divs=document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++) {
		document.write('<embed id="' + 'note_' + 'divs[i].id' + '"');
		document.write('src="' + 'divs[i].id' + '.mp3" width="0" heigh="0"' );
		document.write('autostart="false" enablejavascript="true">');
		divs[i].onClick=playPiano;
	}
}
function playPiano (e) {
	if(!e) var e=window.event;
	//whick key was clicked?
	var thiskey=(e.target)? e.target : e.srcElement;
	var sound = document.getElementById("note_"+thiskey.id);

	try{
		//RealPlayer
		sound.DoPlay();
	}catch(e){
		try{
			//windows media quicktime
			sound.Play();
		}catch(e){
			alert("no sound support");
		}
	}
}

setup();