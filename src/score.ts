class Score extends DrawableEntity {
  private score: number;

  constructor() {
    super(createVector(), true);
    this.score = 0;
  }

  countScore() {
    fill("black");
    noStroke();
    this.score = this.score + deltaTime / 500;
    text(round(this.score), 40, 50);
    textFont(pixelFont);
  }

  public update() {
    this.countScore();
  }

  public draw() {
    this.update();
  }
}
