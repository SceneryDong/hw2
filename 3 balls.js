function setup() {
  createCanvas(500, 400);
}
var ballx=50
var ballSpeed=3
var bally=50


var ballx2=50
var ballSpeed2=6
var bally2=25

var ballx3=15
var ballSpeed3=2
var bally3=400

function draw() {
  background(220);
  ellipse(ballx,bally ,100)
  ellipse(ballx2,bally2,50)
  ellipse(ballx3,bally3,80)
  
  ballx = ballx+ballSpeed
  ballx2 = ballx2+ballSpeed2
  ballx3=ballx3+ballSpeed3
  bally=bally+ballSpeed
  bally2=bally2+ballSpeed
  bally3=bally3-ballSpeed3
  
  
  if(ballx>=width){ballSpeed=-3}
  if(ballx<=0){ballSpeed=3}
  if(bally>=height){ballSpeed=-3}
  if(bally<=0){ballSpeed=3}
  
  if(ballx2>=width){ballSpeed2=ballSpeed2*-1}
  if(ballx2<=0){ballSpeed2=ballSpeed2*-1}
  if(bally2>=height){ballSpeed2=ballSpeed*-1}
  if(bally2<=0){ballSpeed2=ballSpeed*-1}
  
  if(ballx3>=width){ballSpeed3=ballSpeed3*-1}
  if(ballx3<=0){ballSpeed3=ballSpeed3*-1}
  if(bally3>=height){ballSpeed3=ballSpeed3*-1}
  if(bally3<=0){ballSpeed3=ballSpeed3*-1}
}
