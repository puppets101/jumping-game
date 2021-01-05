class Background extends MovableEntity {

  //variables 
  private scrollingImage;
  private firstImg: number;
  private secondImg: number;
  private scrollSpeed: number;


  constructor(position: p5.Vector, isVisible: boolean, velocity: p5.Vector, applyGravity: number) {
    // super(createVector(), isVisible, velocity, applyGravity)
    super(createVector(0, 0), true, createVector(3, 0), 0);
    this.scrollingImage = loadImage("./assets/imgs/cyberpunk-street.png");
    this.secondImg = width;
    this.firstImg = 0;
    this.scrollSpeed = velocity.x; // Ändra till samma som kartans?
  }

  update(){};

  draw() {

    

    image(this.scrollingImage, this.firstImg, 0, width, height);
    image(this.scrollingImage, this.secondImg, 0, width, height);

    this.firstImg -= this.scrollSpeed;
    this.secondImg -= this.scrollSpeed;

    if (this.firstImg < -width) {
      this.firstImg = width;
    }
    if (this.secondImg < -width) {
      this.secondImg = width;
    }

  }

}


// https://www.reddit.com/r/gamedev/comments/5x7eg7/free_cyberpunk_pixel_art_assets_for_your_gamedev/