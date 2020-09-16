const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var circle1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var circle1_options ={
        restitution:1.0
    }

    circle1 = Bodies.circle(200,200,200,circle1_options);
    World.add(world,circle1);
    var rectangle1_options={
    isStatic:true    
    }



    rectangle1=Bodies.rectangle(200,390,30,20,rectangle1_options);
World.add(world,rectangle1);

    console.log(circle1);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(rectangle1.position.x,rectangle1.position.y,200,20)
    ellipseMode(RADIUS);
    ellipse(circle1.position.x,circle1.position.y,20,20);
}