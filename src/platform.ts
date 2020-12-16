class Platform extends MovableEntity {
  protected color: p5.Color;
  protected height: number;
  protected width: number;

  constructor(_position: p5.Vector) {
    super(_position, true, createVector(3, 0), 0); // Changing velocity.x alters speed
    this.color = color(100, 50, 150);
    this.height = 20;
    this.width = 100;
  }

  public update() {
    // Random spawn is used to randomize the respawning position of the platform
    const randomSpawn = Math.random()
    this.position.x -= this.velocity.x;

    if (this.position.x < 0 - this.width) {
      this.position.x = 600 + (randomSpawn * 300)
    }
  }

  public draw() {
    fill(this.color)
    rect(this.position.x, this.position.y, this.width, this.height)
  }
}
