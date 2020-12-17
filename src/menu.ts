class Menu implements Imenu {
  protected menuAudio: MenuAudio;
  protected gameOver: GameOver;
  protected pauseScreen: PauseScreen;
  protected titleScreen: TitleScreen;
  public isMenuOpen: boolean;
  public menuState: string;
  private mainMenuOptions: number;

  constructor(_isMenuOpen: boolean, _menuState: string) {
    this.menuAudio = new MenuAudio();
    this.gameOver = new GameOver(this);
    this.pauseScreen = new PauseScreen(this);
    this.titleScreen = new TitleScreen(this);
    this.isMenuOpen = _isMenuOpen;
    this.menuState = _menuState;
    this.mainMenuOptions = 0;
  }
  public startGame() {}
  public quit() {}

  public draw() {
      
      
   
    if (this.isMenuOpen === true) {
      if (this.menuState === "main") {

        const mouseClicked = () => {
          if (this.mainMenuOptions === 0) {
            if (mouseX < 500 && mouseX > 300) {

              if (mouseY < 400 && mouseY > 377 ) {
                if (mouseIsPressed) {
                    console.log("1");
                    this.isMenuOpen = false;
                  }
                
              }
              if (mouseY < 425 && mouseY > 410) {
                if (mouseIsPressed) {
                    console.log("2");
                    this.menuState = "gameOver"
                  }
              }
              if (mouseY < 460 && mouseY > 440) {
                if (mouseIsPressed) {
                    console.log("3");
                    this.menuState = ""
                  };
              }
            }
          }
        }
        mouseClicked();
        //main menu layout
        background("green");

        textFont(outrunFont);
        textSize(50);
        fill(128, 0, 0);
        textAlign(CENTER);
        text("Cyberjump", 400, 200);

        textFont(pixelFont);
        textSize(20);
        fill(128, 0, 0, );
        textAlign(CENTER);
        text("Start game", 400, 400);

        textFont(pixelFont);
        textSize(20);
        fill(128, 0, 0, );
        textAlign(CENTER);
        text("Credits", 400, 430);

        textFont(pixelFont);
        textSize(20);
        fill(128, 0, 0, );
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
