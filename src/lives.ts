class Lives extends DrawableEntity {
  public life: number;
  constructor(position: p5.Vector, isVisible: boolean) {
    super(position, isVisible);
    this.life = 3;
  }

  public countLives() {
    this.life--;
    if (this.life === 0) {
      console.log("game over");
      game.gamePlay.character.isAlive = false;
      game.menu.isMenuOpen = true;
      game.menu.menuState = "gameOver";
      game.gamePlay = new GamePlay();
    }
  }

  public update() {}

  public draw() {
    fill("red");
    text(round(this.life), 750, 50);
    textFont(pixelFont);
  }
}
