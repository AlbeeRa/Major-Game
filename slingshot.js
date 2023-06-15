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