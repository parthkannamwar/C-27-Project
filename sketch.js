
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var rope;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(500,200,400,20)

	bob1=new Bob(100,100,40)
	rope1=new Chain(bob1.body,{x:350,y:200})
	bob2=new Bob(460,500,40)
	rope2=new Chain(bob2.body,{x:430,y:200})
	bob3=new Bob(500,500,40)
	rope3=new Chain(bob3.body,{x:510,y:200})
	bob4=new Bob(540,500,40)
	rope4=new Chain(bob4.body,{x:590,y:200})
	bob5=new Bob(580,500,40)
	rope5=new Chain(bob5.body,{x:670,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");


  if(keyDown("up"))
  {
	  Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-20})
  }

  roof.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  
  drawSprites();
 
}



