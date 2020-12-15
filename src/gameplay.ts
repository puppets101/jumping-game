class GamePlay extends Game {
  private score: Score;
  private character: Character;
  private obstacle: Obstacle;
  private platform: Platform;
  private background: Background;
  private lives: Lives;
  private gameAudio: GameAudio;
  private pauseScreen: PauseScreen;
  // private projectile: Projectile;
  private drawableEntity: DrawableEntity;
  private MovableEntity: MovableEntity;

  constructor(
    _score: number,
    _character: Character,
    _obstacle: Obstacle,
    _platform: Platform,
    _background: Background,
    _lives: Lives,
    _gameAudio: GameAudio,
    _pauseScreen: PauseScreen
    // _projectile: Projectile
  ) {
    super();
    this.score = _score;
    this.character = _character;
    this.obstacle = _obstacle;
    this.platform = _platform;
    this.background = _background;
    this.lives = _lives;
    this.gameAudio = _gameAudio;
    this.pauseScreen = _pauseScreen;
    this.projectile = _projectile;
  }

  public update() {}

  public draw() {}

  pauseGame() {}

  gameOver() {}
}
