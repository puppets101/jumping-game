class Menu implements Imenu {
  protected menuAudio: MenuAudio;
  protected gameOver: GameOver;
  protected pauseScreen: PauseScreen;
  protected titleScreen: TitleScreen;
  public isMenuOpen: boolean;
  public menuState: string;
  private mainMenuOptions: number;
  private prevMouseIsPressed: boolean;

  public playBackgroundAudio: boolean;

  //for moving background (same code as background-class)
  private scrollingImage: p5.Image;
  private firstImg: number;
  private secondImg: number;
  private scrollSpeed: number;

  constructor(_isMenuOpen: boolean, _menuState: string) {
    this.menuAudio = new MenuAudio();
    this.gameOver = new GameOver(this);
    this.pauseScreen = new PauseScreen(this);
    this.titleScreen = new TitleScreen(this);
    this.isMenuOpen = _isMenuOpen;
    this.menuState = _menuState;
    this.mainMenuOptions = 0;
    this.prevMouseIsPressed = false;


    this.playBackgroundAudio = true;

    //img for background
    this.scrollingImage = loadImage("./assets/imgs/main.png");
    //instance 1 of picture
    this.firstImg = 0;
    //instance 2 of picture
    this.secondImg = width;
    //scrollspeed, connect to the velocity of game if we want it to match up!
    this.scrollSpeed = 1;
  }
  public startGame() {}
  public quit() {}

  public update() {

    //handles the users click
    if (menu.menuState === "main") {
      this.prevMouseIsPressed = false;
      if (this.mainMenuOptions === 0) {
        if (mouseX < 500 && mouseX > 300) {
          if (mouseY < 415 && mouseY > 392) {
            if (mouseIsPressed) {
              console.log("Game started");
              this.isMenuOpen = false;
              // Starts gameaudio
              if(this.playBackgroundAudio) {
                this.playBackgroundAudio = false;
                backgroundSound.loop();
                backgroundSound.setVolume(0.1);
                }
              // console.log(this.isMenuOpen);
            }
          }
          if (mouseY < 440 && mouseY > 425) {
            if (mouseIsPressed) {
              console.log("Credits");
              this.menuState = "main";
            }
          }
          if (mouseY < 475 && mouseY > 455) {
            if (mouseIsPressed) {
              console.log("Exit to title screen");
              this.menuState = "";
            }
          }
        }
      }
    }
    this.prevMouseIsPressed = mouseIsPressed;
  }

  private movingBackground() {
    //create two instacnes of the image
    image(this.scrollingImage, this.firstImg, 0, width, height);
    image(this.scrollingImage, this.secondImg, 0, width, height);

    //move the images to the left by change the value of the picture instances
    this.firstImg -= this.scrollSpeed;
    this.secondImg -= this.scrollSpeed;

    //reset position
    if (this.firstImg < -width) {
      this.firstImg = width;
    }
    if (this.secondImg < -width) {
      this.secondImg = width;
    }
  }

  public draw() {
    if (this.isMenuOpen === true) {
      // if statement to decide what menus to open
      if (this.menuState === "main") {
        //main menu layout
        this.movingBackground();
        strokeWeight(1);
        stroke(0);
        textFont(outrunFont);
        textSize(50);
        fill(128, 0, 0);
        textAlign(CENTER);
        text("Cyberjump", 400, 200);

        textFont(pixelFont);
        textSize(20);
        fill(128, 0, 0);
        textAlign(CENTER);
        text("Start game", 400, 400);

        textFont(pixelFont);
        textSize(20);
        fill(128, 0, 0);
        textAlign(CENTER);
        text("Credits", 400, 430);

        textFont(pixelFont);
        textSize(20);
        fill(128, 0, 0);
        textAlign(CENTER);
        text("Exit", 400, 460);
      } else if (this.menuState === "pause") {
        //show pause menu
      } else if (this.menuState === "gameOver") {
        this.gameOver.draw();
        backgroundSound.stop();
        this.playBackgroundAudio = true;
      } else {
        this.titleScreen.draw();
        //move this to titlescreen class????????????????????????????????????? cant reach the menuState var in there atm
        if (keyIsPressed === true) {
          this.menuState = "main";
        }
      }
    }
  }
}
