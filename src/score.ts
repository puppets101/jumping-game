class Score extends DrawableEntity {
  public score: number;

  constructor() {
    super(createVector(), true);
    this.score = 0;
  }

  private countScore() {
    this.score = this.score + deltaTime / 500;
    
  }

  public update() {
    this.countScore();
  }

  public draw() {
    fill("black");
    noStroke();
    text(round(this.score), 40, 50);
    textFont(pixelFont);
  }
}
