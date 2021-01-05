class GamePlay {
  private score: Score;
  public character: Character;
  // private obstacle: Obstacle;
  // private platform: Platform;
  // private background: Background;
  // private lives: Lives;
  // private gameAudio: GameAudio;
  // private pauseScreen: PauseScreen;
  // private projectile: Projectile;
  // private drawableEntity: DrawableEntity;
  // private movableEntity: MovableEntity;
  private obstacleArray: Obstacle[];
  private platformArray: Platform[];
  private obstacleInterval: number;
  private platformInterval: number;
  private lives: Lives;
  private graceModeActive: boolean;

  constructor() {
    this.score = new Score();
    this.character = new Character();
    // this.background = new Background();
    // this.gameAudio = new GameAudio();
    // this.pauseScreen = new PauseScreen();
    // this.projectile = new Projectile();

    this.obstacleArray = [];
    this.platformArray = [];
    this.platformInterval = 1000;
    this.obstacleInterval = 1500;

    // interval for creating platforms
    setInterval(() => {
      this.addNewPlatform();
    }, this.platformInterval);

    //interval for creating obstacles
    setInterval(() => {
      this.addNewObstacle();
    }, this.obstacleInterval);

    this.lives = new Lives(createVector(), true);
    this.graceModeActive = false;
  }

  pauseGame() {}

  gameOver() {}

  public update() {

    this.checkCollisions();

    // Uupdates all obstacles
    for (let i = 0; i < this.obstacleArray.length; i++) {
      this.obstacleArray[i].update();
      this.obstacleArray[i].draw();

      // Removes obstacles from array when out of screen
      if (this.obstacleArray[i].isVisible === false) {
        this.obstacleArray.splice(i, 1);
      }
    }

    // Updates all platforms
    for (let i = 0; i < this.platformArray.length; i++) {
      this.platformArray[i].update();
      this.platformArray[i].draw();

      // Removes obstacles from array when out of screen
      if (this.platformArray[i].isVisible === false) {
        this.platformArray.splice(i, 1);
      }
    }
  }

  private checkCollisions() {
    // Compares the obstacle positions to the platform positions
    for (let i = 0; i < this.obstacleArray.length; i++) {
      for (let p = 0; p < this.platformArray.length; p++) {
        if (
          (this.obstacleArray[i].position.y + this.obstacleArray[i].height ===
            this.platformArray[p].position.y &&
            this.platformArray[p].position.x >
              this.obstacleArray[i].position.x - this.platformArray[p].width &&
            this.platformArray[p].position.x <
              this.obstacleArray[i].position.x + this.obstacleArray[i].width) || // check if obstacle lands on one of the higher platforms
          (this.obstacleArray[i].position.y + this.obstacleArray[i].height ===
            this.platformArray[p].position.y &&
            this.platformArray[p].position.x >
              this.obstacleArray[i].position.x - this.platformArray[p].width &&
            this.platformArray[p].position.x <
              this.obstacleArray[i].position.x + this.obstacleArray[i].width) || // check if obstacle lands on one of the lower platforms
          this.obstacleArray[i].position.y + this.obstacleArray[i].height ===
            570
        ) {
          // check if obstacle lands on the ground
          this.obstacleArray[i].velocity.y = 0;
          this.obstacleArray[i].velocity.x = 3;
        }

        // Character collision with object
        if (
          this.obstacleArray[i].position.x - this.obstacleArray[i].width ===
            this.character.position.x - this.character.size.x &&
          this.obstacleArray[i].position.y + this.obstacleArray[i].height ===
            this.character.position.y + this.character.size.y
        ) {
          if (this.graceModeActive) {
            console.log(this.graceModeActive);
            return true;
          }
          // Create func to lose a life and add two seconds of grace mode
          this.lives.countLives();
          this.graceModeActive = true;
          setTimeout(() => {
            this.graceModeActive = false;
          }, 2000);
          return true;
        }
      }
    }

    // Character collision with platform
    for (let p = 0; p < this.platformArray.length; p++) {
      if (
        this.character.position.y + this.character.size.y <=
          this.platformArray[p].position.y + this.platformArray[p].height &&
        this.character.position.y + this.character.size.y >=
          this.platformArray[p].position.y &&
        this.character.position.x <=
          this.platformArray[p].position.x + this.platformArray[p].width &&
        this.character.position.x + this.character.size.x >=
          this.platformArray[p].position.x &&
        this.character.velocity.y >= 0
      ) {
        this.character.position.y = this.platformArray[p].position.y - this.character.size.y
        this.character.velocity.y = 0;
        this.character.applyGravity = 0;
        this.character.canJump = true;
      }
      if (
        this.character.position.y + this.character.size.y <=
          this.platformArray[p].position.y + this.platformArray[p].height &&
        this.character.position.y + this.character.size.y >=
          this.platformArray[p].position.y &&
        this.character.position.x >
          this.platformArray[p].position.x + this.platformArray[p].width
      ) {
        this.character.applyGravity = 0.4;
      }
    }
  }

  public draw() {
    // Draws all obstacles
    for (let i = 0; i < this.obstacleArray.length; i++) {
      this.obstacleArray[i].draw();
    }

    // Draws all platforms
    for (let i = 0; i < this.platformArray.length; i++) {
      this.platformArray[i].draw();
    }
    this.lives.draw();
    this.character.draw();
    this.character.update();
    this.score.draw();
  }

  public addNewObstacle() {
    let newObstacle = new Obstacle();
    this.obstacleArray.push(newObstacle);
  }

  public addNewPlatform() {
    // Returns 1 or 0 – 1 sets a high platform, 0 sets a low platform
    const randomHeight = Math.round(Math.random());
    // Returns a number < 200 and >= 0
    const randomPosition = Math.random() * 200;

    let newPlatform = new Platform(randomHeight, randomPosition);
    this.platformArray.push(newPlatform);
  }

  // for (const entity of this.movableEntities){
  //   if(entity instanceof ScrollableEntity) {
  //     entity.position.x -= 51;
  //   }
  //   if(entity instanceof MovableEntity){
  //     entity.update()
  //   }
  // }

  // private checkCollision(){
  //   for (const entity of this.movableEntities){
  //     if(entity instanceof Obstacle) {

  //     }
  //   }
  //}
}
