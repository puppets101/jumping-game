class Game {
  // private menu: Menu;
  public gamePlay: GamePlay;
  private menu: Menu;
  

  constructor() {
    this.gamePlay = new GamePlay();

    //change boolean value to false to run game without menu
    this.menu = new Menu(true, "");
    
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
