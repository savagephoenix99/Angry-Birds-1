const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var x, y;
var BgImg;
var Slingshot1;
var platform;
var engine, world;
var box1, box2, box3, box4, box5
var pig1, pig2
var Bird1;
var log1, log2, log3, log4
var catapult

function preload() {
    BgImg=loadImage("bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 220);
    //console.log(pig1.speed)

    log1 = new Log(810,260,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
 

    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);



    Bird1 = new Bird(200,50);
    Slingshot1=new Slingshot(Bird1.body, {x:200,y:50});
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
    platform.display();
    pig1.display();
    pig2.display();
    Bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    Slingshot1.display();

}

function mouseDragged(){
    Matter.Body.setPosition(Bird1.body,{x: mouseX,y: mouseY});
}
function mouseReleased(){
    Slingshot1.fly();
}
function keyPressed(){
    if (keyCode === 32){
        Slingshot1.attach(Bird1.body);
    }
}