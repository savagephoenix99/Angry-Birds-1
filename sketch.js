const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var BgImg
var engine, world;
var box1, box2, box3, box4, box5
var pig1, pig2
var Bird1,Bird2;
var log1, log2, log3, log4

function preload() {
    BgImg=loadImage("bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,360,75,75);
    box2 = new Box(950,360,75,75);
    box3 = new Box(700,260,75,75);
    box4 = new Box(950,260,75,75);
    box5 = new Box(825,160,75,75)
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(825, 360);
    pig2 = new Pig(825, 260)
    Bird1 = new Bird(300, 50);
    log1 = new Log(825, 300, 400, PI/2)
    log2 = new Log(835, 200, 400, PI/2)
    log3 = new Log(720, 80, 200, PI/4)
    log4 = new Log(920, 80, 200, -PI/4)
}

function draw(){
    background(BgImg);
    Engine.update(engine);
   /* console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    Bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    console.log(mouseX)
}