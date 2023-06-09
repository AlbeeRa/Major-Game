// Pawtactor!
// Albee Raida
// Date
//
// Extra for Experts:
// 

// eslint-disable-next-line no-var
let Engine = Matter.Engine;
//let Render = Matter.Render;
let Runner = Matter.Runner;
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;

// create an engine
let engine; 
let world;
let runner;

let ground;
let box;
let cat;
let sling;
function setup(){
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  runner = Runner.create();
  Runner.run(runner, engine);

  ground = new Box (width/2,height-70,width,70);
  box = new Box(width/1.4,height/1.67,width/28,240);
  cat = new Cat(width/7,height/1.5,85);
  sling = new Box(width/5,height/1.7,width/70,100);
}
function draw(){
  background(51);
  ground.display();
  box.display();
  cat.display();
  sling.display();
}


class Box{
  constructor(x,y,w,h){
    
    this.body= Matter.Bodies.rectangle(x,y,w,h,{ isStatic: true});
    Composite.add(engine.world, [this.body]);
    this.w= w;
    this.h= h;
  }
  display(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }

}


class Cat{
  constructor(x,y,r){
    this.x = x;
    this.y =y;
    this.r =r;
    //this.h =h;
  }
  display(){
    fill(255);
    circle(this.x,this.y,this.r);
  }
}
// let mode; // to determine the game has started or not

// //image
// let sky;
// let city;
// let alien;
// let kitty;

// let myFont;

// class Box{
//   constructor(x,y,w,h){
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.groundColour = color("#082226");
//   }
//   //ground
//   displayGround(){
//     fill(this.groundColour);
//     rect(this.x,this.y,this.w,this.h);
//   }
//   //aliens
//   display(){
//     image(alien,windowWidth/1.5,(windowHeight/2.4),width/4,height/2);
//   }
// }
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Cat{
//   constructor(x,y,r){
//     this.x = x;
//     this.y = y;
//     this.r = r;
//   }
//   displayCat(){
//     fill(255);
//     image(kitty,windowWidth/7,(windowHeight/1.5),width/8,height/5);

//   }
// }

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function preload(){
//   sky = loadImage("clouds.png");
//   city = loadImage("cityscape.png");
//   alien = loadImage("alien.png");
//   kitty = loadImage("cat.png");
//   //myFont = loadFont("ClassicRock.ttf");
// }

// let playerSprite;
// function setup() {
//   mode = 0;
//   createCanvas(windowWidth, windowHeight);


//   ground = new Box(0,windowHeight/1.2,windowWidth,200);
//   box = new Box(alien,this.x,this.y,this.w, this.h);
//   cat = new Cat(kitty,this.x,this.y,this.w,this.h);
//   textSize(60);
// }

// function draw() {
//   background(0);
//   mainMenu();

//   //testing
//   box.display();
//   ground.displayGround();
//   cat.displayCat();

// }
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //idea: raining cats or cats moving in rectangle
// function mainMenu(){

//   //first thing you will see
//   if (mode===0){
//     background(sky);

//     //title
//     textAlign(CENTER);
//     fill("black");
//     text("Pawtactor", windowWidth/2,windowHeight/3);

//     //start command
//     fill("#fff5eb");
//     text("Press Enter", windowWidth/2,windowHeight/2);
//     //textFont(myFont);
// ///////////////////////////////////////////////////////






//   }
//   //How to play
//   if (mode=== 1 ){

//     //tutorial
//     fill("#ffffff");
//     text("press shift to start", windowWidth/2,windowHeight/2);
//     text("press esc to return", windowWidth/2,windowHeight/1.1);

//     textSize(40);
//     fill("#fff5eb");
//     text("use your mouse to control the cat", windowWidth/2,windowHeight/3);
//   }

//   if (mode === 2 ){ //Game start
//     pawtactor();
//   }

// }

// function keyPressed() {
//   if (keyCode === ENTER) { // tutorial
//     mode= 1;
//   }
//   if (keyCode === ESCAPE) {// go back to the main menu
//     mode= 0;
//   }
//   if (keyCode === SHIFT) {// start of the game
//     mode= 2;
//   }
// }


// // game coding
// function pawtactor(){
//   background(city);
//   box.display();
//   ground.displayGround();
//   cat.displayCat();
//   //cat.moveTowards(mouse, 0.10);
// }

