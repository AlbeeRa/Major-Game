// Albee Raida
// Date
//angry bird protopype.
//https://himco.jp/2019/04/03/14%EF%BC%9A%E3%82%B2%E3%83%BC%E3%83%A0%E5%88%B6%E4%BD%9C%E3%81%AB%E5%BD%B9%E7%AB%8B%E3%81%A4p5-play%E9%80%9F%E7%BF%92-creative-coding-javascript/#%E7%A7%BB%E5%8B%95%E3%81%99%E3%82%8B%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88
// let spr;
// let cat;
// let wall;

let bird;
let startX = 50;
let startY =100;

let stringStartX= 100;
let stringStartY = 130;
let slingshot;

function preload(){
  cat = loadImage('cat.png');
}

function setup() {
  createCanvas(500, 200);
  world.gravity.y = 20;

  for (let i = 0; i<5; i++){
    let boxY = 100;
    new Sprite (400,boxY-20,30,30);
  }
  slingshot = new Sprite(stringStartX,stringStartY, 10, windowHeight/8,"n");

  bird = new Sprite(startX,startY);
  bird.diameter = 15;
  let floor = new Sprite(0,height,width*2,10,'s');
}



  // ///cat stuff
  // spr = createSprite( width/2, height/2, cat.width,cat.height);
  // spr.addImage(cat);
  // spr.shapeColor = color(255);
  // spr.velocity.y = 0;

  // //ground 
  // wall = createSprite(windowWidth / 2,  windowHeight / 1.01, windowWidth, 100);
  // wall.shapeColor = color("brown");
  // wall.collider="s";



function draw() {
  background(255);
  if(bird.mouse.dragging()){
    let distance = dist(bird.x,bird.y,stringStartX,stringStartY);
      if(distance<120){
        line(stringStartX,stringStartY,bird.x,bird.y)
        bird.collider = 'k';
        bird.moveTowards(mouse.x+bird.mouse.x,mouse.y +bird.mouse.y,1)
      }
      else{
        bird.x=startX;
        bird.y=startY;
      }
      }
  }

  // spr.velocity.x = (mouseX - spr.position.x)*0.1;
  // spr.velocity.y = (mouseY - spr.position.y)*0.1;
  // spr.collide(wall);
  // drawSprites();

