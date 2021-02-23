const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


  var box1 = new box (200,200,20,20)
  var box2 = new box(200,200,20,20)
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.show();
    box2.show();
}