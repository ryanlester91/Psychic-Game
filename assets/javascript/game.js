//Game variables- Setting variables to their defaults
//=============================================
var wins = 0;
var loss = 0;
var guesses = 10;
var usedArray = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerChoice = computerChoice;
//==============================================
//GENERATING THE MYSTERY LETTER (computerChoice)
//==================================================
computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);

    function jsGuess() {
      computerChoice = letters[Math.floor(Math.random() * letters.length)];
      console.log(computerChoice);
    }
    

//PLAYER INPUTS LETTER GUESS
//================================================
document.onkeyup = function(event) {
  var userGuess = event.key;

// HANDLING CORRECT GUESSES
      //test if the user's guess matches the computer's choice, if true, increment of win by 1, and clears used letters array. 
      if (userGuess === computerChoice) {
		wins++;
		guesses = 10;
		usedArray = [];

  }

//HANDLING INCORRECT GUESSES
  // if player guess does not equal computer's choice, decrement of guesses by 1
  jsGuess();
  if (userGuess !== computerChoice) {
		guesses--;

  }


// if remaining guesses run out, increment of loss by 1, guesses reset to 10, and clears used letters array.
  if(guesses == 0) {
	  loss++;
	  usedArray = [];
	  guesses = 10;
	}

	//HANDLING INCORRECT GUESSES - PART 2
		  //Stops a letter selected for a 2nd time from being written into the usedArray again, although it still counts as a guess
		  if (usedArray.indexOf(userGuess) >= 0) {
	} 
		else {
		  //this pushes the players incorrect guess to the usedArray and writes it to the HTML
		  usedArray.push(userGuess);
		  document.getElementById('userGuess').innerHTML = usedArray;
		  console.log(usedArray);
	
	}
	
	//OUTPUT TO HTML
		  //these statements write the values/scores generated to the HTML
		  document.getElementById('wins').innerHTML = wins;
		  document.getElementById('loss').innerHTML = loss;
		  document.getElementById('guesses').innerHTML = guesses;
	
	}