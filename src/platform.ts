class Platform extends MovableEntity {
  protected color: p5.Color;
  protected height: number;
  protected width: number;

  constructor() {
    super(createVector(300, 400 - 200), true, createVector(0, 0), 0);
    this.color = color(100, 50, 150);
    this.height = 20;
    this.width = 100;
  }

  public update() {
    this.velocity = createVector(this.position.x -= 1, 0)
  }

  public draw() {
    fill(this.color)
    rect(this.position.x + this.velocity.x, this.position.y, this.width, this.height)
  }
}
