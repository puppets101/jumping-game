class GamePlay {
  // private score: Score;
  // private character: Character;
  // private obstacle: Obstacle;
  // private platform: Platform;
  // private background: Background;
  // private lives: Lives;
  // private gameAudio: GameAudio;
  // private pauseScreen: PauseScreen;
  // private projectile: Projectile;
  // private drawableEntity: DrawableEntity;
  // private movableEntity: MovableEntity;
private platform1: Platform;
private platform2: Platform;
private platform3: Platform;
private platform4: Platform;
private obstacleArray: Obstacle [];

  constructor() {
    // this.score = new Score();
    // this.character = new Character();
    // this.obstacle = new Obstacle();
    // this.platform = new Platform();
    // this.background = new Background();
    // this.lives = new Lives();
    // this.gameAudio = new GameAudio();
    // this.pauseScreen = new PauseScreen();
    // this.projectile = new Projectile();
    this.platform1 = new Platform(createVector(600, 250));
    this.platform2 = new Platform(createVector(900, 250));
    this.platform3 = new Platform(createVector(900, 150));
    this.platform4 = new Platform(createVector(1200, 150));
    this.obstacleArray = [];
  }
  pauseGame() {}

  gameOver() {}

  public update() {
    this.platform1.update();
    this.platform2.update();
    this.platform3.update();
    this.platform4.update();

    for (let i = 0; i < this.obstacleArray.length; i++) {

      if ((this.obstacleArray[i].position.y + this.obstacleArray[i].height === 250 && (this.platform1.position.x > 400 && this.platform1.position.x < 500 || this.platform2.position.x > 400 && this.platform2.position.x < 500))  // check if obstacle lands on one of the lower platforms
      || (this.obstacleArray[i].position.y + this.obstacleArray[i].height === 150 && (this.platform3.position.x > 400 && this.platform3.position.x < 500 || this.platform4.position.x > 400 && this.platform4.position.x < 500)) // check if obstacle lands on one of the upper platforms
      || (this.obstacleArray[i].position.y + this.obstacleArray[i].height === 400)) {  // check if obstacle lands on the ground

        this.obstacleArray[i].velocity.y = 0;
        this.obstacleArray[i].velocity.x = 3;
      } 

      this.obstacleArray[i].update();
      this.obstacleArray[i].draw();
      this.obstacleArray[i].isOnScreen();
      if (this.obstacleArray[i].isVisible === false) {
        this.obstacleArray.splice(i, 1)
      }   
    }
    
  }

  public draw() {
    this.platform1.draw();
    this.platform2.draw();
    this.platform3.draw();
    this.platform4.draw();
  }

  public addNewObstacle() {
    let newObstacle = new Obstacle();
    this.obstacleArray.push(newObstacle);
  }

}


