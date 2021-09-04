
function preload(){
  //pre-load images
  runnerimage = loadImage("Runner-1.png")
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  player = createSprite(200,200,100,100);
  player.addImage("runnerimage");
  player.scale=0.5;
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY =4;
  path.scale=1.2;
}

function draw() {
  background(220);
  if(path.y > 400){
    path.y = height/2;
  }

}
