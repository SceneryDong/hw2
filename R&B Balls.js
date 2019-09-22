function setup() {
  createCanvas(500, 400);
}
var ballx=50
var ballSpeed=3
var ballSize=10

var ballx2=50
var ballSpeed2=6


function draw() {
  background(220);
  noStroke()
  fill(100,0,0)
  ballSize=ballSize+ballSpeed
  ellipse(ballx,200 ,300)
  noStroke()
  fill(0,0,255)
  ballSize=ballSize+ballSpeed2
  ellipse(ballx2,300,ballSize)
  ballSize= ballx2+0.5
  
  ballx = ballx+ballSpeed
  ballx2 = ballx2+ballSpeed2
  
  if(ballx>=width){ballSpeed=-3}
  if(ballx<=0){ballSpeed=3}
  if(ballx2>=width){ballSpeed2=ballSpeed2*-1}
  if(ballx2<=0){ballSpeed2=ballSpeed2*-1}
}
