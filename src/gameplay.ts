class GamePlay {
  public score: Score;
  public character: Character;
  private obstacleArray: Obstacle[];
  private platformArray: Platform[];
  private powerupArray: Powerup[];
  private droneInterval: number;
  private prototypeInterval: number;
  private platformInterval: number;
  private difficultyInterval: number;
  private lives: Lives;
  private graceModeActive: boolean;
  public isSuperWeaponAvalible: Boolean;

  // public gameAudio: GameAudio;

  public projectileArray: Projectile[];

  private background: Background;
  private droneTimer: number;
  private prototypeTimer: number;
  private platformTimer: number;
  private powerupTimer: number;
  private difficultyTimer: number;
  public isGameOver = false;
  private scrollSpeed;

  constructor() {
    this.score = new Score();
    this.character = new Character();
    this.scrollSpeed = 0;

    this.background = new Background(
      createVector(0, 0),
      true,
      createVector(3, 0),
      0,
      this.scrollSpeed
    );

    // this.gameAudio = new GameAudio();

    this.obstacleArray = [];
    this.platformArray = [];
    this.powerupArray = [];
    this.projectileArray = [];

    // this.movableEntities = [];
    this.isSuperWeaponAvalible = false;

    this.platformInterval = 1000;
    this.platformTimer = this.platformInterval;

    this.droneInterval = 1500;
    this.droneTimer = this.droneInterval;

    this.prototypeInterval = 2500;
    this.prototypeTimer = this.prototypeInterval;

    this.difficultyInterval = 10000;
    this.difficultyTimer = this.difficultyInterval;

    this.powerupTimer = 13633;

    this.lives = new Lives();
    this.graceModeActive = false;
  }

  public update() {
    this.background.update();
    this.score.update();
    this.character.update();

    if (keyIsPressed) {
      if (keyCode === 32 && game.gamePlay.projectileArray.length < 1) {
        game.gamePlay.createProjectile();
        shootSound.play();
      }
    }

    // Method calls
    this.checkPlatformInterval();
    this.renderEnemyDrone();
    this.renderPrototypeEnemy();
    this.renderPowerupLife();
    this.updateObstacles();
    this.updateProjectiles();
    this.updatePlatforms();
    this.updatePowerupLife();
    this.projectileCollisions();
    this.superProjectileCollisions();
    this.superProjectileCollisionsLow();
    this.checkCollisions();
    this.superWeaponCheck();
    this.checkEnemyDeath();
    this.updateDifficulty();

    if (this.character.isAlive === false) {
      this.isGameOver = true;
    }
  }

  private updateDifficulty() {
    this.difficultyTimer -= deltaTime;
    if (this.difficultyTimer < 0) {
      // Increases spawn interval for objects
      this.droneInterval *= 0.95;
      this.prototypeInterval *= 0.95;
      this.platformInterval *= 0.95;

      // Increases scrollspeed for current objects
      this.background.scrollSpeed += 0.25;
      for (let i = 0; i < this.platformArray.length; i++) {
        this.platformArray[i].scrollSpeed += 0.25;
      }
      for (let i = 0; i < this.obstacleArray.length; i++) {
        this.obstacleArray[i].scrollSpeed += 0.25;
      }
      for (let i = 0; i < this.powerupArray.length; i++) {
        this.powerupArray[i].scrollSpeed += 0.25;
      }

      // Increases scrollspeed for future objects
      this.scrollSpeed += 0.25;
      // Resets interval
      this.difficultyTimer = this.difficultyInterval;
    }
  }

  private createPlatform() {
    // Returns 1 or 0: 1 sets a high platform, 0 sets a low platform
    const randomHeight = Math.round(Math.random());
    // Returns a number < 200 and >= 0
    const randomPosition = Math.random() * 200;

    let newPlatform = new Platform(
      randomHeight,
      randomPosition,
      this.scrollSpeed
    );
    this.platformArray.push(newPlatform);
  }

  private checkPlatformInterval() {
    this.platformTimer -= deltaTime;
    if (this.platformTimer < 0) {
      this.createPlatform();
      this.platformTimer = this.platformInterval;
    }
  }

  private updatePlatforms() {
    for (let i = 0; i < this.platformArray.length; i++) {
      this.platformArray[i].update();
      this.platformArray[i].draw();

      // Removes platforms from array when out of screen
      if (this.platformArray[i].isVisible === false) {
        this.platformArray.splice(i, 1);
      }
    }
  }

  private renderPowerupLife() {
    this.powerupTimer -= deltaTime;
    if (this.powerupTimer < 0) {
      this.createPowerupLife();
      this.powerupTimer = 13633;
    }
  }

  private createPowerupLife() {
    if (this.lives.life < 5) {
      let newPowerup = new Powerup(this.scrollSpeed);
      this.powerupArray.push(newPowerup);
    }
  }

  private updatePowerupLife() {
    for (let i = 0; i < this.powerupArray.length; i++) {
      this.powerupArray[i].update();

      // Removes powerups from array when out of screen
      if (this.powerupArray[i].isVisible === false) {
        this.powerupArray.splice(i, 1);
      }
    }
  }

  private updateObstacles() {
    for (let i = 0; i < this.obstacleArray.length; i++) {
      this.obstacleArray[i].update();
      // Removes obstacles from array when out of screen
      if (this.obstacleArray[i].isVisible === false) {
        this.obstacleArray.splice(i, 1);
      }
    }
  }

  // adds new projectile
  public createProjectile() {
    let newProjectile = new Projectile();
    this.projectileArray.push(newProjectile);
  }

  private updateProjectiles() {
    for (let i = 0; i < this.projectileArray.length; i++) {
      this.projectileArray[i].update();
      this.projectileArray[i].draw();
      if (this.projectileArray[i].isVisible === false) {
        this.projectileArray.splice(i, 1);
      }
    }
  }

  private renderEnemyDrone() {
    this.droneTimer -= deltaTime;
    if (this.droneTimer < 0) {
      this.createNewDroneEnemy();
      this.droneTimer = this.droneInterval;
    }
  }

  private createNewDroneEnemy() {
    let droneEnemy = new Obstacle(
      droneAsset,
      droneDeathAsset,
      500,
      0,
      0,
      10,
      this.scrollSpeed
    );
    this.obstacleArray.push(droneEnemy);
  }

  private renderPrototypeEnemy() {
    this.prototypeTimer -= deltaTime;
    if (this.prototypeTimer < 0) {
      this.createNewPrototypeEnemy();
      this.prototypeTimer = this.prototypeInterval;
    }
  }

  public createNewPrototypeEnemy() {
    let prototypeEnemy = new Obstacle(
      prototypeAsset,
      prototypeDeathAsset,
      800,
      520,
      5,
      0,
      this.scrollSpeed
    );
    this.obstacleArray.push(prototypeEnemy);
  }

  // Check if superWeapon is avalible
  public superWeaponCheck() {
    if (this.lives.life <= 1) {
      this.isSuperWeaponAvalible = true;
    } else {
      this.isSuperWeaponAvalible = false;
    }
  }

  private checkEnemyDeath() {
    for (let i = 0; i < this.obstacleArray.length; i++) {
      if (this.obstacleArray[i].isDead === true) {
        this.obstacleArray.splice(i, 1);
      }
    }
  }

  private checkCollisions() {
    // Compares the drone enemy positions to the platform positions
    for (let i = 0; i < this.obstacleArray.length; i++) {
      for (let p = 0; p < this.platformArray.length; p++) {
        if (this.obstacleArray[i].image === droneAsset) {
          if (
            (this.obstacleArray[i].position.y + this.obstacleArray[i].height ===
              this.platformArray[p].position.y &&
              this.obstacleArray[i].position.x +
                this.obstacleArray[i].width * 0.5 >
                this.platformArray[p].position.x &&
              this.obstacleArray[i].position.x +
                this.obstacleArray[i].width * 0.5 <
                this.platformArray[p].position.x +
                  this.platformArray[p].width) || // check if obstacle lands on one of the platforms
            this.obstacleArray[i].position.y + this.obstacleArray[i].height ===
              570
          ) {
            // Check if drone enemy lands on the ground
            this.obstacleArray[i].velocity.y = 0;
            this.obstacleArray[i].velocity.x = 3;
          }
        }

        // Character collision with obstacle
        if (
          this.character.position.x + this.character.size.x >
            this.obstacleArray[i].position.x &&
          this.character.position.x <
            this.obstacleArray[i].position.x + this.obstacleArray[i].width &&
          this.obstacleArray[i].position.y + this.obstacleArray[i].height ===
            this.character.position.y + this.character.size.y &&
          this.obstacleArray[i].isShot === false
        ) {
          if (this.graceModeActive) {
            return true;
          }
          // Lose a life and add one seconds of grace mode when hit an obstacle
          this.lives.countLives();
          this.graceModeActive = true;
          setTimeout(() => {
            this.graceModeActive = false;
          }, 1000);
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
        this.character.applyGravity = 0.4;
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

  // Projectile collision with object
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

          this.obstacleArray[j].isShot = true;
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
          this.projectileArray[i].superPosition.x >
            this.obstacleArray[j].position.x &&
          this.projectileArray[i].superPosition.x <
            this.obstacleArray[j].position.x + this.obstacleArray[j].width &&
          this.obstacleArray[j].position.x &&
          this.projectileArray[i].superPosition.y >
            this.obstacleArray[j].position.y &&
          this.projectileArray[i].superPosition.y <
            this.obstacleArray[j].position.y + this.obstacleArray[j].height
        ) {
          this.projectileArray.splice(i, 1);

          this.score.score += 10;
          this.obstacleArray[j].isShot = true;
        }
      }
    }
  }
  // superProjectile collision with object
  public superProjectileCollisionsLow() {
    for (let j = 0; j < this.obstacleArray.length; j++) {
      for (let i = 0; i < this.projectileArray.length; i++) {
        if (
          // superProjectile
          this.projectileArray[i].superPositionLow.x >=
            this.obstacleArray[j].position.x &&
          this.projectileArray[i].superPositionLow.y >
            this.obstacleArray[j].position.y &&
          this.projectileArray[i].superPositionLow.y <
            this.obstacleArray[j].position.y + this.obstacleArray[j].height
        ) {
          this.projectileArray.splice(i, 1);

          this.score.score += 10;
          this.obstacleArray[j].isShot = true;
        }
      }
    }
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
    // Draws all projectiles
    for (let i = 0; i < this.projectileArray.length; i++) {
      this.projectileArray[i].draw();
    }
    // Draws all powerups (lives)
    for (let i = 0; i < this.powerupArray.length; i++) {
      this.powerupArray[i].draw();
    }
    this.lives.draw();
    this.character.draw();
    this.score.draw();
  }
}
