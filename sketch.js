const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine ,world;
var ground,ground2,ground3;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24;
var chain;
var bb1,bb2,bb3,bb4,bb5,bb6,bb7,bb8,bb9,bb10,bb11,bb12,bb13,bb14,bb15;
var polygon

function preload() {

}

function setup(){
    var canvas = createCanvas(1500,500);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(750,490,1500,5);
    ground2 = new Ground(450,300,300,5);
    ground3 = new Ground(1000,225,300,5);

    b1 = new Block(325,272,25,50);
    b2 = new Block(325+30,272,25,50);
    b3 = new Block(325+30+30,272,25,50);
    b4 = new Block(325+30+30+30,272,25,50);
    b5 = new Block(325+30+30+30+30,272,25,50);
    b6 = new Block(325+30+30+30+30+30,272,25,50);
    b7 = new Block(325+30+30+30+30+30+30,272,25,50);
    b8 = new Block(325+30+30+30+30+30+30+30,272,25,50);
    b9 = new Block(325+30+30+30+30+30+30+30+30,272,25,50);

    b10 = new Block(325+15,272-50,25,50);
    b11 = new Block(325+15+30,272-50,25,50);
    b12 = new Block(325+15+30+30,272-50,25,50);
    b13 = new Block(325+15+30+30+30,272-50,25,50);
    b14 = new Block(325+15+30+30+30+30,272-50,25,50);
    b15 = new Block(325+15+30+30+30+30+30,272-50,25,50);
    b16 = new Block(325+15+30+30+30+30+30+30,272-50,25,50);
    b17 = new Block(325+15+30+30+30+30+30+30+30,272-50,25,50);
    
    b18 = new Block(325+30,272-100,25,50);
    b19 = new Block(325+30+30,272-100,25,50);
    b20 = new Block(325+30+30+30,272-100,25,50);
    b21 = new Block(325+30+30+30+30,272-100,25,50);
    b22 = new Block(325+30+30+30+30+30,272-100,25,50);
    b23 = new Block(325+30+30+30+30+30+30,272-100,25,50);
    b24 = new Block(325+30+30+30+30+30+30+30,272-100,25,50);

    bb1 = new Block(900,197,25,50);
    bb2 = new Block(900+40,197,25,50);
    bb3 = new Block(900+40+40,197,25,50);
    bb4 = new Block(900+40+40+40,197,25,50);
    bb5 = new Block(900+40+40+40+40,197,25,50);
    bb6 = new Block(900+40+40+40+40+40,197,25,50);
    
    bb7 = new Block(900+20,197-50,25,50);
    bb8 = new Block(900+20+40,197-50,25,50);
    bb9 = new Block(900+20+40+40,197-50,25,50);
    bb10 = new Block(900+20+40+40+40,197-50,25,50);
    
    bb11 = new Block(900+20+40+40+40+40,197-50,25,50);
    bb12 = new Block(900+40,197-100,25,50);
    bb13 = new Block(900+40+40,197-100,25,50);
    bb14 = new Block(900+40+40+40,197-100,25,50);
    bb15 = new Block(900+40+40+40+40,197-100,25,50);

   polygon = new Polygon(100,100,60) 
   chain = new Chain(polygon.body,{x:200,y:200})


}

function draw(){
    background("skyblue");
    Engine.update(engine);
    ground.display();
    ground2.display();
    ground3.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    bb1.display();
    bb2.display();
    bb3.display();
    bb4.display();
    bb5.display();
    bb6.display();
    bb7.display();
    bb8.display();
    bb9.display();
    bb10.display();
    bb11.display();
    bb12.display();
    bb13.display();
    bb14.display();
    bb15.display();

    
    polygon.display();
    chain.display();

    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
  chain.fly();
}

function keyPressed(){
    if (keyCode === 32){
        chain.attach(polygon.body);
    }
}