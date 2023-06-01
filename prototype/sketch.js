// Albee Raida
// Date
//angry bird protopype.
//https://himco.jp/2019/04/03/14%EF%BC%9A%E3%82%B2%E3%83%BC%E3%83%A0%E5%88%B6%E4%BD%9C%E3%81%AB%E5%BD%B9%E7%AB%8B%E3%81%A4p5-play%E9%80%9F%E7%BF%92-creative-coding-javascript/#%E7%A7%BB%E5%8B%95%E3%81%99%E3%82%8B%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88
// let spr;
// let cat;
// let wall;

let bird;
let startX = '';
let startY ='';

let stringStartX= ''; 
let stringStartY ='';
let slingshot;

function preload(){
  cat = loadImage("cat.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  world.gravity.y = 20;
  startX = windowWidth/10;
  startY =windowHeight/10;

  stringStartX= windowWidth/6;
  stringStartY = 2*windowHeight/2.5;

  let boxY = 500;
  for (let i = 0; i<5; i++){
    boxY = boxY-50;
    new Sprite (4*windowWidth/5,boxY,100,100);
    Sprite.color = 'yellow';
  }

  slingshot = new Sprite(stringStartX,stringStartY, 20, windowHeight/10,"n");

  bird = new Sprite(startX,startY);
  bird.diameter = 50;
  let floor = new Sprite(0,height,width*2,10,"static");
}





function draw() {
  background(255);
  if(bird.mouse.dragging()){
    let distance = dist(bird.x,bird.y,stringStartX,stringStartY);
    if(distance<120){
      line(stringStartX*windowWidth/10,stringStartY*windowHeight/10,bird.x,bird.y);
      bird.collider = "k";
      bird.moveTowards(mouse.x+bird.mouse.x,mouse.y +bird.mouse.y,1);
    }
    else{
      bird.x=startX;
      bird.y=startY;
      bird.collider = "k";
    }
  }
}

if(mouse.released()){
  bird.direction = bird.angleTo(slingshot);
  bird.vel.x = (stringStartX - bird.x)/7;
  bird.vel.y = (stringStartY -bird.y)/7;
  bird.mass = 30;
  bird.collider = "d";
}


//THINGS TO DO!!
//pointing system :(when the bird touches the brick, it turns red (disapears) and adds 1 to counter
//which will be displayed in the left corner)




