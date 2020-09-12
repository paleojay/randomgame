
function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 100, 50, 80);
  fixedrect.shapeColor = "green";
  //fixedRect.debug = true;
  movingrect = createSprite(400, 800,80,30);
  movingrect.shapeColor = "green";
  //movingRect.debug = true;

  go  = createSprite (100,200,50,30);
  go2  = createSprite (300,200,50,30);
  go3  = createSprite (500,200,50,30);
  go4  = createSprite (600,200,50,30);

  //fixedrect.shapeColor = ("green");
  //movingrect.shapeColor = ("green");
  go.shapeColor = ("green");
  go2.shapeColor = ("green");
  go3.shapeColor = ("green");
  go4.shapeColor = ("green");

  movingrect.velocityY = -5;
  fixedrect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceoff(fixedrect,movingrect);
  
  movingrect.y = mouseY;
  movingrect.x = mouseX;
 
  if (istouching(movingrect,go4)){
    go4.shapeColor = ("red");
    movingrect.shapeColor = ("red");
  }

  else{
   
  go4.shapeColor = ("green");
  movingrect.shapeColor = ("green"); 
  }

  drawSprites();
}

