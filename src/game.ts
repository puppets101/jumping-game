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
  }
  
  draw() {
    if (this.menu.isMenuOpen) {
      this.menu.draw();
      this.menu.update();
      
    } else if(!this.menu.isMenuOpen) {
      this.gamePlay.draw();
      this.gamePlay.update();
    }
  }
}
