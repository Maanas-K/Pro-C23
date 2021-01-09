const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var box1,box2,box3,ground1;
var boxes= [];

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

   /* var ground_options ={
        isStatic: true
    }

   ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);*/

   /* var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);*/

    box1=new Box(400,200,60,60);
    box2= new Box(375,130,60,150);
    box3= new Box(350,30,75,60)
    ground1=new Ground(200,390,10000,40)



    for(i=1; i<10; i++){

        boxes[i]=new Box(400,height-(i*40),40,40);
        
        
    }
    

   
    
    

    //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    /*rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);*/

    /*ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);*/

    for(i=1; i<10; i++){

        boxes[i].display();
        
        
    }

    box1.display();
    box2.display();
    box3.display();
    ground1.display();
}