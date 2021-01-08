//---- GLOBAL VARIABLES ----//
let game: Game;

let outrunFont: any;
let pixelFont: any;

let shootSound: p5.SoundFile;
let backgroundSound: p5.SoundFile;

let prototypeAsset: p5.Image;
let prototypeDeathAsset: p5.Image;

let droneAsset: p5.Image;
let droneDeathAsset: p5.Image;
let runnerAsset: p5.Image;
let platformAsset: p5.Image;
let powerupLifeAsset: p5.Image;
let lifeAsset: p5.Image;

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

  // Thanks to https://oco.itch.io/cyberpunk-character-pack for art

  runnerAsset = loadImage("./assets/sprites/runner.gif");
  prototypeAsset = loadImage("./assets/sprites/prototype.gif");
  prototypeDeathAsset = loadImage("./assets/sprites/prototypeDeath.gif");
  droneAsset = loadImage("./assets/sprites/drone.gif");
  droneDeathAsset = loadImage("./assets/sprites/droneDeath.gif");

  // https://trixelized.itch.io/starstring-fields

  platformAsset = loadImage("./assets/imgs/platform.png");

  shootSound = loadSound("./assets/sound/shoot-sound.wav");
  backgroundSound = loadSound("./assets/sound/background-sound.wav");

  // https://www.artstation.com/thebyteman
  powerupLifeAsset = loadImage("./assets/sprites/heart.gif");

  lifeAsset = loadImage("./assets/imgs/heart.png");
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

/**
   * Built in windowResize listener function in P5

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);}
   */
