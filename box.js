class Box{
  constructor(x,y,w,h,s){
    this.static = s;
    this.body= Bodies.rectangle(x,y,w,h,s);
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