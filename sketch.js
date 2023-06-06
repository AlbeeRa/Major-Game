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
let boxes=[];
let runner;

let ground;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  let option ={
    isStatic:true
  };
  ground = Bodies.rectangle(200,height,width,100,option);
  Composite.add(engine.world,[ground]);
  runner = Runner.create();
  Runner.run(runner, engine);
}

function draw(){
  background(51);
  for(let i = 0;i<boxes.length;i++){
    boxes[i].show();
  }
  noStroke();
  fill(170);
  strokeWeight(3);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,100);
}

function mousePressed(){
  boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)));
}

function Box(x,y,w,h){
  let options={
    friction:0.3,
    restitution: 0.6
  };
  this.body = Bodies.rectangle(x, y, w, h,options);
  this.w= w;
  this.h= h;
  Composite.add(engine.world,[this.body]);

  this.show = function(){
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);

    pop();
  };

}

// let mode; // to determine the game has started or not

// //image
// let sky;
// let city;
// let alien;
// let kitty;

// let myFont;
// let ground;
// let box;
// let cat;

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

