// Albee Raida
// Date
//angry bird protopype.
//https://himco.jp/2019/04/03/14%EF%BC%9A%E3%82%B2%E3%83%BC%E3%83%A0%E5%88%B6%E4%BD%9C%E3%81%AB%E5%BD%B9%E7%AB%8B%E3%81%A4p5-play%E9%80%9F%E7%BF%92-creative-coding-javascript/#%E7%A7%BB%E5%8B%95%E3%81%99%E3%82%8B%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88
let spr;
let cat;
let wall;
let boxes;

function preload(){
  cat = loadImage('cat.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  spr = createSprite( width/2, height/2, cat.width,cat.height);
  boxes = new Group;

  spr.addImage(cat);
  spr.shapeColor = color(255);
  spr.velocity.y = 0;

  wall = createSprite(windowWidth / 2,  windowHeight / 1.01, windowWidth, 100);
  wall.shapeColor = color("brown");
  wall.collider="s";

  for (let i = 0; i < 4; i++) {
    let box = createSprite(windowWidth/2, windowHeight/2, 25, 25);
    box.shapeColor = color(255, 0, 0);
    boxes.add(box);
  }
}

function draw() {
  background(255);

  spr.velocity.x = (mouseX - spr.position.x)*0.1;
  spr.velocity.y = (mouseY - spr.position.y)*0.1;
  spr.collide(wall);
  spr.displace(boxes);
  drawSprites();

}
