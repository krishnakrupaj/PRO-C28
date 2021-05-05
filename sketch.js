const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var bbi,bb2,bb3,paper,ground,launcher

function preload() {
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-5,width,10);
	var options = {
		'restitution':0.8,
		'friction':1,
		'density':1.4,
		'isStatic':true
	}

	paper = new Paper(100,200);
	bb1 = new BinBox(864-15,285,160,20);
	bb2 = Bodies.rectangle(935-15,232,20,100,options);
	bb3 = Bodies.rectangle(728+50,232,20,100,options);
	World.add(world,bb2);
	World.add(world,bb3);
	launcher = new Launcher(paper.body,{x:195,y:115})
  
  Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);	
  background("lightblue");

  Engine.update(engine);  

  rectMode(CENTER);
  rect(bb2.position.x,bb2.position.y,20,100);
  rect(bb3.position.x,bb3.position.y,20,100);

  ground.display();
  paper.display();
  bb1.display();  
  launcher.display()
    
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    launcher.fly()
}