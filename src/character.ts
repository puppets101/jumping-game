class Character extends MovableEntity {
  public isAlive: boolean;
  public size: p5.Vector;
  private liftForce: number;
  public canJump: boolean;

  private runnerAnimation: p5.Image;

  constructor() {
    super(createVector(), true, createVector(), 0);
    this.isAlive = true;
    this.size = createVector(50, 80);
    this.position = createVector(100, 490);
    this.velocity = createVector(0, 0);
    this.liftForce = -30;
    this.canJump = true;
    this.runnerAnimation = runnerAsset;
  }

  public jump() {
    if (this.canJump) {
      this.velocity.y += this.liftForce;
      this.applyGravity = 0.4;
      this.canJump = false;
    }
  }
  public fall() {
    if (this.velocity.y !== 0) {
      this.applyGravity = 0.8;
    }
  }

  public update() {
    this.velocity.y += this.applyGravity;
    this.velocity.y *= 0.9;
    this.position.y += this.velocity.y;

    if (this.position.y > 490) {
      this.position.y = 490;
      this.velocity.y = 0;
      this.canJump = true;
    }

    // if (this.position.y < 490) {
    //   this.applyGravity = 0.4;
    // }

    if (keyIsPressed) {
      if (keyCode === UP_ARROW) {
        game.gamePlay.character.jump();
      }
      if (keyCode === DOWN_ARROW) {
        game.gamePlay.character.fall();
      }
    }
  }

  public draw() {
    image(
      this.runnerAnimation,
      this.position.x - 28,
      this.position.y - 5,
      110,
      120
    );
  }
}
