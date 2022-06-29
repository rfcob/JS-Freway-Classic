// defining y position for the actor (cow)
let yActor = 367;
let xActor = 100;
let actorHeig = 28;
let actorLen = 28;
let mypoints =0;
let collide = false;

// function defined for showing the actor after start the game

function showActor(){
  image(actor, xActor, yActor, actorLen, actorHeig);
}

//defining the function that control de actor movement

function moveActor(){
  if (keyIsDown(UP_ARROW)){
    yActor -= 2.2;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (canMove()){
    yActor += 2.2;
    }
  }
}

function collideverify(){
  for(let i = 0; i < carsIm.length; i=i+1){
    collide = collideRectCircle(xCars[i],yCars[i],carLen,carHeig, xActor, yActor, 20)
    if (collide){
    coll();
    collidesound.play();
    if(testpoints()){
      mypoints-=1
    }
  }
}
}

//function that move from position of collision to inicial position. This function it is integrate with collide verifu function

function coll(){
  yActor = 367
}

function showPoints(){
  textAlign(CENTER);
  textSize(25);
  text(mypoints, width/5, 25)
  fill(color(255,240,60))
}

function markPoint(){
  if (yActor < 15){
    mypoints += 1;
    yActor = 367;
    pointsound.play();
  }
}

function testpoints(){
  return mypoints > 0
}

function canMove(){
  return yActor < 367
}