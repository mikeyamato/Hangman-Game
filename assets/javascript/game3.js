// this is me following instructions based on Js for kids

// Pick a random word

// While the word has not been guessed {
// 	Show the player their current progress
// 	Get a guess from the player
	
// 	If the player wants to quit the game {
// 		Quit the game
// 	}

// 	Else If the guess is not a single letter {
// 		Tell the player to pick a single letter
// 	}

// 	Else {
// 		If the guess is in the word {
// 			Update the player's progress with the guess
// 		}
// 	}
// }
// Congratulate the player on guessing the word

var wordOptions = ["rebecca", "michelle", "harry", "peter", "gabriel"];
	// var words

var chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	// var word

var answer = [];
	// var answerArray
for (var i = 0; i < chosenWord.length; i++) {

    answer[i] = "_";
   	// how does the system know to put in a comma to separate it? 
}


// next create variable to track what letters remain

var remainingLetters = chosenWord.length; 

console.log(chosenWord);
console.log(answer);
console.log(remainingLetters);

// so far to this point everything works

// var userSelect = [];
	// var guess



var status = [];
status = answer.join(" ");



while (remainingLetters > 0) {


	status = answer.join(" ");
	// dispays the players current status of what letters remain to be guessed
	// var remaingLetters
	// .join(" ") gets rid of the comma between each character

	var userSelect = [];

	window.onkeyup = function(event) {
		userSelect = event.key.toLowerCase();		
		console.log(userSelect); 
	

	for(var j = 0; j < chosenWord.length; j++) {
				if(chosenWord[j] === userSelect) {
					answer[j] = guess; 
					remainingLetters--; 
				}		
		}

	}

// while (remainingLetters > 0) {


	console.log(status);

// 		for(var j = 0; j < chosenWord.length; j++) {
// 				if(chosenWord[j] === userSelect) {
// 					answer[j] = guess; 
// 					remainingLetters--; 
// 				}		
// 		}
// }


var html =
          "<p>You chose: " + userSelect + " </p>";
          // "<p>The computer chose: " + computerGuess + "</p>" +
          // "<p>wins: " + wins + "</p>" +
          // "<p>losses: " + losses + "</p>" +
          // "<p>ties: " + ties + "</p>"
          // "<p>Word: " + ? + " </p>";
          	//try splice() to swap out characters

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;



}



	// will keep looping as long as remainingLetters > 0 remains true.
	// Game code goes here
	// Show the player their progress
	// Take input from the player
	// Update answerArray and remainingLetters for every correct guess
		  
		  // typedLetters.push(foundLetter);
		  // // pushes the key entry to the variable above 
		  // foundLetter = chosenWord.indexOf(userSelect, foundLetter + 1);
