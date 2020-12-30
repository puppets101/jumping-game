class Platform extends MovableEntity {
  private color: p5.Color;
  public height: number;
  public width: number;
  private highOrLow: number;

  constructor(highOrLow: number, randomX: number) {
    super(createVector(600 + randomX, 250), true, createVector(3, 0), 0); // Changing velocity.x alters speed
    this.color = color(0, 0, 0);
    this.height = 20;
    this.width = 100;
    this.highOrLow = highOrLow;
  }

  public update() {
    // Moves platforms to the left
    this.position.x -= this.velocity.x;

    // highOrLow value decides whether platform should have high or low yPosition
    if (this.highOrLow === 1) {
      this.position.y = 250;
    } else if (this.highOrLow === 0) {
      this.position.y = 150;
    }

    this.isOnScreen();
  }

  private isOnScreen() {
    if (this.position.x + this.width < 0) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }

  public draw() {
    fill(this.color);
    noStroke();
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}
