class GamePlay {
  private score: Score;
  public character: Character;
  private pauseScreen: PauseScreen;
  // private gameAudio: GameAudio;
  // private drawableEntity: DrawableEntity;
  // private movableEntity: MovableEntity;
  private obstacleArray: Obstacle[];
  private platformArray: Platform[];
  private powerupArray: Powerup[];
  private droneInterval: number;
  private prototypeInterval: number;
  private platformInterval: number;
  private lives: Lives;
  private graceModeActive: boolean;
  public super: Boolean

  private playBackgroundSound: boolean;


  public projectileArray: Projectile[];

  private background: Background;
  private droneTimer: number;
  private prototypeTimer: number;
  private platformTimer: number;
  private powerupTimer: number;

  constructor() {
    this.score = new Score();
    this.character = new Character();
    // this.gameAudio = new GameAudio();

    this.pauseScreen = new PauseScreen(menu)
    this.background = new Background(
      createVector(0, 0),
      true,
      createVector(3, 0),
      0
    );

    this.playBackgroundSound = false;
    this.obstacleArray = [];
    this.platformArray = [];
    this.powerupArray = [];
    this.projectileArray = [];

    // this.movableEntities = [];
      this.super = false;

    this.platformInterval = 1000;
    this.platformTimer = this.platformInterval;

    this.droneInterval = 1500;
    this.droneTimer = this.droneInterval;

    this.prototypeInterval = 2500;
    this.prototypeTimer = this.prototypeInterval;

    this.powerupTimer = 13633;

    this.lives = new Lives(createVector(), true);
    this.graceModeActive = false;
  }

  gameOver() { }

  loadGameSound() {
    backgroundSound.loop()
    backgroundSound.setVolume(0.1)
  }


  public update() {
    if (keyIsPressed) {
      if (keyCode === 27) {
        this.pauseScreen.draw();
        console.log("qwe");
      }
    }

    if (!this.playBackgroundSound) {
      this.loadGameSound();
      this.playBackgroundSound = true;
    }

    // Adds new platforms
    this.platformTimer -= deltaTime;
    if (this.platformTimer < 0) {
      this.addNewPlatform();
      this.platformTimer = this.platformInterval;
    }

    // Adds new drone enemy 
    this.droneTimer -= deltaTime;
    if (this.droneTimer < 0) {
      this.addNewDroneEnemy();
      this.droneTimer = this.droneInterval;
    }
    // Adds new prototype enemy 
    this.prototypeTimer -= deltaTime;
    if (this.prototypeTimer < 0) {
      this.addNewPrototypeEnemy();
      this.prototypeTimer = this.prototypeInterval;

    }
    // Adds new powerups
    this.powerupTimer -= deltaTime;
    if (this.powerupTimer < 0) {
      this.addNewPowerup();
      this.powerupTimer = 13633;
    }


    this.projectileCollisions();
    this. superProjectileCollisions()
    this.checkCollisions();

    this.superWeaponCheck()


    // Updates all obstacles
    for (let i = 0; i < this.obstacleArray.length; i++) {
      this.obstacleArray[i].update();
      this.obstacleArray[i].draw();

      // Removes obstacles from array when out of screen
      if (this.obstacleArray[i].isVisible === false) {
        this.obstacleArray.splice(i, 1);
      }
    }
    // uppdates projectiles
    for (let i = 0; i < this.projectileArray.length; i++) {
      this.projectileArray[i].update();
      this.projectileArray[i].draw();

      //
      if (this.projectileArray[i].isVisible === false) {
        this.projectileArray.splice(i, 1);
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

    // Updates powerups
    for (let i = 0; i < this.powerupArray.length; i++) {
      this.powerupArray[i].update();
      this.powerupArray[i].draw();

      // Removes powerups from array when out of screen
      if (this.powerupArray[i].isVisible === false) {
        this.powerupArray.splice(i, 1);
      }
    }
  }



  private checkCollisions() {
    // Compares the drone enemy positions to the platform positions
    for (let i = 0; i < this.obstacleArray.length; i++) {
      for (let p = 0; p < this.platformArray.length; p++) {

        if(this.obstacleArray[i].image === droneAsset) {
          if (
            (this.obstacleArray[i].position.y + this.obstacleArray[i].height ===
              this.platformArray[p].position.y &&
              this.obstacleArray[i].position.x + this.obstacleArray[i].width * 0.5 > this.platformArray[p].position.x &&
              this.obstacleArray[i].position.x + this.obstacleArray[i].width * 0.5 < this.platformArray[p].position.x + this.platformArray[p].width) || // check if obstacle lands on one of the platforms
            this.obstacleArray[i].position.y + this.obstacleArray[i].height ===
            570
          ) {
            // check if drone enemy lands on the ground
            this.obstacleArray[i].velocity.y = 0;
            this.obstacleArray[i].velocity.x = 3;
          }

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
        this.character.position.y =
          this.platformArray[p].position.y - this.character.size.y;
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
        this.character.applyGravity = 0.1;
      }
    }

    // Powerup collision with platform or ground
    if (this.powerupArray.length > 0) {
      for (let i = 0; i < this.powerupArray.length; i++) {
        for (let p = 0; p < this.platformArray.length; p++) {
          if (
            (this.powerupArray[i].position.y + this.powerupArray[i].height ===
              this.platformArray[p].position.y &&
              this.powerupArray[i].position.x +
              this.powerupArray[i].width * 0.5 >
              this.platformArray[p].position.x &&
              this.powerupArray[i].position.x +
              this.powerupArray[i].width * 0.5 <
              this.platformArray[p].position.x +
              this.platformArray[p].width) ||
            this.powerupArray[i].position.y + this.powerupArray[i].height ===
            570
          ) {
            this.powerupArray[i].velocity.y = 0;
            this.powerupArray[i].velocity.x = 3;
          }
        }

        // Character collision with powerup
        if (
          this.powerupArray[i].position.x <
          this.character.position.x + this.character.size.x &&
          this.powerupArray[i].position.y <=
          this.character.position.y + this.character.size.y &&
          this.powerupArray[i].position.y + this.powerupArray[i].height >=
          this.character.position.y
        ) {
          this.powerupArray.splice(i, 1);
          this.lives.life++;
        }
      }
    }
  }

  // projectile collision with object
  public projectileCollisions() {
    for (let j = 0; j < this.obstacleArray.length; j++) {
      for (let i = 0; i < this.projectileArray.length; i++) {
        if (
          this.projectileArray[i].position.x >=
          this.obstacleArray[j].position.x &&
          this.projectileArray[i].position.y >
          this.obstacleArray[j].position.y &&
          this.projectileArray[i].position.y <
          this.obstacleArray[j].position.y + this.obstacleArray[j].height
         
        ) {
          this.projectileArray.splice(i, 1);
          this.score.score += 10;

          // FIX DEATH ANIMATION 
          if(this.obstacleArray[j].image === droneAsset) {
            this.obstacleArray[j].image = droneDeathAsset;
          }

          this.obstacleArray.splice(j, 1);
          // setTimeout(() => {  }, 400);
          console.log("träff");
        }
      }
    }
  }
  // superProjectile collision with object
  public superProjectileCollisions() {
    for (let j = 0; j < this.obstacleArray.length; j++) {
      for (let i = 0; i < this.projectileArray.length; i++) {
        if (
          // superProjectile
          this.projectileArray[i].superPosition.x >=
          this.obstacleArray[j].position.x &&
          this.projectileArray[i].superPosition.y >
          this.obstacleArray[j].position.y &&
          this.projectileArray[i].superPosition.y <
          this.obstacleArray[j].position.y + this.obstacleArray[j].height
         
        ) {
          this.projectileArray.splice(i, 1);

          this.obstacleArray[j].droneAssetGif = droneDeathAsset; 
          setTimeout(() => { this.obstacleArray.splice(j, 1) }, 400);
          ;
          
        }
      }
    }
  }
  // check if superWeapon is avalible 
   public superWeaponCheck(){
     if(this.lives.life >= 4){
       this.super = true;
     }else this.super = false;
   }

  public draw() {
    this.background.draw();

    // Draws all obstacles
    for (let i = 0; i < this.obstacleArray.length; i++) {
      this.obstacleArray[i].draw();
    }

    // Draws all platforms
    for (let i = 0; i < this.platformArray.length; i++) {
      this.platformArray[i].draw();
    }
    
    for (let i = 0; i < this.projectileArray.length; i++) {
      this.projectileArray[i].draw();
    }
    this.lives.draw();
    this.character.draw();
    this.character.update();
    this.score.draw();
  }


  // adds new droneEnemy 
  public addNewDroneEnemy() {
    let droneEnemy = new Obstacle(droneAsset, 500, 0, 0, 10);
    this.obstacleArray.push(droneEnemy);
  }

  // adds new prototype enemy 
  public addNewPrototypeEnemy() {
    let prototypeEnemy = new Obstacle(prototypeAsset, 800, 520, 5, 0);
    this.obstacleArray.push(prototypeEnemy);
  }

  // adds new platform 

  public addNewPlatform() {
    // Returns 1 or 0 – 1 sets a high platform, 0 sets a low platform
    const randomHeight = Math.round(Math.random());
    // Returns a number < 200 and >= 0
    const randomPosition = Math.random() * 200;

    let newPlatform = new Platform(randomHeight, randomPosition);
    this.platformArray.push(newPlatform);
  }

  // adds new projectile
  public addNewProjectiles() {
    let newProjectile = new Projectile();
    this.projectileArray.push(newProjectile);
  }

  // adds new powerup
  public addNewPowerup() {
    let newPowerup = new Powerup();
    this.powerupArray.push(newPowerup);
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
