function playDiceGame() {
let min = 1;
let max = 6;
let randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

document.querySelector(".img1").src = `./images/dice${randomNumber1}.png`;
document.querySelector(".img2").src = `./images/dice${randomNumber2}.png`;
  

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="Player1 wins! 🚩";
}else if (randomNumber2>randomNumber1){
    document.querySelector('h1').innerHTML="Player2 wins! 🚩";}
    else{document.querySelector('h1').innerHTML=" Draw! 🚩";};
}


const button = document.getElementById("start");
button.addEventListener("click", playDiceGame);