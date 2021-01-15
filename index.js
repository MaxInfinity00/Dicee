var dice1 = Math.ceil(Math.random()*6);
var dice2 = Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src","images/dice"+dice1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+dice2+".png");

var heading = document.querySelector("h1");
if(dice1===dice2){
  heading.textContent = "Draw!";
}
else if(dice1>dice2){
  heading.textContent = "Player 1 Wins!";
}
else if(dice2>dice1){
  heading.textContent = "Player 2 Wins!";
}
else{
  heading.textContent = "Refresh Me";
}
