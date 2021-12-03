const gameBoard = document.getElementById("gameBoard")
const racket = document.getElementById("racket")
const ball = document.getElementById("ball")

var racketObj = new(Object) 

racketObj.X = racket.offsetLeft
racketObj.L = racket.clientWidth
racketObj.Y = racket.offsetTop
racketObj.dX = 10

var ballObj = new(Object)
ballObj.X = ball.offsetLeft 
ballObj.Y = ball.offsetTop
ballObj.dX = 1
ballObj.dY = 1


function onArrowKeyDown(ev) {
   if (ev.code == "ArrowRight") {
      racketObj.X += racketObj.dX
   }

   if (ev.code == "ArrowLeft") {
      racketObj.X -= racketObj.dX
   }

   racket.style.left = racketObj.X + "px"
}

document.addEventListener("keydown", onArrowKeyDown)

function moveBall() {
   ballObj.X += ballObj.dX
   ballObj.Y += ballObj.dY
   ball.style.left = ballObj.X + "px"
   ball.style.top = ballObj.Y + "px"
   if(ballObj.X > gameBoard.clientWidth - ball.clientHeight){
      ballObj.dX = -ballObj.dX}
   if(ballObj.Y > gameBoard.clientHeight - ball.clientHeight){
      ballObj.dY = -ballObj.dY}
   if(ballObj.Y < 1){
      ballObj.dY = -ballObj.dY
   }
   if(ballObj.X < 1){
      ballObj.dX = -ballObj.dX}
   if(racketObj.X <=ballObj.X && 
      racketObj.L + racketObj.X > ballObj.X
      && ballObj.Y + ball.clientHeight == racketObj.Y){
         ballObj.dY = - ballObj.dY
   }

   
   window.requestAnimationFrame(moveBall)
}

window.requestAnimationFrame(moveBall)