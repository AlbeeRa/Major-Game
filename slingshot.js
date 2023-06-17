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
      push();
      stroke(255);
      strokeWeight(10);
      const posA = this.sling.pointA;
      const posB = this.sling.bodyB.position;
      line(posA.x,posA.y,posB.x,posB.y);
      pop();

    //   catFly = false;
    // }
    // else{
    //   catfly = true;
    }
  }
  
  // detaching the Cat from the constraint to shoot
  project(){
    this.sling.bodyB = null;
  }

  //attach to constraint
  attach(body){
    this.sling.bodyB=body;
  }

  // delete(){
  //   Matter.World.remove(world,this.sling);
  // }

}