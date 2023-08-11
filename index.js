var player1Score = 0;
var player2Score = 0;

document.querySelector(".btn").addEventListener("click", diceGame);

function diceGame() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "./images/" + randomImage;

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSource2 = "./images/" + randomImage2;

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  updateScore();
}

function updateScore() {
  if (document.querySelector("h1").innerHTML === "🚩Player1 Wins!") {
    document.querySelector(".player1-score").innerHTML = ++player1Score;
  } else if (document.querySelector("h1").innerHTML === "Player2 Wins!🚩") {
    document.querySelector(".player2-score").innerHTML = ++player2Score;
  }
}
