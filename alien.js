class Alien{
  constructor(x,y,w,h,s){
    this.static = s;
    this.body= Bodies.rectangle(x,y,w,h,s);
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