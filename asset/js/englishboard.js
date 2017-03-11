var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        		'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
				'q', 'r', 's','t', 'u', 'v', 'w', 'x', 
				'y', 'z'];


var lives = 0;
var rightGuesses = 0;
var currentCategory;


function drawEnglishKeyboard(value)
{
	//var myselect = document.getElementById("EnglishCategoriesID").value;
	var myselect = value;
	//console.log(myselect+"test");
	
	if( myselect == 1 || myselect == 2 || myselect == 3 )
	{
		lives = 0;
		rightGuesses = 0;
		currentCategory = myselect;
		var test = readjsonenglish(myselect);
		//console.log(test.hint+"hint");
		document.getElementById("englishhint").innerHTML = test.hint;
		//console.log(test);
		var word = test.name;
		
		var keyboard = document.getElementById("keyboard");
		$('#keyboard').empty();

		for( var i = 0 ; i < alphabet.length ; i++ )
		{
			//draw keyboard
			var letter = document.createElement("li");
			letter.innerHTML = alphabet[i];
			letter.setAttribute('class','letter');
			letter.setAttribute('id',alphabet[i]);
			keyboard.appendChild(letter);
		}	


		//draw the underscores with the number of the word chatacters
		var guesses = document.getElementById("guesses");
		$('#guesses').empty();
		var y = 500;
		for( var j = 0 ; j < word.length ; j++ )
		{
			var myspan = document.createElement('span');
			myspan.setAttribute('id',j+"english");
			//myspan.style.position = 'absolute';
			myspan.style.top = '250px';
			myspan.style.left = y+'px';
			y += 30;

			myspan.innerHTML = ' _ ';
			guesses.appendChild(myspan);
		}



		//handle the action of clicking any keyboard char
		$('#keyboard li').click(function()
		{
			var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

			// Code for processing the key.


			//disable the entered key
			var char = document.getElementById(character);
			if( !char.hasAttribute('disabled')  )
			{
				//make the character disabled to prevent user from clicking it again
				char.setAttribute('disabled','disabled');
				char.style.pointerEvents = 'none';
				char.style.opacity = 0.3;

				//check if the character is exist in the word and put it in the rigth place
				if( word.indexOf(character) != -1 )
				{
					var x = -1;
					while ( (x = word.indexOf(character, x+1)) != -1 )
					{
						var myspan = document.getElementById( x+"english" );
						//var rect = myspan.getBoundingClientRect();
						//console.log(rect.left);
						myspan.innerHTML = character;
						rightGuesses++;
					}

					//if the right guesses equal to the word length so the player won
					if( rightGuesses == word.length )
					{
						//alert("you won!!");
						//start the song and make the person smoke

						//disable all the letters
						victoryMessage();
						disableKeyboard(alphabet);
					}

				}else
				{
					lives++;
					var pos=(lives*-75) +"px";
					$('#hangman').css("left",pos);
					
					//draw the part of the person depends on the value of the lives
					if( lives == 6 )
					{
						//disable all the letters
						defeatMessage();
						disableKeyboard(alphabet);
						//alert("your Attempts finished");
						//start the sad song and supposed now the whole person is drew
					}
				}

			}


		});
	}else
	{
		location.hash = '#';
	}
}

function newMystery()
{
	drawEnglishKeyboard(currentCategory);
}


function clear()
{
	rightGuesses = 0;
	lives = 0;
}



