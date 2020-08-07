var bg 
var player, tool
var gameState = "intro"
var startButton



function preload() {

bg = loadImage("Note.jpg")

shopimg = loadImage("shop.png")

bg2 = loadImage ("bg2main.png") 

Minerwalk = loadImage("minerwalk.png")
MinerwalkRight = loadImage("minerwalkr.png")
Minerrun = loadImage("minerrun.png")
MinerrunRight = loadImage("minerrunright.png")
starterAxe = loadImage("starteraxe.png")


}






function setup() {
  createCanvas(windowWidth-10,windowHeight-10);
  player = createSprite(windowWidth/2-200, 840, 50, 50);
  player.addImage(Minerwalk)
  player.scale = 1.5
  tool = createSprite(230,870,50,50)
  tool.addImage(starterAxe)

  startButton = createButton("play")
  startButton.position(windowWidth/2 + 400,windowHeight - 220)
  startButton.style('font-size','50px')
  startButton.style('border-radius','22px')

}

function draw() {
  
  Edges = createEdgeSprites()

  player.collide(Edges)

if (gameState == "intro"){
  background(bg);
  textSize(30)
  fill("black")
  text("Mining Adventure",windowWidth/2 - 100,25)
  player.visible = false
  tool.visible = false
  startButton.mousePressed(function (){
    gameState = "surface"

    startButton.hide();

  })



}

else if(gameState == "surface"){

background(bg2)
text(mouseX + ":"+ mouseY,50,50)

player.visible = true
tool.visible = true

if (keyDown(RIGHT_ARROW)){
  player.x = player.x + 15
  player.addImage(MinerwalkRight)
}

if (keyDown(LEFT_ARROW)){
  player.x = player.x - 15
  player.addImage(Minerwalk)
}

if (player.x < 175){
  gameState = "mine"
}

if(player.isTouching(tool)){
  tool.visible = false
  gameState = "surface2"
}




}

else if(gameState == "surface2"){

  background(bg2)
  text(mouseX + ":"+ mouseY,50,50)
  
  player.visible = true
  
  
  if (keyDown(RIGHT_ARROW)){
    player.x = player.x + 15
    player.addImage(MinerwalkRight)
  }
  
  if (keyDown(LEFT_ARROW)){
    player.x = player.x - 15
    player.addImage(Minerwalk)
  }
  
  if (player.x < 175){
    player.addImage(Minerrun)
    gameState = "mine"
  }
  
  }



else if(gameState == "mine"){
  background(0,0,0)

  

  if (keyDown(RIGHT_ARROW)){
    player.x = player.x + 15
    player.addImage(MinerrunRight)
  }
  
  if (keyDown(LEFT_ARROW)){
    player.x = player.x - 15
    player.addImage(Minerrun)
  }

  if (keyDown(UP_ARROW)){
    player.y = player.y - 15
    
  }
  
  if (keyDown(DOWN_ARROW)){
    player.y = player.y + 15
    
  }
  
  
}



  drawSprites();

}