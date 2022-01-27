var canvas;
var dog, dogImage, dogAnimation;
var gameState = 0;
var bg, bgImg;
var score = 0;

function preload()
{
    dogAnimation = loadAnimation("Run(1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png")
    dogImage = loadImage("Run(1).png");
    bgImg = loadImage("bg.jpg");
}

function setup()
{
    canvas = createCanvas(1530,730);

    bg = createSprite(965,325,1630, 730);
    bg.addImage(bgImg);
    bg.scale = 3;
    bg.velocityX = -2;
    if (bg.x < 0) 
    {
        bg.x = bg.width / 2;
    }

    dog = createSprite(150,600,50,50);
    dog.shapeColor = "red";
    dog.addAnimation("running",dogAnimation);
    dog.scale = 0.3;
    
}

function draw()
{
    //if(gameState === 0)
    //{
        
        
        textSize(50);
        stroke(4);
        fill("brown");
        textFont("Times New Romans")
        text("Dog To The Rescue", 600, 150); 
    //}
   // if(gameState === 1)
    //{
        drawSprites();
    //}
}

//bg.velocityX = -2;
  //if (bg.x < 0) {
    //bg.x = bg.width / 2;
  //}
  