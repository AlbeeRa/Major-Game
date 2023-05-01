// Pawtactor!
// Albee Raida
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mode; // to determine the game has started or not
let sky;
let myFont;

let bgImg;
let x1 = 0;
let x2;

let scrollSpeed = 2;

function preload(){
  sky = loadImage("clouds.png");
  myFont = loadFont("ClassicRock.ttf");
}


function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
  x2 = width;
  textSize(100);
}

function draw() {
  background(0);
  //rect(mouseX, mouseY,50,50);
  mainMenu();
  // if (mode===1){
  //   image(sky, x1, 0, width, height);
  //   image(sky, x2, 0, width, height);

  //   x1 -= scrollSpeed;
  //   x2 -= scrollSpeed;

  //   if (x1 < -width){
  //     x1 = width;
  //   }
  //   if (x2 < -width){
  //     x2 = width;
  //   }
  // }
  // //game bg
  
}

//starting screen animation
function linearToRect(linearX,rectX,rectY,rectW,rectH){}

//idea: raining cats or cats moving in rectangle
function mainMenu(){
  if (mode===0){
    background(sky);
    fill("#fff5eb");
    textAlign(CENTER);
    textFont(myFont);
    text("ENTER TO START", windowWidth/2,windowHeight/2);
  }
  if (mode=== 1 ){
    background();
    rect(mouseX, mouseY,50,50);
  }
}

function keyPressed() {
  if (keyCode === ENTER) { // start of the game
    mode= 1;
  }
  if (keyCode === ESCAPE) {// go back to the main menu
    mode= 0;
  }
}
