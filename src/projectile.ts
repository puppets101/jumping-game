class Projectile extends MovableEntity {
  private color: number;
  private diameter: number;

  constructor(_color: number, _diameter: number) {
    super();
    this.color = _color;
    this.diameter = _diameter;
  }
  public shoot() {}

  public update() {}

  public draw() {}
}
