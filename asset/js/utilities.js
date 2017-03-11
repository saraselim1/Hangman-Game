function disableKeyboard(alphabet)
{
	for( var i = 0 ; i < alphabet.length ; i++ )
	{
		var letter = document.getElementById(alphabet[i]);
		letter.setAttribute('disabled','disabled');
		letter.style.pointerEvents = 'none';
		letter.style.opacity = 0.3;
	}	
}

