const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var log1,log2,log3;
var paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,100,600,10);
  
  paper = new Paper(56,46,55,55);

  log1 = new Dustbin(200,200,10,50);
  log2 = new Dustbin(400,400,10,50);
  log3 = new Dustbin(100,200,50,10);


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);

paper.display();
  log1.display();
  log2.display();
  log3.display();
  ground.display();

  drawSprites();
 
}


