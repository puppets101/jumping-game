let v1: p5.Vector;
let v2: p5.Vector;

class Character extends MovableEntity {
  private isAlive: boolean;

  constructor(
    isAlive: boolean,
    position: p5.Vector,
    isVisible: boolean,
    velocity: p5.Vector,
    applyGravity: number
  ) {
    super(createVector(100, 300), true, createVector(0, 50), 10);
    this.isAlive = isAlive;
  }

  public jump() {
    this.position.y -= this.velocity.y;

    setInterval(() => {
      if (this.position.y < 300) {
        this.position.y = 300;
      }
    }, 1000);

    // this.position.y -= this.applyGravity;

    // if (this.position.y > height) {
    //   this.position.y = 0;
    // }
  }

  public collide() {}

  public update() {}

  public draw() {
    v1 = createVector(100, 300);
    fill(255);
    rect(this.position.x, this.position.y, 50, 80);
  }
}
