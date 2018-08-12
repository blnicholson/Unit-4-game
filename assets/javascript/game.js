$(document).ready(function() {
//global variables
var wins = 0;
var losses = 0;
$("#countWin").text(wins);
$("#losses").text(losses);

var imageValue1 = randomNum(1, 12);
var imageValue2 = randomNum(1, 12);
var imageValue3 = randomNum(1, 12);
var imageValue4 = randomNum(1, 12);
var choosenNumber = randomNum(19,121);
$("#randomNumber").text(choosenNumber);

//counter variable and jquery to show on page
var counter=0;
$("#scoreCounter").text(counter);

//restart game function
function restart() {
    counter=0;
    $("#scoreCounter").text(counter);
    choosenNumber = randomNum(19, 120);
    $("#randomNumber").text(choosenNumber);
    imageValue1 = randomNum(1, 12);
    imageValue2 = randomNum(1, 12);
    imageValue3 = randomNum(1, 12);
    imageValue4 = randomNum(1, 12);
}

//function used to select random number between a min and max
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Win function
function winCount() {
    wins++;
    alert("You were able to match the Sorting Hat!  Keep Going!");
    $("#countWin").text(wins);
    restart();
    reset();
}

//loss function
function lose() {
    losses++;
    alert("You guessed higher then the Sorting! Keep Trying!");
    $("#losses").text(losses);
    restart();
    reset();
}

//function that resets game when wins or losses is greater then 5
function reset() {
    if (wins > 4) {
        alert("Congratulations and Welcome to Hogwarts!")
        wins = 0;
        $("#countWin").text(wins);
        losses = 0;
        $("#losses").text(losses);
        restart();
    }
    else if (losses > 4) {
        alert("Game Over!")
        wins = 0;
        $("#countWin").text(wins);
        losses = 0;
        $("#losses").text(losses);
        restart();
    }
}

//jQuery on click events that run the game
$("#gryffindor").on("click", function () {
    counter += imageValue1;

    $("#scoreCounter").text(counter);

    if (counter === choosenNumber) {
        winCount();
    }
    else if (counter >= choosenNumber) {
        lose();
    }
});
$("#ravenclaw").on("click", function () {
    counter += imageValue2;

    $("#scoreCounter").text(counter);

    if (counter === choosenNumber) {
        winCount();
    }
    else if (counter >= choosenNumber) {
        lose();
    }
});
$("#slytherin").on("click", function () {
    counter += imageValue3;

    $("#scoreCounter").text(counter);

    if (counter === choosenNumber) {
        winCount();
    }
    else if (counter >= choosenNumber) {
        lose();
    }
      
    
});
$("#hufflepuff").on("click", function () {
    counter += imageValue4;

    $("#scoreCounter").text(counter);

    if (counter === choosenNumber) {
        winCount();
    }
    else if (counter >= choosenNumber) {
        lose();
    }

});
});