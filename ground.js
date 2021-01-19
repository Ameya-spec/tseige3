class Ground {
constructor(x,y){
var options = {
  isStatic:true
}
this.body=Bodies.rectangle(x,y,1000,15,options);
this.width=1000;
this.height=15
World.add(world,this.body);
}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
fill("black");
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}
}