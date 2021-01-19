const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygonBody;
var polygonImage;
 var slingShot;
var ground;
var square1,square2;
var square3,square4;
var square5,square6;
var square7,square8;
var square9,square10;
function preload() {
  polygonImage = loadImage("polygon.png");
  getBackgroundImg();
}


function setup(){
  createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
 
    var polygonBody_options={
      isStatic:false,
      restitution:0.8,
      friction:1.0,
      density:0.10
    }
    
    polygonBody=Bodies.circle(80,100,30,polygonBody_options);
World.add(world,polygonBody);
console.log(polygonBody.position.x);
slingShot=new Slingshot(polygonBody, {x:100,y:130});
 //first row
ground = new Ground(500,585);
square1 = new Square(600,545);
square2 = new Square(664,545);
square3 = new Square (728,545);
square4 = new Square(536,545);
// second row
square5 = new Square(695,483);
square6 = new Square(631,483);
square7 = new Square(567,483);
//third row
square8 = new Square(600,421);
square9 = new Square(664,421);
//last row
square10 = new Square(633,359)
  }
function draw (){
    background("beige");
    Engine.update(engine)
     //  rectMode(CENTRE)
// rectMode(CENTER);
// rect(ground.position.x,ground.position.y,width,height);
imageMode(CENTER);

   image(polygonImage,polygonBody.position.x,polygonBody.position.y,120,120);
    
   ellipseMode(RADIUS);

 slingShot.display();
 ground.display();
 square1.display();
 square2.display();
 square3.display();
 square4.display();
 square5.display();
 square6.display();
 square7.display();
 square8.display();
 square9.display();
 square10.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygonBody,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
  slingShot.fly()
  }
  function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygonBody,{x:100,y:130})
        slingshot.attach(polygonBody);
    }
  }
  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json()
    console.log(responseJson);
    var dateTime = responseJson["datetime"]
    var hour = dateTime.slice(11,13) 
    if(hour>=06&&hour<=19){
        backgroundImg = loadImage("sprites/bg.png");
    
    }
    else{
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
    }