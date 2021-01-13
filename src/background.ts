class Background extends MovableEntity {
  private scrollingImage: p5.Image;
  private firstImg: number;
  private secondImg: number;
  public scrollSpeed: number;

  constructor(scrollSpeed: number) {
    super(createVector(0, 0), true, createVector(3, 0), 0);
    // Img for background
    this.scrollingImage = loadImage("./assets/imgs/cyberpunk-street.png");
    // Instance 1 of picture
    this.firstImg = 0;
    // Instance 2 of picture
    this.secondImg = 2166;
    // Scrollspeed, connect to the velocity of game if we want it to match up!
    this.scrollSpeed = scrollSpeed;
  }

  public update() {
    // Move the images to the left by change the value of the picture instances
    this.firstImg -= this.velocity.x + this.scrollSpeed;
    this.secondImg -= this.velocity.x + this.scrollSpeed;

    // Reset position
    if (this.firstImg < -width - 1366) {
      this.firstImg = width + 1366;
    }
    if (this.secondImg < -width - 1366) {
      this.secondImg = width + 1366;
    }
  }

  public draw() {
    //create two instacnes of the image
    image(this.scrollingImage, this.firstImg, 0, 2166, height);
    image(this.scrollingImage, this.secondImg, 0, 2166, height);
  }
}

//Thanks for the art /u/Ansimuz
// https://www.reddit.com/r/gamedev/comments/5x7eg7/free_cyberpunk_pixel_art_assets_for_your_gamedev/
