const RainbowArray = ['star-purple.png'];

const scoreId = document.querySelector("#score");
let score = 0;
 console.log("test")
function addScore() {
  score++;    // score++ means score=score+1
  scoreId.innerText = score;
  console.log(Math.random())
}
const Rainbow = document.querySelector("#Rainbows");
Rainbow.addEventListener("click",addScore);

function moveRainbow(){
 Rainbow.style.top = Math.random()*500+'px';
  Rainbow.style.left = Math.random()*1300+'px'

  var randomNum = Math.floor(Math.random()*RainbowArray.length);
  var newRainbow = RainbowArray[randomNum];

 Rainbow.src = newRainbow;
}
setInterval(moveRainbow,1000);

function gameOver() {
	document.querySelector("#gameOver").style.display = 'block';
	Rainbow.style.display = 'none';
}

setTimeout(gameOver,20000);