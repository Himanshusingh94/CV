var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern =[];

var level = 0;

var started = false;

var points = 0;

$(document).keypress(function(event){
if(!started){
$("#main-text").text(" Level " +level);
nextSequence();
started=true;
}
});



$(".btn").click(function(){
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);

playSound(userChosenColor);

animatePress(userChosenColor);
checkAnswer(userClickedPattern.length - 1);

});



function nextSequence(){

userClickedPattern =[];


 level++;
$("#main-text").text(" Level " +level);
points = (level * 10);


$("#points").text(+points);
var randomNumber = Math.floor(Math.random() * 4);

var randomChosenColor = buttonColors[randomNumber];

gamePattern.push(randomChosenColor);

$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); 
playSound(randomChosenColor);
}


function playSound(name){
var audio = new Audio("sound/" +name+ ".mp3");
audio.play();
}

function animatePress(currentColor){
$("#"+currentColor).addClass("pressed");
setTimeout(function(){$("#"+currentColor).removeClass("pressed");},1000);
}

function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
console.log("success");

if(gamePattern.length===userClickedPattern.length){
setTimeout(function () {
nextSequence();
},1000);
}
}else{
  console.log("wrong");
playSound("wrong");
$("body").addClass("gameOver");
setTimeout(function(){
$("body").removeClass("gameOver");
},200);
$("#main-text").text("Game Over, Press Any Key to Restart");
startOver();

}
}



function startOver(){
level = 0;
gamePattern = [];
    started = false;
    points = 0;
$("#points").text(points);
}