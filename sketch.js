
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	paper= new Paper(200,500);
	 ground = new Ground(width/2,height-20,width,20);
	 
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 console.log(paper)
  drawSprites();
 ground.display();
 paper.display();
}



