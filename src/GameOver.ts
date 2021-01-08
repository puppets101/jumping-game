class GameOver {
  backGroundColor: String;
  menuOptions: String;
  private menu: Imenu;
  private textSize1: number;
  private textSize2: number;


  constructor(menu: Imenu) {
    this.menuOptions = "";
    this.backGroundColor = "";
    this.menu = menu;
    this.textSize1 = 20;
    this.textSize2 = 20;

  }

  public update() {
    console.log(game.finalScore);
    
    // handles the users click
    if (this.menu.menuState === "gameOver") {
      const mouseClickedGO = () => {
        if (mouseX < 500 && mouseX > 300) {
          if (mouseY < 385 && mouseY > 366) {
            this.textSize1 = 30;
            if (mouseIsPressed) {
              console.log("Game Restarted");
              this.menu.menuState = "restart"
              // game.gamePlay.finalScore = 0;
            }
          }
          else if (mouseY < 429 && mouseY > 405) {
            this.textSize2 = 30;
            if (mouseIsPressed) {
              console.log("Go to main");
              this.menu.menuState = "main";
              // game.gamePlay.finalScore = 0;
            }
          } else {
            this.textSize1 = 20;
            this.textSize2 = 20;
          }
        } else {
          this.textSize1 = 20;
          this.textSize2 = 20;
        }
      };
      mouseClickedGO();
    }
  }
  public draw() {
    this.update();
    //main menu layout
    background("black");

    textFont(pixelFont);
    textSize(50);
    fill(128, 0, 0);
    textAlign(CENTER);
    text("Game Over", 400, 200);

    textFont(pixelFont);
    textSize(20);
    fill(128, 0, 0);
    textAlign(CENTER);
    text("You died", 400, 250);

    textFont(pixelFont);
    textSize(20);
    fill(128, 0, 0);
    textAlign(CENTER);
    text("Score:" + " " + Math.round(game.finalScore), 400, 280);

    textFont(pixelFont);
    textSize(this.textSize1);
    fill(128, 0, 0);
    textAlign(CENTER);
    text("Again?", 400, 390);

    textFont(pixelFont);
    textSize(this.textSize2);
    fill(128, 0, 0);
    textAlign(CENTER);
    text("Quit", 400, 430);
  }
}
