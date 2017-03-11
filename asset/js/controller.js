var soundval;
function gameScreen()
{
	$('#gameContent').empty();

playMusic(1);

	$('#gameContent').append('<img name="track1" src="mute.png" width="45" height="45" border="0" id="track1"/>');
	$('#gameContent').append('<div id="pixHolder"><img id="hangman" src="man.png"></div>');
var  myEl = document.getElementById('track1');
	
	myEl.addEventListener('click', function() {

		if(myEl.src.includes("mute.png")){
	  		playMusic(0);
		myEl.src= "sound.png";
	}else {
		playMusic(1);
		myEl.src= "mute.png";
	}
	});
}//gamescreen


function gameScreen1()
{
	$('#gameContent1').empty();

playMusic(1);

	$('#gameContent1').append('<img name="track11" src="mute.png" width="45" height="45" border="0" id="track11"/>');
	$('#gameContent1').append('<div id="pixHolder1"><img id="hangman1" src="man.png"></div>');
var  myEl = document.getElementById('track11');
	
	myEl.addEventListener('click', function() {

		if(myEl.src.includes("mute.png")){
	  		playMusic(0);
		myEl.src= "sound.png";
	}else {
		playMusic(1);
		myEl.src= "mute.png";
	}
	});
}//gamescreen


function playMusic(bol){
	
	if(bol == 1){
		gameSound = new Audio('game.mp3');
		gameSound.loop = true;
		if (gameSound.paused) {
		gameSound.play();
	}
	}
	else {
		gameSound.currentTime = 0;
		gameSound.pause();
	}
}

function victoryMessage(){
	//document.activeElement.blur();

	$('#pixHolder').append("  <img id=\"glasses\" src=\"glasses.png\">");
	thug();

}//victory

function victoryMessage1(){
	//document.activeElement.blur();

	$('#pixHolder1').append("  <img id=\"glasses\" src=\"glasses.png\">");
	thug();

}//victory

function defeatMessage(){
	//document.activeElement.blur();
	lose = new Audio('lose.mp3');
	lose.loop = false;
	if (lose.paused) {
		lose.play();
	}
	else {
		lose.pause();
	}
	
}//defeat


	//});//doc ready



	function thug() {
		glasses = document.getElementById('glasses');
		audio = new Audio('thug-life.mp3');
		audio.loop = false;
	if (audio.paused) {
	//message.textContent = "U";
	glasses.style.animationPlayState = 'running';
	audio.play();
	}
	else {
	glasses.style.animationPlayState = 'paused';
	audio.pause();
	}
}
