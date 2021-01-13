type MenuState = "pause" | "main" | "gameOver" | "credits" | "title" | "close" | "restart"
class Menu implements Imenu {
  protected gameOver: GameOver;
  protected pauseScreen: PauseScreen;
  protected titleScreen: TitleScreen;
  public menuState: MenuState;
  private textSize1: number
  private textSize2: number
  private textSize3: number
  public audioImg: p5.Image;

  //for moving background (same code as background-class but doubled to get the parallax effect)
  private scrollingImage1: p5.Image;
  private scrollingImage2: p5.Image;
  private firstImg1: number;
  private firstImg2: number;
  private secondImg1: number;
  private secondImg2: number;
  private scrollSpeed1: number;
  private scrollSpeed2: number;

  constructor(menuState: MenuState) {
    this.gameOver = new GameOver();
    this.pauseScreen = new PauseScreen();
    this.titleScreen = new TitleScreen();
    this.menuState = menuState;
    this.textSize1 = 20;
    this.textSize2 = 20;
    this.textSize3 = 20;
    this.audioImg = unmute;

    // Imgs for backgrounds 
    this.scrollingImage1 = loadImage("./assets/imgs/mainSkylight.png");
    this.scrollingImage2 = loadImage("./assets/imgs/mainBuildings.png");
    // Instance 1 of picture (for both foreground and background)
    this.firstImg1 = 0;
    this.firstImg2 = 0;
    // Instance 2 of picture (for both foreground and background)
    this.secondImg1 = 1264;
    this.secondImg2 = 1264;
    // Scrollspeed, different for the two images to get that sexy parallax effect mmmm yeah
    this.scrollSpeed1 = 1;
    this.scrollSpeed2 = 3;
  }
  public changeMenuState (menuState: MenuState){
    this.menuState = menuState;

    if(this.menuState === "main") {
      title.loop()
      backgroundSound.stop();
    }

    if(this.menuState === "close"){
      backgroundSound.loop();
      title.stop();
    }

    if(this.menuState === "gameOver"){
      backgroundSound.stop();
    }

    if(this.menuState === "restart"){
      backgroundSound.loop();
    }

    if(this.menuState === "credits") {
      title.stop();
    }

    if(this.menuState === "title"){
      title.stop();
    }
  }

  public update() {
    //handles the users click and changes the text size on hover
    if (this.menuState === "main") {
      game.gameAudio.update();
      if (mouseX < 500 && mouseX > 300) {
        if (mouseY < 400 && mouseY > 377) {
          this.textSize1 = 30;
          if (mouseIsPressed) {
            this.changeMenuState("close");
          }
        } else if (mouseY < 425 && mouseY > 410) {
          this.textSize2 = 30;
          if (mouseIsPressed) {
            this.menuState = "credits";
          }
        } else if (mouseY < 460 && mouseY > 440) {
          this.textSize3 = 30;
          if (mouseIsPressed) {
            this.menuState = "title";
          }
        } else {
          this.textSize1 = 20;
          this.textSize2 = 20;
          this.textSize3 = 20;
        }
      } else {
        this.textSize1 = 20;
        this.textSize2 = 20;
        this.textSize3 = 20;
      }
    }
  }

  private movingBackground() {
    // Create two instances of the image for skyline image
    image(this.scrollingImage1, this.firstImg1, 0, 1264, height + 20);
    image(this.scrollingImage1, this.secondImg1, 0, 1264, height + 20);

    // Move the images to the left by changing the value of the picture instances
    this.firstImg1 -= this.scrollSpeed1;
    this.secondImg1 -= this.scrollSpeed1;

    // Reset position
    if (this.firstImg1 < -width - 464) {
      this.firstImg1 = width + 464;
    }
    if (this.secondImg1 < -width - 464) {
      this.secondImg1 = width + 464;
    }

    // Create two instances of the image for building image
    image(this.scrollingImage2, this.firstImg2, 0, 1264, height);
    image(this.scrollingImage2, this.secondImg2, 0, 1264, height);

    // Move the images to the left by change the value of the picture instances
    this.firstImg2 -= this.scrollSpeed2;
    this.secondImg2 -= this.scrollSpeed2;

    // Reset position
    if (this.firstImg2 < -width - 464) {
      this.firstImg2 = width + 464;
    }
    if (this.secondImg2 < -width - 464) {
      this.secondImg2 = width + 464;
    }
  }

  public draw() {
    if (this.menuState === "main") {
      this.movingBackground();
      strokeWeight(1.5);
      stroke(0);
      textFont(outrunFont);
      textSize(50);
      fill(128, 0, 0);
      textAlign(CENTER);
      text("Cyberjump", 400, 200);
      
      stroke(0);
      textFont(pixelFont);
      textSize(this.textSize1);
      fill(128, 0, 0);
      textAlign(CENTER);
      text("Start game", 400, 400);
      
      textFont(pixelFont);
      textSize(this.textSize2);
      fill(128, 0, 0);
      textAlign(CENTER);
      text("Credits", 400, 430);
      
      textFont(pixelFont);
      textSize(this.textSize3);
      fill(128, 0, 0);
      textAlign(CENTER);
      text("Exit", 400, 460);
      noStroke();
      game.gameAudio.draw();
    } 
    else if (this.menuState === "pause") {
      this.pauseScreen.draw();
      this.pauseScreen.update();

      if (keyIsPressed) {
        if (keyCode === 13) {
          this.menuState = "close"
        }
      }
    }
    else if (this.menuState === "credits") {
      this.changeMenuState("credits");
      background('black');
      textFont(outrunFont);
      textSize(50);
      fill(128, 0, 0);
      stroke(0);
      strokeWeight(1);
      textAlign(CENTER);
      text("Cyberjump", 400, 70);

      textFont(pixelFont);
      textSize(20);
      fill(128, 0, 0);
      textAlign(CENTER);
      text("Project made for a", 400, 120);
      text("school assignment 2020.", 400, 140);
      textAlign(CENTER);
      text("Developers Github handles:", 400, 180);
      textAlign(CENTER);
      text("lilgujj", 400, 210);
      textAlign(CENTER);
      text("lisapaajarvi", 400, 240);
      textAlign(CENTER);
      text("mariahelenanoren", 400, 270);
      textAlign(CENTER);
      text("olofWallgren", 400, 300);
      textAlign(CENTER);
      text("puppets101", 400, 330);
      textAlign(CENTER);
      text("zazzzi", 400, 360);
      text("Art assets by:", 400, 400);
      text("OcO, thebyteman, ansimuz", 400, 430);
      text("Press ESC to return to menu", 400, 550);
      noStroke();

      if (keyIsPressed) {
        if (keyCode === 27) {
          this.changeMenuState("main");
        }
      }
    } 
    else if (this.menuState === "gameOver") {
      this.gameOver.draw();
    } 
    else if (this.menuState === "title") {
      // Logic for the title menu 
      this.changeMenuState("title");
      this.titleScreen.draw();

      if (keyIsPressed === true) {
        this.menuState = "main";
      }
    }
  }
}
