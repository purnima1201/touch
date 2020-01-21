var fixRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(200, 200, 50, 80);
  fixRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0); 
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;
  console.log(movingRect.width/2+fixRect.width/2);
  console.log(movingRect.x-fixRect.x);
  if(movingRect.width/2+fixRect.width/2===movingRect.x-fixRect.x ){
    fixRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}