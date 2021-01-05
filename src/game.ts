class Game {
  // private menu: Menu;
  public gamePlay: GamePlay;
  private menu: Menu;

  constructor() {
    this.gamePlay = new GamePlay();
    this.menu = new Menu(false, "");
  }

  update() {
    if (this.menu.isMenuOpen) {
      this.menu.update();
      
    } else {
      this.gamePlay.update();
    }
  }

  draw() {
    if (this.menu.isMenuOpen) {
      this.menu.draw();
      this.menu.update();
    } else {
      this.gamePlay.draw();
    }
  }
}
