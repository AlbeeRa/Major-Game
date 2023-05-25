// Albee Raida
// Date
//angry bird protopype.
https://himco.jp/2019/04/03/14%EF%BC%9A%E3%82%B2%E3%83%BC%E3%83%A0%E5%88%B6%E4%BD%9C%E3%81%AB%E5%BD%B9%E7%AB%8B%E3%81%A4p5-play%E9%80%9F%E7%BF%92-creative-coding-javascript/#%E7%A7%BB%E5%8B%95%E3%81%99%E3%82%8B%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88
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
  bird.velocity.x = 5;
}
