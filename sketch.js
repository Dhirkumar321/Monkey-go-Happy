var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (400,400);
  
  
  monkey = createSprite(50,160,40,50)
  monkey.addAnimation("monkeyrunning",monkey_running) 
  monkey.scale = 0.1
  
  ground = createSprite(200,390,800,20)
  ground.velocityX = - 5
  score = 0
  
}


function draw() {
  background("black")
   text("Score: "+ score, 200,50);
    score = score + Math.round(getFrameRate()/60);
  
  if(ground.x<0){
    ground.x = 200;
  }
  
   if(keyDown("space")&& monkey.y >= 159) {
        monkey.velocityY = -12;
        
    }
  monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);
  
  console.log(monkey.y)
  spawnObstacles()
  spawnBananas()
  
  
  drawSprites();
  
}

function spawnObstacles(){
  
  if(frameCount % 60 === 0) {
    
  
obstacle = createSprite(600,350,800,20)
  obstacle.addAnimation("obstacles", obstaceImage)
  obstacle.scale = 0.1
  obstacle.velocityX = - 5
  }
}

function spawnBananas(){
  
  if(frameCount % 90 === 0) {
    
  
banana = createSprite(600,280,800,20)
  banana.addAnimation("bananas", bananaImage)
  banana.scale = 0.1
  banana.velocityX = - 5
  }
}




