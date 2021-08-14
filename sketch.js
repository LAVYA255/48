var PLAY=1;
var END=0;
var bg , bgimg, busimg, bus,book, bookimg;
var gameState=PLAY;
var boyimg;
var ground;
var stoneimg;
var pencilimg;
var score=0;
var obstaclesgrp;
var goimg, go;
var cloud1img, cloud2img, cloud3img;
var cloudsgrp;

function preload(){
bgimg=loadImage("background.jpg");
busimg=loadImage("bus.png");
boyimg=loadImage("boy.png");
bookimg=loadImage("book.png");
stoneimg=loadImage("Stone.png");
pencilimg=loadImage("Pencil.png")
goimg= loadImage("gameover.png")
cloud1img=loadImage("cloud1.png");
cloud2img=loadImage("cloud2.png");
cloud3img=loadImage("cloud3.png")

}
function setup() {
  createCanvas(1600,1050);
  //createSprite(400, 200, 50, 50);
 //bus.velocityX=0;
// bg=createSprite(0,0,1600,1050);
//bg.addImage(bgimg);
//bg.scale=3.5;
obstaclesgrp= createGroup();
cloudsgrp=createGroup();
ground=createSprite(800,1000,1500,10);


bus=createSprite(200,900,50,50);
bus.addImage(busimg); 
bus.scale=0.4;
 boy= createSprite(1460,900,50,50);
 boy.addImage(boyimg);
boy.scale=0.6;

//book = createSprite(bus.x,bus.y,10,10)
//book.addImage(bookimg)
//book.scale=0.3;
//book.velocityX=5;
}
function spawnObs(){

  if(frameCount%120===0){
  
var obstacles=createSprite(200,900,10,10);
obstacles.velocityX=5;
var r=Math.round(random(1,3));
switch(r){
  case 1:obstacles.addImage(bookimg);
  
  break;

  case 2:obstacles.addImage(stoneimg);
   
  break; 
 
  case 3:obstacles.addImage(pencilimg);

  break;

  default:break;

  
}


obstacles.scale=0.2;
obstacles.lifetime=400;
obstaclesgrp.add(obstacles);


}

}

function spawnClouds(){

  if(frameCount%90===0){
  
var cloud=createSprite(100,100,10,10);
cloud.y=Math.round(random(50,200));
cloud.velocityX=5;
var a=Math.round(random(1,3));
switch(a){
  case 1:cloud.addImage(cloud1img);
  
  break;

  case 2:cloud.addImage(cloud2img);
   
  break; 
 
  case 3:cloud.addImage(cloud3img);xs
  break;

  default:break;

  
}


cloud.scale=0.2;
cloud.lifetime=400;
cloudsgrp.add(cloud);


}

}


function draw() {
// bg.velocityX=3;
//if(bg.x<0) {
//bg.x=bg.width/2

//}
 background(bgimg);



 textSize(20);
  text("Score:"+score,1500,50);


 
if(gameState===PLAY){
  score=score+Math.round(getFrameRate()/60);
  if(boy.y>600){
    if(keyDown('SPACE')){
   boy.velocityY=-20;
   } 
  }
  boy.velocityY=boy.velocityY+0.8
 boy.collide(ground);

  if(obstaclesgrp.isTouching(boy)){
 gameState=END;

  }
  spawnObs();
  spawnClouds();
}else if(gameState===END){
 boy.velocityY=0;
 obstaclesgrp.setLifetimeEach(-1);
obstaclesgrp.setVelocityXEach(0);
}




  drawSprites();

}