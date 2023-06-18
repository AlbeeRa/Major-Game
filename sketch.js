// Pawtactor!
// Albee Raida
// Date
//
// Extra for Experts: constants, Matter.js(mass,engine,restitution,friction,constraints),
// 


//PROBLEMS: slingshot doesnt work with the modes, cat doesn't come back to the sling(respawn)
// UNCOMPLETE: points, Beta testing

const {Body,Engine,World,Bodies,Runner,Mouse,MouseConstraint,Constraint,Composite} = Matter;

let engine; 
let world;
let runner;
let mouseConst;

let mode; // to determine the game has started or not

let ground;
let boxes=[];
let cat;
let alien;
let sling;

// preload variables
let sky,city,enemy,catimg;

let myFont,bgMusic;

let coinCounter = 0;
let currentlevel =1;
let alienx,alieny;
let catx,caty;
let w,h;

function preload(){
  sky = loadImage("clouds.png");
  city = loadImage("cityscape.png");
  enemy = loadImage("alien.png");
  catimg = loadImage("cat.png");
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
  bgMusic.loop();///loop background music

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse:mouse
  };
  mouseConst = MouseConstraint.create(engine,options);
  Composite.add(engine.world, [mouseConst]);
}


function draw(){
  Engine.update(engine); //new

  background(city);
  if (mode === "mainMenu"){
    menu();
  }
  else if (mode ==="level1"){
    game();
  }
  else if (mode ==="tutorial"){
    tutorial();
  }
}

function game(){
  if (currentlevel===1){

    ground = new Box (w/2,h-10,w,120,{isStatic:true});
  
    for(let i = 0;i<3;i++){ //spawning more box
      boxes[i] = new Box(w/1.4,h/1.50-(i*140),50,150,{isStatic:false}); //stack mode
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
function tutorial(){
  background(city);
  textAlign(CENTER);
  fill("#ffffff");
  textFont(myFont);
  text("SHIFT to start", w/2,h/1.6);
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
  },20); //less then 50 won't break through the aliens
}

function dleteobjects(){
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

function keyPressed(){ //bring back the cat
  // if(key === ' '){ ///respawn not working
  //   world.remove(world,cat.body);
  //   cat = new Cat(width/5,height/1.6,65);
  //   sling.attach(cat.body);
  // }
  if (keyCode === ENTER) { // tutorial
    mode= "tutorial";
  }
  if (keyCode === ESCAPE) { //menu
    mode= "mainMenu";
  }
  if (keyCode === SHIFT) { //game
    mode= "level1";
    dleteobjects();
    currentlevel=1;
  }
}



