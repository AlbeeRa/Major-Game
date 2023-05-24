// Albee Raida
// Date
//angry bird protopype.

let bird;

function setup() {
  createCanvas(windowWidth, windowHeight);

  bird = createSprite(windowWidth/2,200,100,100);
  bird.shapeColor = "blue";
}

function draw() {
  background(220);
  bird.position.x = mouseX;
  bird.position.y = mouseY;
}
