
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var bob1,bob2;
var constraintLog;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	

	 constraiedLog = new log(230,180,80,80,PI/2);//se crea el cuerpo B 
     chain1 = new chain(bob1.body,constraiedLog.body);//se crea el objeto de chain que es el cuerpo rigido
    
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();

  bob1.display();
  bob2.display();
  
  constraiedLog.display();
  
 
}






