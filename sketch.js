// Pawtactor!
// Albee Raida
// Date
//
// Extra for Experts:
// 

let mode; // to determine the game has started or not
let sky;
let city;
let myFont;
let ground;
let box;

class Box{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.groundColour = color("#082226");
  }
  //ground
  displayGround(){
    fill(this.groundColour);
    rect(this.x,this.y,this.w,this.h);
  }
  //aliens
  display(){
    fill("#00ff6e");
    rect(this.x,this.y,this.w,this.h);
  }
}


function preload(){
  sky = loadImage("clouds.png");
  city = loadImage("cityscape.png");
  myFont = loadFont("ClassicRock.ttf");
}


function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
  ground = new Box(0,windowHeight/1.2,windowWidth,200);
  box = new Box(550,windowHeight/1.35,100,85);
  textSize(60);
}

function draw() {
  background(0);
  mainMenu();
  box.display();
  //ground.display();
}



//idea: raining cats or cats moving in rectangle
function mainMenu(){

  //first thing you will see
  if (mode===0){
    background(sky);

    //title
    textAlign(CENTER);
    fill("black");
    text("Pawtactor", windowWidth/2,windowHeight/3);

    //start command
    fill("#fff5eb");
    text("Press Enter", windowWidth/2,windowHeight/2);
    textFont(myFont);
  }
  //How to play
  if (mode=== 1 ){

    //tutorial
    fill("#ffffff");
    text("press shift to start", windowWidth/2,windowHeight/2);

    textSize(40);
    fill("#fff5eb");
    text("use your mouse to control the cat", windowWidth/2,windowHeight/3);
  }

  if (mode === 2 ){ //Game start
    pawtactor();
  }

}

function keyPressed() {
  if (keyCode === ENTER) { // tutorial
    mode= 1;
  }
  if (keyCode === ESCAPE) {// go back to the main menu
    mode= 0;
  }
  if (keyCode === SHIFT) {// start of the game
    mode= 2;
  }
}


// game coding
function pawtactor(){
  background(city);
  ground.displayGround();
  box.display();
}

