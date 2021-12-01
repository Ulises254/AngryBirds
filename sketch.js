const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var platform;
var constraintLog;
var chain;
var pigImg, pigImg2;
var dayImg, nightImg;
var gameState="OnSling";
var bg;
var score=0;
function preload() {
    backgroundImg = loadImage("Sprites/bg.png");
    pigImg = loadImage("Sprites/enemy.png");
    pigImg2 = loadImage("Sprites/enemyBlueCap.png");
    dayImg = loadImage("Sprites/day.png");
    nightImg= loadImage("Sprites/night.jpg");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bg= backgroundImg;
    
    ground = new Ground(600,height,1200,20);
    platform= new Ground(150,300,350,180);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box6 = new Box(1100,320,70,70);
    pig1 = new Pig(810, 350,pigImg);
    log1 = new Log(900,260,470, PI/2);
    pig2 = new Pig(1020,350, pigImg);

    box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220, pigImg2);
    log3 =  new Log(900,180,470, PI/2);
    box7 = new Box(1100,240,70,70);
    pig4 = new Pig(1020,220, pigImg2);

    box5 = new Box(810,160,70,70);
    box8 = new Box(1020,160,70,70);
    log5 = new Log(920,130,330, PI/2);
    pig5 = new Pig(920,180, pigImg); 


    bird = new Bird(100,100);

    chain= new Slingshot(bird.body, {x:205,y:50});

}

function draw(){
    background(bg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();
    box6.display();
    pig2.display();
    pig2.score();

    box3.display();
    //box4.display();
    pig3.display();
    pig3.score();
    log3.display();
    box7.display();
    pig4.display();
    pig4.score();

    box5.display();
    box8.display();
    log5.display();
    pig5.display();
    pig5.score();

    bird.display();

    platform.display();
    chain.display();
    fill("rgb(171,221,185)");
    textFont("Impact");
    textSize(36);
    text("Score: "+score,1000,50);
}

function mouseDragged(){
    if(gameState!== "Launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});

    }
}

function mouseReleased(){
    chain.fly();
    gameState="Launched";

}

function keyPressed(){
    if(keyCode==32){
        chain.attach(bird.body);
        gameState="OnSling";
        bird.trayectoria= [];
    }

}

async function getBackgroundImg(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
    var responseJson= await response.json();
    var datetime= responseJson.datetime;
    var hour= datetime.slice(11,13);
    if(hour>=06 && hour<=17){
        bg= backgroundImg;
    } 
    else if(17<hour && hour<=20){
        bg=dayImg;
    }
    else{
        bg=nightImg;
    }
}

