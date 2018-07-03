
var targetNumber =integer(19,120);
var counter=0;

function integer(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}
var randNum = (integer(1,12));
$("#randomNumber").text(targetNumber)
$("#gryffindor").on("click", function() {
    counter += randNum;
    alert(counter);
});





