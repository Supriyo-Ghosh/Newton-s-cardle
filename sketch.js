const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(20,30,10)
	bob2 = new Bob(20,30,10)
	bob3 = new Bob(20,30,10)
	bob4 = new Bob(20,30,10)
	bob5 = new Bob(20,30,10)

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0)
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*2, 0)
	rope3 = new Rope(bob3.body, roof.body, -bobDiameter*2, 0)
	rope4 = new Rope(bob4.body, roof.body, -bobDiameter*2, 0)
	rope5 = new Rope(bob5.body, roof.body, -bobDiameter*2, 0)

	roof = new Roof(width/2, height/4, width/7, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  engine.update(engine)

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 roof.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

function drawline(constraint){
	bobposition-constraint.bodyA.position
	roofposition-constraint.bodyB.position

	roofoffset=constraint.pointB;

	roofX=roofPosition.x+roofoffset.x
	roofY=roofPosition.y+roofoffset.y
	line(bobPosition.x, bobPosition.y, roofX,roofY);
}

