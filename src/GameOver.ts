class GameOver {
  backGroundColor: String;
  menuOptions: String;
  private menu: Imenu;
  private prevMouseIsPressedGO: boolean;

  constructor(menu: Imenu) {
    this.menuOptions = "";
    this.backGroundColor = "";
    this.menu = menu;
    this.prevMouseIsPressedGO = false;
  }
  public playAgain() {}
  public quit() {}
  public update() {
    // handles the users click
    if (
      !this.prevMouseIsPressedGO &&
      mouseIsPressed &&
      this.menu.menuState === "gameOver"
    ) {
      const mouseClickedGO = () => {
        if (mouseX < 500 && mouseX > 300) {
          if (mouseY < 385 && mouseY > 366) {
            if (mouseIsPressed) {
              console.log("Game Restarted");
              this.menu.menuState = "restart"
            }
          }
          if (mouseY < 429 && mouseY > 405) {
            if (mouseIsPressed) {
              console.log("Go to main");
              this.menu.menuState = "main";
            }
          }
        }
      };
      mouseClickedGO();
    }
    this.prevMouseIsPressedGO = mouseIsPressed;
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
    text("Again?", 400, 390);

    textFont(pixelFont);
    textSize(20);
    fill(128, 0, 0);
    textAlign(CENTER);
    text("Quit", 400, 430);
  }
}
