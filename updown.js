function setup() {
  createCanvas(500, 400);
}

var ballx=50
var ballSpeed=3


var ballx2=50
var ballSpeed2=6

function draw() {
  background(220);
  ellipse(200,ballx ,100)
  ellipse(mouseX,ballx2,50)
  
  ballx = ballx+ballSpeed
  ballx2 = ballx2+ballSpeed2
  
  if(ballx>=height){ballSpeed=-3}
  if(ballx<=0){ballSpeed=3}
  if(ballx2>=height){ballSpeed2=ballSpeed2*-1}
  if(ballx2<=0){ballSpeed2=ballSpeed2*-1}
}
