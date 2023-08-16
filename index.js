var randomNumber1 = Math.floor( (Math.random()*6) + 1 );
var randomNumber2 = Math.floor( Math.random()*6 + 1 );

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , "images/" + randomDiceImage1 ); // images/dice1.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , "images/" + randomDiceImage2 );

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent="🚩Player1 Win!"

}else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent="🚩Player2 Win!"

}else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent="🪢Both TIE!"
}