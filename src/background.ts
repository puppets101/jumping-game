class Background extends MovableEntity {

  //variables 
  private scrollingImage;
  private firstImg: number;
  private secondImg: number;
  private scrollSpeed: number;


  constructor(position: p5.Vector, isVisible: boolean, velocity: p5.Vector, applyGravity: number) {
    super(createVector(0, 0), true, createVector(3, 0), 0);
    //img for background
    this.scrollingImage = loadImage("./assets/imgs/cyberpunk-street.png");
    //instance 1 of picture
    this.firstImg = 0;
    //instance 2 of picture
    this.secondImg = 2166;
    //scrollspeed, connect to the velocity of game if we want it to match up! 
    this.scrollSpeed = velocity.x; 
  }

  update(){
    //move the images to the left by change the value of the picture instances
    this.firstImg -= this.scrollSpeed;
    this.secondImg -= this.scrollSpeed;

    //reset position
    if (this.firstImg < -width - 1366) {
      this.firstImg = width + 1366;
    }
    if (this.secondImg < -width - 1366) {
      this.secondImg = width + 1366;
    }
  };

  draw() {

    //create two instacnes of the image
    image(this.scrollingImage, this.firstImg, 0, 2166, height);
    image(this.scrollingImage, this.secondImg, 0, 2166, height);

  }

}

//Thanks for the art /u/Ansimuz
// https://www.reddit.com/r/gamedev/comments/5x7eg7/free_cyberpunk_pixel_art_assets_for_your_gamedev/