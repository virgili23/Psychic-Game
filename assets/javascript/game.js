var choices=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var wins = 0;
var guessesLeft = 9;
var losses = 0;


//These are the guesses you've made so far
var guesses = [];

// User's Guess is stored here
var myGuess = null;

console.log(choices);


// computer guesses a letter
var computerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log(computerChoice);


// User's choice to be picked
var userChoice = [];



// Function for what happens when you let go of a key

document.onkeyup = function (event) {

    // input for myGuess
    var myGuess = String.fromCharCode(event.keyCode).toLowerCase();

    

    if (guesses.indexOf(myGuess) < 0 && choices.indexOf(myGuess) >= 0) {
		guesses[guesses.length] = myGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
	}

    // If user guesses a letter correctly, 1 win, else, minus one guesses left
    if (computerChoice == myGuess) {
        wins++;
        console.log("You're Psychic!");
        guessesLeft = 9;
        guesses = [];
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log("Wins: " + wins + 
        " Losses: " + losses + " GuessesLeft: " + guessesLeft + 
        " Guesses so far: " + guesses + " Computer picked: " + computerChoice);

    } 


    // if guesses left equals 0, reset function runs
    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;  
        guesses = [];
        computerChoice = choices[Math.floor(Math.random() * choices.length)]; 
    }

    // Log results into html

    var html = "<p><h1>The Psychic Game!</h1></p><br>" + 
    "<p><h4>Guess what letter I\'m thinking of</h4></p><br>" + 
    "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + 
    "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses: " +
     guesses + "</h4></p>";
	// place html into the game ID
	document.querySelector(".results").innerHTML = html;

}









// reset button 














