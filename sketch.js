var bg;
var spacecraft;
var spimg1,spimg2,spimg3,spimg4;
var asteroid;
var ast1, ast2, ast3;
var gameState=0
var score=0
var asteroidsGroup;
var moon;
var aster1;
var lazer, lazering,lazergrp;
var gameOver,gameOverimg;


function preload(){
  bg=loadImage("spacebg.jpg");
  spimg1=loadImage("spacecraft1.png");
  spimg2=loadImage("spacecraft2.png");
  spimg3=loadImage("spacecraft3.png");
  spimg4=loadImage("spacecraft4.png");
  aster1=loadImage("Aster1.jpg");
  ast1=loadImage("asteroid1.jpg");
  ast2=loadImage("asteroid2.jpg");
  ast3=loadImage("asteroid3.jpg");
  lazering=loadImage("lazar1.png");
  moon=loadImage("moon.jpg");
  gameOverimg=loadImage("gover.jpg");
}
function setup(){
createCanvas(windowWidth,windowHeight);
spacecraft = createSprite(50,550,10,10);
spacecraft.addImage(spimg1);
spacecraft.scale=0.3

asteroidsGroup=new Group();
lazergrp=new Group();


}
function draw(){
background(bg);
fill(255);
text("Score: " +score,800,50);
spawnAsteroids()
//if(gameState===1){

//}
if(keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y -5;
  spacecraft.addImage(spimg2);
}
  
if(keyDown("LEFT_ARROW")){
  spacecraft.addImage(spimg4);
  spacecraft.x = spacecraft.x - 5;
}
  
if(keyDown("RIGHT_ARROW")){
  spacecraft.addImage(spimg3);
  spacecraft.x = spacecraft.x + 5;
}
  
if(keyDown("space")){
   lazer=createSprite(spacecraft.x,spacecraft.y-110,10,20);
   lazer.velocityY = -20;
   lazer.addImage(lazering);
   lazer.scale=0.3;
   lazergrp.add(lazer);
}

if(asteroidsGroup.isTouching(spacecraft))
{

spacecraft.destroy();
gameState=1;
}

if(asteroidsGroup.isTouching(lazergrp))
{

asteroid.destroy();
//lazergrp.destroyEach();
score+=5;
}
if (gameState==1)
{
  gameOver=createSprite(550,250,10,10);
  gameOver.addImage(gameOverimg);
  gameOver.scale=0.5;

}

drawSprites();
}
function spawnAsteroids() {
  //write code here to spawn the asteroids
  if (frameCount % 240 === 0) {
    asteroid = createSprite(200,-20);
    asteroid.x=Math.round(random(200,600))
    asteroid.scale = 0.25;
    asteroid.velocityY = +5;
    asteroid.lifetime = 200;
   asteroidsGroup.add(asteroid);
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: asteroid.addImage(ast1);
              break;
      case 2: asteroid.addImage(ast2);
              break;
      case 3: asteroid.addImage(ast3);
              break;
      case 4: asteroid.addImage(aster1);
              break;
      default: break;
    }
  }
}