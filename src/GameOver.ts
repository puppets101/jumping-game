class GameOver {
  private backgroundColor: string;
  private textSize1: number;
  private textSize2: number;


  constructor() {
    this.backgroundColor = "black";

    this.textSize1 = 20;
    this.textSize2 = 20;

  }

  public update() {


    // handles the users click
    if (game.menu.menuState === "gameOver") {
      if (mouseY < 477 && mouseY > 458) {
        if (mouseX < 325 && mouseX > 205) {
          this.textSize1 = 30;
          if (mouseIsPressed) {
            console.log("Game Restarted");
            game.menu.changeMenuState("restart")
          }
        }
        else if (mouseX < 575 && mouseX > 493) {
          this.textSize2 = 30;
          if (mouseIsPressed) {
            console.log("Go to main");
            game.menu.changeMenuState("main")
          }
        } else {
          this.textSize1 = 20;
          this.textSize2 = 20;
        }
      } else {
        this.textSize1 = 20;
        this.textSize2 = 20;
      }
    }
  }

  public draw() {
    this.update();
    //game over layout
    background(this.backgroundColor);

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
    text("Again?", 266, 480);

    textFont(pixelFont);
    textSize(this.textSize2);
    fill(128, 0, 0);
    textAlign(CENTER);
    text("Quit", 533, 480);
  }
}
