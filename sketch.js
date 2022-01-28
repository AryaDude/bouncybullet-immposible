const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg;
var bird, slingshot;
var score = 0;
var enemyHolder, BadGuy

var gameState = "onSling";
var bg = "sprites/bg1.png";

var countofbirdthatshoots = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg1.png")
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }


    ground = new Ground(600,height,1200,200);
    ground1 = new Ground(0,height/2,200,1200);
    ground2 = new Ground(width,height/2,200,1200);
    ground3 = new Ground(600,-height+750,1200,200);
    

    pig1 = new Pig(getRandomInt(800), 640);






    bird = new Bird(200,50);
    //BadGuy = new RedPerson(getRandomInt(800), 240);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:width/2, y:height/2});
    //enemyHolder = new EnemyHolder(enemy.body,{x:width/2, y:height/2});
}

function draw(){
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("White")
        textFont('Georgia');
        text("Score:  " + score, width/2  + 300, height/2 - 300)
        
    
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();
    pig1.display();
    pig1.score();
    //BadGuy.display()





    bird.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        slingshot.attach(bird.body)
    }
}


function mouseReleased(){
    slingshot.fly();
    var gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        
       slingshot.attach(bird.body);
       
    }
}


if(gameState==="launched"){
    slingshot = new SlingShot(bird.body,{x:bird.body.x, y:bird.body.y});
}
