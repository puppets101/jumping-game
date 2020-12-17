class GameOver {
  backGroundColor: String;
  menuOptions: String;
  private menu: Imenu;

  constructor(menu: Imenu) {
    this.menuOptions = "";
    this.backGroundColor = "";
    this.menu = menu;
  }
  public playAgain() {}
  public quit() {}
  public draw() {
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

    const mouseClickedGO = () => {
      
      if (menu.menuState === "gameOver") {
        if (mouseX < 500 && mouseX > 300) {
          if (mouseY < 385 && mouseY > 366) {
            if (mouseIsPressed) {
              console.log("1");
              menu.isMenuOpen = false;
            }
        }
        if (mouseY < 429 && mouseY > 405) {
            if (mouseIsPressed) {
                console.log("2");
                menu.menuState = "main";
            }
          }
        }
      }
    };
    
    setTimeout(mouseClickedGO, 500);
    
  }
}
