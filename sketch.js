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

// //image
let sky;
let city;
let enemy;
let catimg;

let myFont;
let bgMusic;


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
  engine = Engine.create();
  world = engine.world;
  runner = Runner.create();
  Runner.run(runner, engine);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse:mouse
  };
  mouseConst = MouseConstraint.create(engine,options);

  Composite.add(engine.world, [mouseConst]);

  bgMusic.loop();///loop background music
  ground = new Box (width/2,height-10,width,120,{isStatic:true});

  for(let i = 0;i<3;i++){ //spawning more box
    boxes[i] = new Box(width/1.4,height/1.50-(i*140),50,150,{isStatic:false}); //stack mode
  }
  alien = new Alien(width/1.6,height/1.4,200,200,{isStatic:false});
  cat = new Cat(width/5,height/1.4,65);
  sling = new SlingShot(width/5,height/1.7,cat.body);
}
function draw(){
  Engine.update(engine); //new

  background(city);
  if (mode === "mainMenu"){
    //first thing you will see
    background(sky);
    //title
    textAlign(CENTER);
    fill("black");
    textFont(myFont);
    text("Pawtactor", windowWidth/2,windowHeight/3);
 
    //start command
    fill("#fff5eb");
    text("Press Enter", windowWidth/2,windowHeight/2);
  }
  if (mode ===1){
    game();
  }
  if (mode ==="tutorial"){
    background(city);
    textAlign(CENTER);
    fill("#ffffff");
    textFont(myFont);
    text("SHIFT to start", windowWidth/2,windowHeight/1.6);
    text("ESC to return", windowWidth/2,windowHeight/1.2);

    textSize(90);
    fill("#1c2d2e");
    text("Mouse to control the cat", windowWidth/2,windowHeight/2.2);
    textSize(100);
    text("TUTORIAL!!", windowWidth/2,windowHeight/5);
  }
}


function keyPressed(){ //bring back the cat
  if (keyCode === ENTER) { // tutorial
    mode= "tutorial";
  }
  if (keyCode === ESCAPE) { //menu
    mode= "mainMenu";
  }
  if (keyCode === SHIFT) { //game
    mode= 1;
  }
  if(key === ' '){ ///respawn not working
    world.remove(world,cat.body);
    cat = new Cat(width/5,height/1.6,65);
    sling.attach(cat.body);
  }
}

function game(){
  ground.displayFloor();
  for(let box of boxes){ 
    box.display();
  }
  sling.display();//slingshot behind the cat
  cat.display();
  alien.displayEnemy();
}

function mouseReleased(){//releasing the cat
  setTimeout(()=>{
    sling.project();
  }, 80); //less then 50 won't break through the aliens
}



//   //How to play
//   if (mode=== 2 ){

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


