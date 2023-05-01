// Pawtactor!
// Albee Raida
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mode; // to determine the game has started or not

function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
  textSize(100);
}

function draw() {
  background(220);
  //rect(mouseX, mouseY,50,50);
  mainMenu();
}

//starting screen animation
function linearToRect(linearX,rectX,rectY,rectW,rectH){
  

function mainMenu(){
  if (mode===0){
    background("yellow");
    textAlign(CENTER);
    text("ENTER TO START", windowWidth/2,windowHeight/2);
  }
  if (mode=== 1 ){
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

