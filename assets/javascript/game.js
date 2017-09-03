// display title, "press any key to start" text, wins & losses tally, 
// current word underscores based on the length of word, number of guesses remaining, guessed letters, 
// current word text


var spelledWord = [];
var chosenWordLength = [];
var wordOptions = [];
var userSelect = [];

// press any key to start 


		//what is the diff between document.onkeydown = function(){}; and what we are using?

	// element.addEventListener("keydown", function);
		//The first parameter is the type of the event (like "click" or "mousedown").
		//The second parameter is the function we want to call when the event occurs.
		//The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.


	window.onkeyup = function(){
	// window. is used because we are looking at the entire page and not just a document. which has a smaller window. 
		// var event = event.key;
		// we wil store this information for later use. we may or may not use it. but at least it's available. 
		// this is currently saving this information. do we close this in order to start the game then repeat to record the letter?

// a random word is selected by the computer

	wordOptions = ["Arthur", "Peter", "Wishbone", "Al", "Gabriel"];
	// game word options. This can live globally i believe. 

	chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	// basically this looks like "var chosenWord = wordOptions[x]"" where x is a number based on the number of variables.
	// code works so far. small victory. 


	console.log(chosenWord);
	console.log(chosenWord.length);
	var chosenWordLength = (chosenWord.length);	


	// user selects a character (this can include number and symbols)
		window.onkeyup = function(event){
			userSelect = event.key;
			
			// Converts the user's answer to lowercase.
      		userSelect = userSelect.toLowerCase();
			
			console.log(userSelect);
			// var guessedCharacters = String.fromCharCode(event.keyCode);
		}






// convert characters of selected word into _ symbol
// or do we just hide the word and display _ based on the length of the string?
  	
		
		for (var i = 0; i < chosenWord.length; i++) {
		    // console.log(chosenWord.charAt(i));
		    spelledWord.push(chosenWord.charAt(i));
		    console.log(spelledWord);
		}


  	// use regex?


// display the appropriate number of converted _












// game confirms character and compares it against the current word being
// played and ignores previously selected characters (correct & incorrect)



	// if (chosenWord.indexOf(userSelect) === -1) {
	//         alert("Nah! They're pretty lame...");
	//       }
	//       // If it is in the array...
	//       else {
	//         alert("OMG! I love them too!");




// if correct character, character replaces _ symbol






// if incorrect character, character is listed below "Guessed Characters"




// reduce the number of guesses by 1
// for(i=10;i>=1;i--){
// 	console.log(i);
// }


// loop until guessed correctly or incorrectly within the allowed character count




// game updates the win/loss & games played count

// var wins = 0;
// var losses = 0;
// var guessesLeft = 10;
// var guessedCharacters = [];

// clear guessed character list




// reset "remaining guesses" back to 10 (or whatever the number we choose)




// game removes word just played from play




// loop back to the start of the code where a random word is selected




// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.

// var html =
// "<p>wins: " + wins + "</p>" +
// "<p>losses: " + losses + "</p>" +
// "<p>Current word: " + chosenWord + "</p>" +
// "<p>Guesses remaining: " + guessesLeft + "</p>" +
// "<p>Guessed characters: " + guessedCharacters + "</p>" +

// Set the inner HTML contents of the #game div to our html string
// document.querySelector("#game").innerHTML = html;
	// #game is a CSS selector, that's why on the HTML page "game" is tied to an id.
	// why does " = html;" come at the end though?

}


// optional display clue for the word

// optional if time allows -- include countdown timer

// optional if time allows -- play sound effects



                                          
                                              

                                              
//         _         *beep beep*           _     
//        | ^                             | ^    
//	 	  |	  	                          |      
//        |     	_____  ~~~~~~~~~~~~   |      
//    	  |      __/ # # \__  ~~~~~~~~~~  |      
//    	  |     [___________]  ~~~~~~~~~~ |      
// **************(O)*****(O)*********************** 
                                                
                                                
