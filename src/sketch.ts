//---- GLOBAL VARIABLES ----//
let game: Game;
let platform1: Platform;
let platform2: Platform;
let platform3: Platform;
let platform4: Platform;
let obstacleArray: Obstacle [] = [];
let obstacleInterval: number;
/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // Tyvärr har jag inte fått till den globala typningen för
  // inladdningen av ljud men fungerar bra enligt nedan..
  // sound = (window as any).loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  createCanvas(600, 400); // bestäm storlek
  frameRate(60);
  // noCursor();
  platform1 = new Platform(createVector(600, 250));
  platform2 = new Platform(createVector(900, 250));
  platform3 = new Platform(createVector(900, 150));
  platform4 = new Platform(createVector(1200, 150));
  obstacleInterval = 1000;
  setInterval(addNewObstacle, obstacleInterval);
  // game = new Game();
}

function addNewObstacle() {
  let newObstacle = new Obstacle();
  obstacleArray.push(newObstacle);
}


/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  background("green")
  //game.update();
  //game.draw();
  platform1.update();
  platform1.draw();
  platform2.update();
  platform2.draw();
  platform3.update();
  platform3.draw();
  platform4.update();
  platform4.draw();
  
  for (let i = 0; i < obstacleArray.length; i++) {
    obstacleArray[i].update();
    obstacleArray[i].draw();
    obstacleArray[i].isOnScreen();
    if (obstacleArray[i].isVisible === false) {
      obstacleArray.splice(i, 1)
    }
  }
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
