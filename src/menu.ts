class Menu implements Imenu {
  protected menuAudio: MenuAudio;
  protected gameOver: GameOver;
  protected pauseScreen: PauseScreen;
  protected titleScreen: TitleScreen;
  public isMenuOpen: boolean;
  public menuState: string;
  private mainMenuOptions: number;
  private prevMouseIsPressed: boolean;

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



    //img for background
    this.scrollingImage = loadImage("./assets/imgs/main.png");
    //instance 1 of picture
    this.firstImg = 0;
    //instance 2 of picture
    this.secondImg = width;
    //scrollspeed, connect to the velocity of game if we want it to match up! 
    this.scrollSpeed = 1;


  }
  public startGame() { }
  public quit() { }

  public update() {
    //handles the users click  

    // console.log(menu.menuState);

    if (menu.menuState === "main") {
      this.prevMouseIsPressed = false;
      if (this.mainMenuOptions === 0) {
        if (mouseX < 500 && mouseX > 300) {
          if (mouseY < 400 && mouseY > 377) {
            if (mouseIsPressed) {
              console.log("1");
              this.isMenuOpen = false;
            }
          }
          if (mouseY < 425 && mouseY > 410) {
            if (mouseIsPressed) {
              console.log("2");
              this.menuState = "gameOver";
            }
          }
          if (mouseY < 460 && mouseY > 440) {
            if (mouseIsPressed) {
              console.log("3");
              this.menuState = "";
            }
          }
        }
      };
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
