//---- GLOBAL VARIABLES ----//
let game: Game;
let character: Character;
let obstacleInterval: number = 1000;
let projectiles: Projectile
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

  game = new Game();
  setInterval(function () {
    game.gamePlay.addNewObstacle();
    game.gamePlay.addNewPlatform();
  }, obstacleInterval);
  character = new Character(
    true,
    createVector(),
    createVector(),
    true,
    createVector(),
    0
  );
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  background("green");
  game.update();
  game.draw();
  character.draw();
  character.gravity();
  projectiles.shoot()
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    console.log("jump");
    character.jump();
  }
}

/**
   * Built in windowResize listener function in P5

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);} 
   */
