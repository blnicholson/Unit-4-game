$(document).ready(function () {
//     console.log("ready!");


    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var randomGoal;

    var crystalValue1;
    var crystalValue2;
    var crystalValue3;
    var crystalValue4;

    // Generate random number for user to try to guess/add up to with buttons.

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    randomGoal = getRandomInt(19, 120);
    $("#goalNumber").text(randomGoal);

    // Generate random numbers and assign them to gems.

    crystalValue1 = getRandomInt(1, 12);
    crystalValue2 = getRandomInt(1, 12);
    crystalValue3 = getRandomInt(1, 12);
    crystalValue4 = getRandomInt(1, 12);

    console.log("Crystal one: " + crystalValue1);
    console.log("Crystal two: " + crystalValue2);
    console.log("Crystal three: " + crystalValue3);
    console.log("Crystal four: " + crystalValue4);


    function tally() {
    if (totalScore === randomGoal) {
        wins++;
    } else if (totalScore > randomGoal) {
        losses++;
        console.log(tally());
    }
    }
    
    // Push value of crystals to total score when clicked, 

    $("#gem1").click(function () {
        $("#total-score").html(totalScore + crystalValue1);
        // Adds value of clicked gem to total score
        totalScore = totalScore + crystalValue1;
        tally();
    })

    $("#gem2").click(function () {
        $("#total-score").html(totalScore + crystalValue2);
        totalScore = totalScore + crystalValue2;
        tally();

    })

    $("#gem3").click(function () {
        $("#total-score").html(totalScore + crystalValue3);
        totalScore = totalScore + crystalValue3;
        tally();

    })

    $("#gem4").click(function () {
        $("#total-score").html(totalScore + crystalValue4);
        totalScore = totalScore + crystalValue4;
        tally();

    };





    // Restarts, generates random numbers all around


    


//]);
