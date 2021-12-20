const gameBoard = document.getElementById("gameBoard")
const racket = document.getElementById("racket")
const ball = document.getElementById("ball")
const rect1 = document.getElementById("rect1")
const rect2 = document.getElementById("rect2")

let rects = [rect1, rect2]

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
      && ballObj.Y + ball.clientHeight == racketObj.Y && ballObj.dY >0){
         ballObj.dY = - ballObj.dY
   }
   for(var i =0; i < 2; i++){
      rect = rects[i]
      if (rect.offsetLeft <=ballObj.X &&
         rect.clientWidth + rect.offsetLeft > ballObj.X
         && ballObj.Y + ball.clientHeight == rect.offsetTop && ballObj.dY >0){
            ballObj.dY = - ballObj.dY}
      else if(rect.offsetTop + 40 == ballObj.Y && 
         rect.offsetLeft <=ballObj.X &&
         rect.clientWidth + rect.offsetLeft > ballObj.X && ballObj.dY <0){
            ballObj.dY = - ballObj.dY}
      if(rect.offsetLeft == ballObj.X + 40 && 
         rect.offsetTop + 40 > ballObj.Y &&  ballObj.Y > rect.offsetTop - 40  && ballObj.dX>0){
         ballObj.dX = -ballObj.dX}
      else if (rect.offsetLeft + 200 == ballObj.X && 
         rect.offsetTop + 40 > ballObj.Y &&  ballObj.Y > rect.offsetTop - 40  && ballObj.dX<0){
         ballObj.dX = -ballObj.dX}
   }
   
   
   window.requestAnimationFrame(moveBall)
}

window.requestAnimationFrame(moveBall)