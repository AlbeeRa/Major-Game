// Pawtactor!
// Albee Raida
// Date
//
// Extra for Experts:
// 

let mode; // to determine the game has started or not
let sky;
let myFont;
let ground;

class Box{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display(){
    fill(255);
    rect(this.x,this.y,this.w,this.h);
  }
}


function preload(){
  sky = loadImage("clouds.png");
  myFont = loadFont("ClassicRock.ttf");
}


function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
  textSize(60);
}

function draw() {
  background(0);
  mainMenu();
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
    background(0);
    rect(mouseX, mouseY,50,50);
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


