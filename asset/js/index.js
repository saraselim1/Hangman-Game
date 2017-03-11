/*Ali area */
/*Mostafa area*/
/*Moamen area*/
/*Yasmin area*/
/*Sara area*/

function goToArabicGamePage(value)
{
	value = document.getElementById("ArabicCategoriesID").value;
	document.getElementById("ArabicCategoriesID").value = -1;
	if( value == 1 || value == 2 || value == 3  )
		location.hash = 'arabicgamepage';
}

function goToEnglishGamePage(value)
{
	value = document.getElementById("EnglishCategoriesID").value;
	document.getElementById("EnglishCategoriesID").value = -1;
	if( value == 1 || value == 2 || value == 3  )
		location.hash = 'englishgamepage';
}

function goToCategoryPage()
{
	$('#gameContent').empty();
	$('#gameContent1').empty();
	playMusic(0);
	location.hash = 'CAtegoryPage';
}

function clearManContent()
{
	playMusic(0);
	$('#gameContent').empty();
	$('#gameContent1').empty();
}



