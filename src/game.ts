class Game {
  // private menu: Menu;
  public gamePlay: GamePlay;
  public menu: Menu;

  constructor() {
    this.gamePlay = new GamePlay();
    
    //change boolean value to false to run game without menu
    this.menu = new Menu("title");
  }

  update() {
    if (keyIsPressed && this.menu.menuState === "close") {
      if (keyCode === 27) {
        this.menu.menuState = "pause"
      }
    }
    if (this.menu.menuState !== "close") {
      this.menu.update();
    } else if (this.menu.menuState === "close") {
      this.gamePlay.update();
    }

    if (this.gamePlay.isGameOver === true) {
      this.menu.menuState = "gameOver"
      this.gamePlay = new GamePlay();
      this.gamePlay.isGameOver = false;
    } else if (this.menu.menuState === "restart") {
      this.gamePlay = new GamePlay();
      this.gamePlay.isGameOver = false;
      this.menu.menuState = "close"
    }
  }

  draw() {
       
    if (this.menu.menuState !== "close" && this.menu.menuState !== "pause") {
      this.menu.draw();
    } else if (this.menu.menuState === "pause") {
      this.gamePlay.draw();
      this.menu.draw();
    } else if (this.menu.menuState === "close") {
      this.gamePlay.draw();
    }
  }
}
