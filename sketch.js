var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj = createSprite(400,200,80,30);
  obj.shapeColor = "green";
  obj.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  /*if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } */ 
  
  if(isTouching(movingRect,obj)){
    movingRect.shapeColor = "red";
    obj.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    obj.shapeColor = "green";
  }
  
  drawSprites();
}

function isTouching(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2
      && a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2) {
    return true;
  }
  else {
    return false;
  }
}