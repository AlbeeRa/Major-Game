// Pawtactor!
// Albee Raida
// Date
//
// Extra for Experts: constants, Matter.js(mass,engine,restitution,friction,constraints),
// 


//PROBLEMS: slingshot doesnt work with the modes, cat doesn't come back to the sling
// UNCOMPLETE: main menu, tutorial, points, Beta testing

const {Engine,World,Bodies,Runner,Mouse,MouseConstraint,Constraint,Composite} = Matter;

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

function preload(){
  sky = loadImage("clouds.png");
  city = loadImage("cityscape.png");
  enemy = loadImage("alien.png");
  catimg = loadImage("cat.png");
  //myFont = loadFont("ClassicRock.ttf");
}
function setup(){
  //mode = 0;

  createCanvas(windowWidth,windowHeight);
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

  for(let i = 0;i<3;i++){ //spawning more box
    boxes[i] = new Box(width/1.4,height/1.50-(i*140),50,150,{isStatic:false}); //stack mode
  }
  alien = new Alien(width/1.6,height/1.4,200,200,{isStatic:false});
  cat = new Cat(width/5,height/1.4,65);
  ground = new Box (width/2,height-10,width,120,{isStatic:true});
  sling = new SlingShot(width/5,height/1.7,cat.body);

}
function draw(){
  background(city);
  ground.displayFloor();
  for(let box of boxes){ 
    box.display();
  }
  sling.display();//slingshot behind the cat
  cat.display();
  alien.displayEnemy();
}


function keyPressed(){ //bring back the cat
  if(key === ' '){
    world.remove(world,cat.body);
    cat = new Cat(width/5,height/1.6,65);
    sling.attach(cat.body);
  }

}

function mouseReleased(){//releasing the cat
  setTimeout(()=>{
    sling.project();
  }, 80); //less then 50 won't break through the aliens
}

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
//   }
// }
class Box{
  constructor(x,y,w,h,s){
    this.static = s;
    this.body= Matter.Bodies.rectangle(x,y,w,h,s);
    Composite.add(engine.world, [this.body]);
    this.w= w;
    this.h= h;
  }
  display(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    strokeWeight(3);
    stroke(50);
    rotate(angle);
    fill('#61f2f0');
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }
  displayFloor(){ ///only for the ground
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
    fill("#344666");
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }

}
class Alien{
  constructor(x,y,w,h,s){
    this.static = s;
    this.body= Matter.Bodies.rectangle(x,y,w,h,s);
    Composite.add(engine.world, [this.body]);
    this.w= w;
    this.h= h;
  }
  displayEnemy(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill(255);
    imageMode(CENTER);
    image(enemy,0,0,this.w,this.h);
    pop();
  }
}
class Cat{
  constructor(x,y,r){
    const options = { //bounce back after hitting the aliens
      restitution: 0.8
    };
    this.body = Matter.Bodies.circle(x,y,r,options);
    Matter.Body.setMass(this.body,this.body.mass*4);
    this.r =r;
    Composite.add(engine.world, [this.body]);
  }
  display(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(catimg,0,0,this.r*2,this.r*2);
    pop();
  }
}
class SlingShot{
  constructor(x,y,body){
    const options = {
      pointA:{
        x:x,
        y:y
      },
      bodyB:body,
      stiffness: 0.01,
      length: 60
    };
    this.sling = Constraint.create(options);
    Composite.add(engine.world, [this.sling]);
  }
  display(){
    if(this.sling.bodyB){
      stroke(255);
      const posA = this.sling.pointA;
      const posB = this.sling.bodyB.position;
      line(posA.x,posA.y,posB.x,posB.y);
    }
  }
  project(){
    this.sling.bodyB = null;
  }
  attach(body){
    this.sling.bodyB=body;
  }
}


// let myFont;

//   textSize(60);
// }

// function draw() {
//   background(0);
//   mainMenu();

//}
// //idea: raining cats or cats moving in rectangle

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

