//position variables that cars
let xCars = [600,600,600,600,600,600];
let yCars = [40,98,150,210,265,315];
// defining initial velocities for the cars.
let vCars = [4.0,4.7,5.6,4.9,5.1,4.7];
//size picutures cars
let carLen = 50;
let carHeig = 40;

// This file contains the code for move all cars game.
// displaying the cars on screen

function showCars(){
  for(let i = 0;i < carsIm.length; i = i + 1){
    image(carsIm[i], xCars[i], yCars[i], carLen, carHeig);
  }
}

//moving automatically the cars on screen

function moveCars(){
  for(let i = 0; i < vCars.length; i = i + 1){
    xCars[i] -= vCars[i];
  }
}


//defining a repetitive movement for the cars. A infinite loop of the move.The cars will disappear in the left side of the screen and reappear in the right side.

function rptMove(){
   for(let i = 0;i < carsIm.length; i = i + 1){
     if (endScrn(xCars[i])){
       xCars[i]= 600;
     }
   }
}

function velocity(){
  return  xCars[i] -= vCars[i];
}
function endScrn(xCars){
  return xCars <-50
}
