function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
   background(240);
  noStroke()
  //red rect
  fill(255, 0, 0)
  rect(120, 0, 290, 200)
  //white rect
  fill(255, 255, 255)
  rect(0, 0, 80, 80)
  //blue rect
  fill(0, 0, 255)
  rect(80, 200, 80, 80)
  //yellow rect
  fill(255, 255, 0)
  rect(160, 280, 200, 50)

  stroke(0)
  strokeWeight(10)
  line(120, 0, 120, 399) //vertical left2
  line(80, 0, 80, 280) //vertical left1
  line(160, 200, 160, 400) //vertical left3
  line(0, 280, 399, 280) //horizontal bottom
  line(360, 200, 360, 399) //vertical right
  strokeWeight(15)
  strokeCap(SQUARE)
  line(160, 330, 360, 330)
  line(0, 80, 399, 80)
  strokeWeight(18)
  line(0, 200, 400, 200)
}
