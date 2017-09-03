//this was me trying to figure this out on my own


var wordOptions = ["rebecca", "michelle", "sandra", "harry", "arthur", "peter", "wishbone", "al", "gabriel"];
var chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
var spelledWord = [];


console.log(chosenWord);


for (var i = 0; i < chosenWord.length; i++) {
		    // console.log(chosenWord.charAt(i));
		    spelledWord.push(chosenWord.charAt(i));
		    
		}


console.log(spelledWord)

var allUserSelect = [];

		window.onkeyup = function(event){
			userSelect = event.key.toLowerCase();
			allUserSelect.push(userSelect);
			console.log(userSelect); 
			console.log(allUserSelect);

			// if (userSelect in objectConverter(spelledWord)) {
			// 	alert("yes!");
			// } else {
			// 	alert("try again");
			// }

		//why does this work in finding letters? 
		var typedLetters = [];
		var foundLetter = chosenWord.indexOf(userSelect);
		// this is a string.prototype.indexof()
		// returns -1 if the value is not found
		// 0 = found
		while (foundLetter != -1) {
		  typedLetters.push(foundLetter);
		  // pushes the key entry to the variable above 
		  foundLetter = chosenWord.indexOf(userSelect, foundLetter + 1);
		}
		console.log(typedLetters);
		// this will let me know if there's a match




		var html =
          "<p>You chose: " + allUserSelect + " </p>";
          // "<p>The computer chose: " + computerGuess + "</p>" +
          // "<p>wins: " + wins + "</p>" +
          // "<p>losses: " + losses + "</p>" +
          // "<p>ties: " + ties + "</p>"
          // "<p>Word: " + ? + " </p>";
          	//try splice() to swap out characters

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;



}

