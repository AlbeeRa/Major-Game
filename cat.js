class Cat{
  constructor(x,y,r){
    const options = { //bounce back after hitting the aliens
      restitution: 0.8
    };
    this.body = Bodies.circle(x,y,r,options);
    Body.setMass(this.body,this.body.mass*4);
    this.r =r;
    Composite.add(engine.world, [this.body]);
  }
  display(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    catx = pos.x;
    caty = pos.y;
    rotate(angle);
    imageMode(CENTER);
    image(catimg,0,0,this.r*2,this.r*2);
    pop();
  }
  delete(){
    Matter.World.remove(world,this.body);
  }
}