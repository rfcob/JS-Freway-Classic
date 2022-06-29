//defining and loading the images files of game elements

let frewayimage;
let car1;
let car2;
let car3;
let actor;

let collidesound;
let pointsound;
let trackgame;

//loading the images before begin the game
function preload(){
  frewayimage=loadImage("Images/estrada.png")
  car1 = loadImage("Images/carro-1.png")
  car2 = loadImage("Images/carro-2.png")
  car3 = loadImage("Images/carro-3.png")
  car4 = loadImage("Images/carro-2.png")
  car5 = loadImage("Images/carro-3.png")
  car6 = loadImage("Images/carro-1.png")
  actor = loadImage("Images/ator-1.png")
  carsIm = [car1,car2,car3,car4,car5,car6]
  collidesound=loadSound("sounds_game/colidiu.mp3")
  pointsound=loadSound("sounds_game/pontos.wav")
  track=loadSound("sounds_game/trilha.mp3")
}