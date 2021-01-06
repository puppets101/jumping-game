//---- GLOBAL VARIABLES ----//
let game: Game;

let menu: Menu;
let outrunFont: any;
let pixelFont: any;

let projectiles: Projectile;
let backgroundImg: any;


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // Tyvärr har jag inte fått till den globala typningen för
  // inladdningen av ljud men fungerar bra enligt nedan..
  // sound = (window as any).loadSound('../assets/mySound.wav');

  outrunFont = loadFont("./assets/fonts/Outrun_future.otf");
  pixelFont = loadFont("./assets/fonts/PressStart2P-Regular.ttf");
  

}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  createCanvas(800, 600); // bestäm storlek
  frameRate(60);
  menu = new Menu(true, "");

  // noCursor();

  game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    game.gamePlay.character.jump();
  }
  if (keyCode === 32){
    game.gamePlay.addNewProjectiles();
    
  }
}


/**
   * Built in windowResize listener function in P5

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);} 
   */
