class GamePlay extends Game {
  private score: Score;
  private character: Character;
  private obstacle: Obstacle;
  private platform: Platform;
  private background: Background;
  private lives: Lives;
  private gameAudio: GameAudio;
  private pauseScreen: PauseScreen;
  private projectile: Projectile;
  private drawableEntity: DrawableEntity;
  private movableEntity: MovableEntity;

  constructor() {
    super();
    this.score = new Score();
    this.character = new Character();
    this.obstacle = new Obstacle();
    this.platform = new Platform();
    this.background = new Background();
    this.lives = new Lives();
    this.gameAudio = new GameAudio();
    this.pauseScreen = new PauseScreen();
    this.projectile = new Projectile();
    
  }
  pauseGame() {}

  gameOver() {}

  public update() {}

  public draw() {}
}
