class Slingshot{
constructor(body,point){
 var options = {
 bodyA:body,
pointB:point,
stiffness: 0.04,
 length: 10
 }

 this.pointB=point;
this.sling=Constraint.create(options);
  World.add(world,this.sling);
 }
 attach(body){
    this.sling.bodyA = body;
}
fly(){
    this.sling.bodyA=null;
}

display(){

    if(this.sling.bodyA!==null){
    
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}
