class Character extends MovableEntity {
  private isAlive: boolean;
  private size: p5.Vector;

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
  }

  public jump() {
    this.position.y = this.position.y -= this.velocity.y;
  }

  public gravity() {
    this.position.y += this.applyGravity;
    console.log(this.position.y);
    if (this.position.y >= 300) {
      this.position.y = 300;
    }
  }

  public collide() {}

  public update() {}

  public draw() {
    fill(255);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
