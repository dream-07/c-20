var astronauts,back;
var bg,sleep,brush,gym,eat,drink,move,bath;


function preload(){
  bg= loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat=loadAnimation("eat1.png","eat2.png","drink1.png","drink2.png");
  move=loadAnimation("move.png","move1.png");
  bath=loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(800,400);

  back=createSprite(400,200);
  back.addAnimation("bacG",bg);
  back.scale=0.19;

  astronauts = createSprite(300,230);
  astronauts.addAnimation("brushing",brush);
  astronauts.scale =0.1;

}

function draw() {
   
 if(keyDown("UP_ARROW")){
  astronauts.addAnimation("sleeping",sleep);
astronauts.changeAnimation("sleeping")
astronauts.y =250;
astronauts.velocityY =0;
astronauts.velocityX =0;
 }

 if(keyDown("DOWN_ARROW")){
  astronauts.addAnimation("gyming",gym);
astronauts.changeAnimation("gyming")
astronauts.y =250;
astronauts.velocityY =0;
astronauts.velocityX =0;
 }

 if(keyDown("Left_ARROW")){
  astronauts.addAnimation("eating",eat);
astronauts.changeAnimation("eating")
astronauts.y =250;
astronauts.velocityY =0;
astronauts.velocityX =0;
 }

 if(keyDown("RIGHT_ARROW")){
  astronauts.addAnimation("bathing",bath);
astronauts.changeAnimation("bathing")
astronauts.y =250;
astronauts.velocityY =0;
astronauts.velocityX =0;
 }

 
  drawSprites();
}