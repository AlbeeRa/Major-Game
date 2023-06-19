// Pawtactor! (MAJOR PROJECT)
// Albee Raida
// Date
//
// Extra for Experts: constants, Matter.js(mass,engine,restitution,friction,constraints)
// UNCOMPLETE: points, button,respawn, Beta testing

const {Body,Engine,World,Bodies,Runner,Mouse,MouseConstraint,Constraint,Composite} = Matter;

let engine; 
let world;
let runner;
let mouseConst;

let mode; // to determine the game has started or not
let ground;
let boxes=[];
let cat,catPick;
let alien;
let sling;

// preload variables
let sky,city,enemy,catimg,cat1img,cat2img;
let myFont,bgMusic,button;

let coinCounter = 0;
let currentlevel =1;
let alienx,alieny;
let catx,caty;
let testX,testY;
let catRadius;
let w,h;

function preload(){
  sky = loadImage("images/clouds.png");
  city = loadImage("images/cityscape.png");
  enemy = loadImage("images/alien.png");
  catimg = loadImage("images/cat.png");
  cat1img = loadImage("images/cat1.png");
  cat2img = loadImage("images/cat2.png");
  myFont = loadFont("Mosaic.ttf");
  soundFormats("mp3");
  bgMusic = loadSound("Itty Bitty");
}

function setup(){

  mode = "mainMenu";

  createCanvas(windowWidth,windowHeight);

  textSize(120);
  w = windowWidth;
  h = windowHeight;

  engine = Engine.create();
  world = engine.world;
  runner = Runner.create();
  Runner.run(runner, engine);
  catPick=catimg;
  //button for bgMusic
  button = createButton("music");
  button.mousePressed(togglePlaying);
  button.position(w/80, h/50);

  //mouse control
  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse:mouse
  };
  mouseConst = MouseConstraint.create(engine,options);
  Composite.add(engine.world, [mouseConst]);
}

//music button on the top left corner
function togglePlaying(){
  if (!bgMusic.isPlaying()){
    bgMusic.loop();///loop background music
    button.html("mute");
  }
  else{
    bgMusic.pause();
    button.html("music");
  }
}

function draw(){
  Engine.update(engine);
  background(0);

  //checking modes
  if (mode === "mainMenu"){
    menu();
  }
  else if (mode ==="pick"){
    pick();
  }
  else if (mode ==="level1"){
    game();
  }
  else if (mode ==="tutorial"){
    tutorial();
  }
}

function game(){
  if (currentlevel===1){ //if the game is starting for first time or not(if not 1st time then will delete previous obj)

    ground = new Box (w/2,h-10,w,120,{isStatic:true});
    for(let i = 0;i<3;i++){ //spawning more box
      boxes[i] = new Box(w/1.4,h/1.50-i*140,50,150,{isStatic:false}); //stack mode
    }
    alien = new Alien(w/1.6,h/1.4,200,200,{isStatic:false});
    cat = new Cat(w/5,h/1.4,65);
    sling = new SlingShot(w/5,h/1.7,cat.body);

    currentlevel=0;
  }

  background(city);
  ground.displayFloor();
  for(let box of boxes){ 
    box.display();
  }
  sling.display();//slingshot behind the cat
  cat.display();
  alien.displayEnemy();  

  ///point system if hit the alien
  testX = catx;
  testY = caty;
  if(catx<alienx){ //left edge
    testX=alienx;
  }
  else if(catx>alienx+200){ //right edge
    testX=alienx+200;
  }

  if(caty<alieny){//top edge
    testY=alieny;
  }
  else if(caty>alieny+200){ //bottom edge
    testY= alieny+200;
  }

  let distX= catx-testX;
  let distY = caty-testY;
  let distance = sqrt(distX*distY+distY*distY);

  if (distance<=catRadius){
    coinCounter++;
    // fill("white");
    // textFont(myFont);
    // text("point ="+coinCounter, w/2,h/5);
  }
  // else{
  //   coinCounter;
  //   fill("white");
  //   textFont(myFont);
  //   text("point ="+coinCounter, w/2,h/5);
  // }
  console.log(coinCounter);
  // if(catx>alienx&&catx<alienx+200&&caty&&alieny&&caty<alieny+200){
  //   coinCounter++;
  //   fill("white");
  //   textFont(myFont);
  //   text("point ="+coinCounter, w/2,h/5);

  //   ///victory
  //   if(coinCounter>10){
  //     fill("white");
  //     textFont(myFont);
  //     text("Yipee!!", w/2,h/5);

  //   }
  // }
  // else{
  //   fill("white");
  //   textFont(myFont);
  //   text("point ="+coinCounter, w/2,h/5);
  // }
}
function menu(){
  //first thing you will see
  background(sky);
  //title
  textAlign(CENTER);
  fill("black");
  textFont(myFont);
  text("Pawtactor", w/2,h/3);

  //start command
  fill("#fff5eb");
  text("Press Enter", w/2,h/2);
}
function pick(){  ///pick your player  PROBLEM CHARACTER DOESNT CHANGE AFTER PICKING ONCE< CANT HIDE BUTTONS
  background(city);
  //heading
  textAlign(CENTER);
  fill("#ffffff");
  textFont(myFont);
  textSize(80);
  text("Pick Your Pawtactor!!", w/2,h/5);

  //cat 1
  button = createButton("El Gato");
  button.mousePressed(catPick= catimg);
  button.position(w/3, h/3);
  image(catimg,w/3, h/3,catimg.width*2,catimg.height*2);

  //cat 2
  button = createButton("Banana Cat");
  button.mousePressed(catPick= cat1img);
  button.position(w/1.7, h/3);
  image(cat1img,w/1.7, h/3,cat1img.width/10*2,cat1img.height/10*2);

  //cat 3 (special guest)
  button = createButton("Dio");
  button.mousePressed(catPick= cat2img);
  button.position(w/2.1, h/1.8);
  image(cat2img,w/2.2, h/1.6,cat2img.width/10*2,cat2img.height/10*2);

}
function tutorial(){
  background(city);
  textAlign(CENTER);
  fill("#ffffff");
  textFont(myFont);
  textSize(40);
  text("SHIFT to start", w/2,h/1.6);
  text("BACKSPACE to pick your pawtactor", w/2,h/1.4);
  text("ESC to return", w/2,h/1.2);


  textSize(90);
  fill("#1c2d2e");
  text("Mouse to control the cat", w/2,h/2.2);
  textSize(100);
  text("TUTORIAL!!", w/2,h/5);
}
function mouseReleased(){//releasing the cat
  setTimeout(()=>{
    sling.project();
  },50); //less then 50 won't break through the aliens
}

function deleteObjects(){
  for(let i = 0;i<boxes.length;i++){ //spawning more box
    if(boxes[i].body){
      World.remove(world, boxes[i].body);
    }
  }
  if (cat.body){
    World.remove(world,cat.body);
  }
  if (alien.body){
    World.remove(world,alien.body);
  }
}

function keyPressed(){ 
  if (keyCode === ENTER) { // tutorial
    mode= "tutorial";
  }
  if (keyCode === ESCAPE) { //menu
    mode= "mainMenu";
  }
  if (keyCode === BACKSPACE) { //pick character
    mode= "pick";
  }
  if(keyCode ===ALT){ ///respawn the cat (STILL NOT WORKING)
    if (cat.body){
      World.remove(world,cat.body);
    }
  }
  if (keyCode === SHIFT) { //game
    mode= "level1";
    deleteObjects();
    currentlevel=1;
  }
}



