class Platform extends MovableEntity {
  public height: number;
  public width: number;
  private highOrLow: number;
  private platformImg: p5.Image;
  public scrollSpeed: number;

  constructor(highOrLow: number, randomX: number, scrollSpeed: number) {
    super(createVector(800 + randomX, 250), true, createVector(3, 0), 0); // Changing velocity.x alters speed
    this.height = 20;
    this.width = 200;
    this.highOrLow = highOrLow;
    this.platformImg = platformAsset;
    this.scrollSpeed = scrollSpeed;
  }

  public update() {
    // Moves platforms to the left
    this.position.x -= (this.velocity.x + this.scrollSpeed);

    // highOrLow value decides whether platform should have high or low yPosition
    if (this.highOrLow === 1) {
      this.position.y = 420;
    } else if (this.highOrLow === 0) {
      this.position.y = 260;
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
    rect(this.position.x, this.position.y, this.width, this.height, 10);
    image(this.platformImg, this.position.x, this.position.y, 200, 20);
  }
}
