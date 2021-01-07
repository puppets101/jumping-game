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

  constructor(isMenuOpen: boolean, menuState: string) {
    this.menuAudio = new MenuAudio();
    this.gameOver = new GameOver(this);
    this.pauseScreen = new PauseScreen(this);
    this.titleScreen = new TitleScreen(this);
    this.isMenuOpen = isMenuOpen;
    this.menuState = menuState;
    this.mainMenuOptions = 0;
    this.prevMouseIsPressed = false;

    //img for background
    this.scrollingImage = loadImage("./assets/imgs/main.png");
    //instance 1 of picture
    this.firstImg = 0;
    //instance 2 of picture
    this.secondImg = 1264;
    //scrollspeed, connect to the velocity of game if we want it to match up!
    this.scrollSpeed = 1;
  }
  public startGame() { }
  public quit() { }

  public pauseGame() {
    menu.isMenuOpen = true;
    menu.menuState = "pause";

    console.log(this.isMenuOpen);


  }

  public update() {

    //handles the users click
    if (game.menu.menuState === "main") {
      this.prevMouseIsPressed = false;
      if (this.mainMenuOptions === 0) {
        if (mouseX < 500 && mouseX > 300) {
          if (mouseY < 400 && mouseY > 377) {
            if (mouseIsPressed) {
              console.log("Game started");
              this.isMenuOpen = false;
              console.log(this.isMenuOpen);

            }
          }
          if (mouseY < 425 && mouseY > 410) {
            if (mouseIsPressed) {
              console.log("Credits");
              this.menuState = "credits";
            }
          }
          if (mouseY < 460 && mouseY > 440) {
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
    image(this.scrollingImage, this.firstImg, 0, 1264, height);
    image(this.scrollingImage, this.secondImg, 0, 1264, height);

    //move the images to the left by change the value of the picture instances
    this.firstImg -= this.scrollSpeed;
    this.secondImg -= this.scrollSpeed;

    //reset position
    if (this.firstImg < -width - 464) {
      this.firstImg = width + 464;
    }
    if (this.secondImg < -width - 464) {
      this.secondImg = width + 464;
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
        this.pauseScreen.draw();
        // Continue game from pause logic
        if (keyIsPressed) {
          if (keyCode === 13) {
            this.isMenuOpen = false;
          }
        }
      }
      else if (this.menuState === "credits") {
        background('black');
        textFont(outrunFont);
        textSize(50);
        fill(128, 0, 0);
        stroke(0);
        strokeWeight(1);
        textAlign(CENTER);
        text("Cyberjump", 400, 70);

        // text for press any key
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
        text("Art made by:", 400, 400);
        text("Art made by:", 400, 430);
        text("Press ESC to return to menu", 400, 550);
        noStroke();

        if (keyIsPressed){
          if(keyCode === 27){
            game.menu.menuState = "main";
          }
        }

      } else if (this.menuState === "gameOver") {
        this.gameOver.draw();

      } else {
        // Logic for the title menu 
        this.titleScreen.draw();
        if (keyIsPressed === true) {
          this.menuState = "main";

        }
      }
    }
  }
}
