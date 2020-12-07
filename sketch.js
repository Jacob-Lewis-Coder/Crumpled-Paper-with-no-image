
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;



function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(100, 200)
	ground = new Ground(200,390,1600,20);
	boxbase = new Box(650, 375, 200,10);
	boxleft = new Box(550, 330, 10,100);
	boxright = new Box(745, 330,10, 100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  //Engine.update(engine);
  ball1.display();
  ground.display();
  boxbase.display();
  boxleft.display();
  boxright.display();
  
 
 //drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW ){
	console.log(ball1.body.position);
	Matter.Body.applyForce(ball1.body, ball1.body.position,{x:25, y:-25})
}
}


