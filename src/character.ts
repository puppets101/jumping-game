class Character extends MovableEntity {
  private isAlive: boolean;
  private size: p5.Vector;
  private prevKeyIsPressed: boolean;

  constructor(
    isAlive: boolean,
    size: p5.Vector,
    position: p5.Vector,
    isVisible: boolean,
    velocity: p5.Vector,
    applyGravity: number
  ) {
    super(createVector(100, 300), true, createVector(0, 50), 1);
    this.isAlive = isAlive;
    this.size = createVector(50, 80);
    this.prevKeyIsPressed = false;
  }

  private handleUserInput() {
    if (!this.prevKeyIsPressed && keyCode === UP_ARROW) {
      console.log("jump");
      this.jump();
    }
  }

  public jump() {
    this.position.y = this.position.y -= this.velocity.y;

    if (this.position.y < 0) {
      this.position.y = 0;
    }
  }

  public gravity() {
    this.position.y += this.applyGravity;
    if (this.position.y >= 300) {
      this.position.y = 300;
    }
  }

  public collide() {}

  public update() {
    this.handleUserInput();
    this.gravity();
  }

  public draw() {
    fill(255);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
