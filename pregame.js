function setup() {
  createCanvas(600,400);
}

function draw() {
  background(frewayimage);
  track.loop();
  showActor();
  showCars();
  rptMove();
  moveCars();
  moveActor();
  collideverify();
  showPoints();
  markPoint();
}