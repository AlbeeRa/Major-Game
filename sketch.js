// Pawtactor! (MAJOR PROJECT)
// Albee Raida
// Date
//
// Extra for Experts: constants, Matter.js(mass,engine,restitution,friction,constraints)
// UNCOMPLETE: points

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
let sky,city,enemy,catimg;
let myFont,bgMusic,winMusic,button;

let coinCounter = 0;
let currentlevel =1;
let alienx,alieny;
let catx,caty;
let catRadius;
let w,h;
let tempAX,tempAY;

function preload(){
  sky = loadImage("images/clouds.png");
  city = loadImage("images/cityscape.png");
  enemy = loadImage("images/alien.png");
  catimg = [loadImage("images/cat.png"),loadImage("images/cat1.png"),loadImage("images/cat2.png")];
  myFont = loadFont("Mosaic.ttf");
  soundFormats("mp3");
  bgMusic = loadSound("Itty Bitty");
  winMusic = loadSound("yay");
}

function setup(){

  mode = "mainMenu";

  createCanvas(windowWidth,windowHeight);
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
  catPick=catimg[0];
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
function keyTyped(){ ///for picking character
  if(key === "a"){
    catPick = catimg[0];
  }
  if(key === "s"){
    catPick = catimg[1];
  }
  if(key === "d"){
    catPick = catimg[2];
  }
  
}
function pick(){  ///pick your player
  background(city);
  //heading
  textAlign(CENTER);
  fill("#ffffff");
  textFont(myFont);
  textSize(80);
  text("Pick Your Pawtactor!!", w/2,h/5);
  //cat 1
  textSize(30);
  text("press A", w/2.6,h/3);
  image(catimg[0],w/3, h/3,catimg[0].width*2,catimg[0].height*2);

  //cat 2
  text("press S",w/1.5, h/3);
  image(catimg[1],w/1.7, h/2.9,catimg[1].width/10*2,catimg[1].height/10*2);

  //cat 3 (special guest)
  text("press D",w/2, h/1.7);
  image(catimg[2],w/2.2, h/1.6,catimg[2].width/10*2,catimg[2].height/10*2);
  fill("#1c2d2e");
  text("SHIFT to play", w/2,h/10);
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

    ///victory
    if(alienx>tempAX){ ///temp solution for victory
      textSize(50);
      fill("white");
      textFont(myFont);
      text("PAWTACTOR SAVED THE WORLD!", w/2,h/5);

    }

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

  ///point system if hit the alien (Incomplete)
  if (
    catx + 200 >= alienx &&
    catx + 200 <= alienx + 200 &&
    caty + 200 >= alieny &&
    caty + 200 <= alieny + 200
  ) {
    coinCounter++;
  }
  ///victory
  if(alienx>tempAX){ ///temp solution for victory
    textSize(50);
    fill("white");
    textFont(myFont);
    text("PAWTACTOR SAVED THE WORLD!", w/2,h/5);

  }
  // }
  // else{
  //   fill("white");
  //   textFont(myFont);
  //   text("point ="+coinCounter, w/2,h/5);
  // }
  
}
//console.log(coinCounter);
function menu(){
  //first thing you will see
  background(sky);
  textSize(120);
  //title
  textAlign(CENTER);
  fill("black");
  textFont(myFont);
  text("Pawtactor", w/2,h/3);

  //start command
  fill("#fff5eb");
  text("Press Enter", w/2,h/2);
}
function deleteObjects(){
  for(let i = 0;i<boxes.length;i++){ 
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
  tempAX = alienx;
  tempAY = alieny;
  setTimeout(()=>{
    sling.project();
  },30); //less then 30 won't break through the aliens
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
  if (keyCode === SHIFT) { //game
    mode= "level1";
    deleteObjects();//if not playing for the first time, It will delete the previous objects
    currentlevel=1;
  }
}



