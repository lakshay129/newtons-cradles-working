const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1;
var bob1,bob2,bob3,bob4,bob5
var sling10,sling20,sling30,sling40,sling50;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(300,50,300,20);
   

    bob1 = new bob(158,350);
    bob2 = new bob(229,350);
    bob3 = new bob(300,350);
    bob4 = new bob(371,350);
    bob5 = new bob(442,350);

   sling10=new sling1(bob1.body,ground1.body,-140,0);
   sling20=new sling1(bob2.body,ground1.body,-73,0);
   sling30=new sling1(bob3.body,ground1.body,0,0);
   sling40=new sling1(bob4.body,ground1.body,73,0);
   sling50=new sling1(bob5.body,ground1.body,140,0);
}

function draw(){
    background("gold");
    Engine.update(engine);
   
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    ground1.display();

    sling10.display();   
    sling20.display();   
    sling30.display();   
    sling40.display();   
    sling50.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}
