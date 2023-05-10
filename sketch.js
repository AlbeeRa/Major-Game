// Pawtactor!
// Albee Raida
// Date
//
// Extra for Experts:
// 
//add music links
//https://www.youtube.com/watch?v=o9_Gu3TI4IY or https://www.youtube.com/watch?v=hAAlDoAtV7Y



let mode; // to determine the game has started or not

//image
let sky;
let city;
let alien;
let kitty;

let myFont;
let ground;
let box;
let cat;
//let world,engine;

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
    image(alien,windowWidth/1.5,(windowHeight/2.4),width/4,height/2);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Cat{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  displayCat(){
    fill(255);
    image(kitty,windowWidth/7,(windowHeight/1.5),width/8,height/5);

  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function preload(){
  sky = loadImage("clouds.png");
  city = loadImage("cityscape.png");
  alien = loadImage("alien.png");
  kitty = loadImage("cat.png")
  myFont = loadFont("ClassicRock.ttf");
}


function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
  //stretchy = new Sprite();
  ground = new Box(0,windowHeight/1.2,windowWidth,200);
  box = new Box(alien,this.x,this.y,this.w, this.h);
  cat = new Cat(kitty,this.x,this.y,this.w,this.h);
  textSize(60);
	
// 	stretchy.draw = () => {
// 		fill(237, 205, 0);

// 		push();
// 		rotate(stretchy.direction);
// 		ellipse(0, 0, 100 + stretchy.speed, 100 - stretchy.speed);
// 		pop();

// 		image(kitty, stretchy.vel.x * 2, stretchy.vel.y * 2);
// 	};

// 	stretchy.update = () => {
// 		stretchy.moveTowards(mouseX, 0.07);
// 	};
  // }


}

function draw() {
  background(0);
  mainMenu();

  //testing
  box.display();
  ground.displayGround();
  cat.displayCat();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
///////////////////////////////////////////////////////






  }
  //How to play
  if (mode=== 1 ){

    //tutorial
    fill("#ffffff");
    text("press shift to start", windowWidth/2,windowHeight/2);
    text("press esc to return", windowWidth/2,windowHeight/1.1);

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
  box.display();
  ground.displayGround();
  cat.displayCat();
  //cat.moveTowards(mouse, 0.10);
}

