var alphabet1 = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د',
        		'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 
				'ظ', 'ع', 'غ','ف', 'ق', 'ك', 'ل', 'م', 
				'ن', 'ه','و','ى'];

var lives1 = 0;
var rightGuesses1 = 0;
var currentCategory1;


function drawArabicKeyboard(value)
{
	var myselect1 = value;
	console.log(myselect1+"test");
	
	if( myselect1 == 1 || myselect1 == 2 || myselect1 == 3 )
	{
		lives1 = 0;
		rightGuesses1 = 0;
		currentCategory1 = myselect1;
		
		var test1 = readjsonarabic(myselect1);
		console.log(test1.hint+"hint");
		document.getElementById("arabichint").innerHTML = test1.hint;
		console.log(test1);
		var word1 = test1.name;
	
		var keyboard1 = document.getElementById("keyboard1");
		$('#keyboard1').empty();
		
		for( var i = 0 ; i < alphabet1.length ; i++ )
		{
			//draw keyboard
			var letter = document.createElement("li");
			letter.innerHTML = alphabet1[i];
			letter.setAttribute('class','letter');
			letter.setAttribute('id',alphabet1[i]);
			keyboard1.appendChild(letter);
		}	


		//draw the underscores with the number of the word chatacters
		var guesses1 = document.getElementById("guesses1");
		$('#guesses1').empty();
		var y = 550;
		for( var j = 0 ; j < word1.length ; j++ )
		{
			var myspan = document.createElement('span');
			myspan.setAttribute('id',j+"arabic");
			//myspan.style.position = 'absolute';
			myspan.style.top = '260px';
			myspan.style.left = y+'px';
			y += 30;

			myspan.innerHTML = ' _ ';
			guesses1.appendChild(myspan);
		}



		//handle the action of clicking any keyboard char
		$('#keyboard1 li').click(function()
		{
			var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

			// Code for processing the key.


			//disable the entered key
			var char = document.getElementById(character);
			if( !char.hasAttribute('disabled') )
			{
				//make the character disabled to prevent user from clicking it again
				char.setAttribute('disabled','disabled');
				char.style.pointerEvents = 'none';
				char.style.opacity = 0.3;

				//check if the character is exist in the word and put it in the rigth place
				if( word1.indexOf(character) != -1 )
				{
					var x = -1;
					while ( (x = word1.indexOf(character, x+1)) != -1 )
					{
						var myspan = document.getElementById( word1.length-1-x+"arabic" );
						//var rect = myspan.getBoundingClientRect();
						//console.log(rect.left);
						myspan.innerHTML = character+' &nbsp;&nbsp;';
						rightGuesses1++;
					}

					//if the right guesses equal to the word length so the player won
					if( rightGuesses1 == word1.length )
					{
						//alert("you won!!");
						//start the song and make the person smoke

						//disable all the letters
						victoryMessage1();
						disableKeyboard(alphabet1);
					}

				}else
				{
					lives1++;
					var pos=(lives1*-75) +"px";
					$('#hangman1').css("left",pos);
					//draw the part of the person depends on the value of the lives
					if( lives1 == 6 )
					{
						//disable all the letters
						defeatMessage();
						disableKeyboard(alphabet1);
						//start the sad song and supposed now the whole person is drew
					}
				}

			}


		});
	}
}

function newMystery1()
{
	drawArabicKeyboard(currentCategory1);
}





   


